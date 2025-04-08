import api from './axios';

export const getTodos = async () => {
  try {
    const response = await api.get('/todos');
    // Ensure response data is an array
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Error fetching todos:', error);
    return []; // Return empty array on error
  }
};

// Keep other functions the same
export const createTodo = (todoData) => api.post('/todos', todoData);
export const updateTodo = (id, updates) => api.patch(`/todos/${id}`, updates);
export const deleteTodo = (id) => api.delete(`/todos/${id}`);