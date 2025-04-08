export default function TodoItem({ todo, onDelete }) {
  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow">
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
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(); // This now receives the id from the parent
        }}
        className="ml-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}