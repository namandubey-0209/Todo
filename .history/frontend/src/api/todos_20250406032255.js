import api from './axios';

export const getTodos = () => api.get('/todos');
export const createTodo = (todoData) => api.post('/todos', todoData);
export const updateTodo = (id, updates) => api.patch(`/todos/${id}`, updates);
export const deleteTodo = (id) => api.delete(`/todos/${id}`);