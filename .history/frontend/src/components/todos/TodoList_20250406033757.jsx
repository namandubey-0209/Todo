import TodoItem from './TodoItem'

export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.length === 0 ? (
        <li className="py-4 text-center text-gray-500">No todos yet</li>
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
  )
}