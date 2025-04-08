import { useState, useEffect } from 'react';
import { 
  getTodos, 
  createTodo, 
  updateTodo, 
  deleteTodo 
} from '../api/todos';

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
    try {
      const newTodo = await createTodo(todoData);
      setTodos([...todos, newTodo]);
    } catch (err) {
      throw err;
    }
  };

  // Add update and delete functions...

  useEffect(() => { fetchTodos(); }, []);

  return { todos, loading, error, addTodo, fetchTodos };
};