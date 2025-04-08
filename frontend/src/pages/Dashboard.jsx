import { useTodos } from '../hooks/useTodos';
import TodoForm from '../components/todos/TodoForm';
import TodoList from '../components/todos/TodoList';

export default function Dashboard() {
  const { todos, loading, error, addTodo, updateTodo, deleteTodo } = useTodos();

  if (loading) return <div className="text-center p-8">Loading todos...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;

  return (
    <div className="max-w-md mx-auto p-4">
      <TodoForm onSubmit={addTodo} />
      <TodoList 
        todos={todos}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
        loading={loading}
        error={error}
      />
    </div>
  );
}