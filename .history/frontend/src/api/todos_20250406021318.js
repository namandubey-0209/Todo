import api from './axios';

export const getTodos = async () => {
  const response = await api.get('/todos');
  return response.data;
};

export const createTodo = async (todoData) => {
  const response = await api.post('/todos', todoData);
  return response.data;
};

export const updateTodo = async (id, updates) => {
  const response = await api.put(`/todos/${id}`, updates);
  return response.data;
};

export const deleteTodo = async (id) => {
  await api.delete(`/todos/${id}`);
};