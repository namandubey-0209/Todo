import TodoItem from './TodoItem';

export default function TodoList({ todos, onDelete, loading, error }) {
  // Loading state
  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-100 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
        <p className="font-medium">Error loading todos</p>
        <p className="text-sm">{error.message || 'Unknown error occurred'}</p>
      </div>
    );
  }

  // Validate todos is an array
  if (!Array.isArray(todos)) {
    console.error('Invalid todos data:', todos);
    return (
      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700 rounded">
        <p className="font-medium">Data format error</p>
        <p className="text-sm">Todos data is not in expected format</p>
      </div>
    );
  }

  // Empty state
  if (todos.length === 0) {
    return (
      <div className="text-center py-8">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">No todos</h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by creating a new todo
        </p>
      </div>
    );
  }

  // Normal state
  return (
    <ul className="space-y-3">
      {todos.map(todo => (
        <li key={todo._id} className="group relative">
          <TodoItem
            todo={todo}
            onDelete={() => onDelete(todo._id)} // Pass the delete handler with todo._id
          />
          {/* Remove the duplicate delete button here */}
        </li>
      ))}
    </ul>
  );
}