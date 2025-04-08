import { useState } from 'react';

export default function TodoItem({ todo, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDesc, setEditedDesc] = useState(todo.description || '');

  const handleUpdate = () => {
    onUpdate(todo._id, {
      title: editedTitle,
      description: editedDesc
    });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow">
      {isEditing ? (
        <div className="flex-1 min-w-0 space-y-2">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <textarea
            value={editedDesc}
            onChange={(e) => setEditedDesc(e.target.value)}
            className="w-full p-2 border rounded text-sm"
            rows="3"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleUpdate}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 bg-gray-200 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-800">
            {todo.title}
          </p>
          {todo.description && (
            <p className="text-xs text-gray-500 truncate">
              {todo.description}
            </p>
          )}
        </div>
      )}
      
      {!isEditing && (
        <div className="flex space-x-2">
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-colors"
            aria-label="Edit todo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(todo._id);
            }}
            className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
            aria-label="Delete todo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}