import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete }) {
  // Validate todos is an array
  if (!Array.isArray(todos)) {
    console.error('Invalid todos data:', todos);
    return (
      <div className="p-4 text-red-500 bg-red-50 rounded">
        Error: Could not load todos
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {todos.length === 0 ? (
        <li className="py-4 text-center text-gray-500">
          No todos yet. Add one to get started!
        </li>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
}