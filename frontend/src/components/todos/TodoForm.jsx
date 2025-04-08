import { useState } from 'react';

export default function TodoForm({ onSubmit }) {
  const [todoData, setTodoData] = useState({
    title: '',
    description: '',
    dueDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoData.title.trim()) return;
    onSubmit({
      ...todoData,
      title: todoData.title.trim()
    });
    // Clear form after submission
    setTodoData({
      title: '',
      description: '',
      dueDate: ''
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
      
      {/* Only description field remains */}
      <div className="mt-2">
        <input
          type="text"
          name="description"
          value={todoData.description}
          onChange={handleChange}
          placeholder="Description (optional)"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>
  );
}