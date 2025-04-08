import { useTodos } from '../../hooks/useTodos';

export default function TodoItem({ todo }) {
  const { updateTodo, deleteTodo } = useTodos();

  const handleToggle = async () => {
    await updateTodo(todo._id, { completed: !todo.completed });
  };

  const handleDelete = async () => {
    await deleteTodo(todo._id);
  };

  return (
    <div className={`p-4 border rounded-lg flex items-center ${todo.completed ? 'bg-gray-50' : 'bg-white'}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="h-5 w-5 mr-3"
      />
      <div className="flex-1">
        <h3 className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.title}
        </h3>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}