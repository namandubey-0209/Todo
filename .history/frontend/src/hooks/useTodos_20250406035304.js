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
      // Ensure data is always an array
      setTodos(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      setError(err.message);
      setTodos([]); // Reset to empty array on error
    } finally {
      setLoading(false);
    }
  };
  const addTodo = async (text) => {
    try {
      const newTodo = await createTodo({ text });
      setTodos([...todos, newTodo]);
    } catch (err) {
      throw err;
    }
  };

  const toggleTodo = async (id) => {
    try {
      const todo = todos.find(t => t._id === id);
      const updated = await updateTodo(id, { completed: !todo.completed });
      setTodos(todos.map(t => t._id === id ? updated : t));
    } catch (err) {
      throw err;
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(t => t._id !== id));
    } catch (err) {
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
    addTodo: async (text) => {
      const newTodo = await createTodo({ text });
      setTodos(prev => [...prev, newTodo]);
    },
    toggleTodo: async (id) => {
      const todo = todos.find(t => t._id === id);
      const updated = await updateTodo(id, { completed: !todo.completed });
      setTodos(todos.map(t => t._id === id ? updated : t));
    },
    deleteTodo: async (id) => {
      await deleteTodo(id);
      setTodos(todos.filter(t => t._id !== id));
    },
    refetch: fetchTodos
  };
};