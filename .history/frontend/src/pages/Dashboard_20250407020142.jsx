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

  const addTodo = async (todoData) => {
    try {
      const newTodo = await createTodo({
        title: todoData.title,
        description: todoData.description || '',
        dueDate: todoData.dueDate || null,
        priority: todoData.priority || 'medium',
      });
      setTodos(prev => [...prev, newTodo]);
      return newTodo;
    } catch (err) {
      console.error('Create todo error:', err.response?.data);
      throw err;
    }
  };

  // Updated to handle full todo updates
  const updateTodoItem = async (id, updatedData) => {
    try {
      const updated = await updateTodo(id, updatedData);
      setTodos(prev => prev.map(t => t._id === id ? updated : t));
      return updated;
    } catch (err) {
      console.error('Update todo error:', err.response?.data);
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
    updateTodo: updateTodoItem, // Renamed to avoid naming conflict
    deleteTodo,
    refetch: fetchTodos
  };
};