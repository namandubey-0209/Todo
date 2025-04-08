import { useState } from 'react';
import { useTodos } from '../../hooks/useTodos';

export default function TodoCreateForm() {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await addTodo({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </form>
  );
}