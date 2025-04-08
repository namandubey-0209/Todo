import TodoItem from './TodoItem';

export default function TodoList({ todos }) {
  return (
    <div className="space-y-3">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos yet. Add one to get started!</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} />
        ))
      )}
    </div>
  );
}