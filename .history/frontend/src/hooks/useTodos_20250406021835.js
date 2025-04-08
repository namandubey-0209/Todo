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
      setTodos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todoData) => {
    const newTodo = await createTodo(todoData);
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = async (id) => {
    const todo = todos.find(t => t._id === id);
    const updated = await updateTodo(id, { completed: !todo.completed });
    setTodos(todos.map(t => t._id === id ? updated : t));
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(t => t._id !== id));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, loading, error, addTodo, toggleTodo, removeTodo, refetch: fetchTodos };
};