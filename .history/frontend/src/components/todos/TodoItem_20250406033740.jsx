export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between p-3 border-b">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id)}
          className="h-5 w-5 mr-3 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
        />
        <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo._id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  )
}