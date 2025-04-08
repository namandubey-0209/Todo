import { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../api/todos';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await getTodos();
      setTodos(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      setError(err.message);
      setTodos([]);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (text) => {
    try {
      const newTodo = await createTodo({ text });
      setTodos(prev => [...prev, newTodo]);
      return newTodo;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const toggleTodo = async (id) => {
    try {
      const todo = todos.find(t => t._id === id);
      if (!todo) throw new Error('Todo not found');
      const updated = await updateTodo(id, { completed: !todo.completed });
      setTodos(prev => prev.map(t => t._id === id ? updated : t));
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { 
    todos, 
    loading, 
    error, 
    addTodo,
    toggleTodo,
    deleteTodo,
    refetch: fetchTodos
  };
};