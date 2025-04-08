import { useState } from 'react';

export default function TodoForm({ onSubmit }) {
  const [todoData, setTodoData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoData.title.trim()) return; // Prevent empty submissions
    onSubmit({
      ...todoData,
      title: todoData.title.trim() // Clean up whitespace
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <input
          type="text"
          name="title"
          value={todoData.title}
          onChange={handleChange}
          placeholder="What needs to be done?"
          className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
      
      {/* Optional additional fields */}
      <div className="mt-2 grid grid-cols-2 gap-2">
        <input
          type="text"
          name="description"
          value={todoData.description}
          onChange={handleChange}
          placeholder="Description (optional)"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="priority"
          value={todoData.priority}
          onChange={handleChange}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
    </form>
  );
}