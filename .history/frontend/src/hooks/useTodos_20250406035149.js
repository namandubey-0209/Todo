import { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../api/todos';

export const useTodos = () => {
  const [todos, setTodos] = useState([]); // Initialize as empty array
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

  // ... (keep other functions the same)

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
      setTodos(todos.map(t => t._id === id ? updated