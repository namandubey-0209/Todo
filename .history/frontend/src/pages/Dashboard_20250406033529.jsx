import { useAuth } from '../hooks/useAuth';
import { useTodos } from '../hooks/useTodos';
import TodoCreateForm from '../components/todos/TodoForm';
import TodoList from '../components/todos/TodoList';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { todos, loading, error } = useTodos();

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Welcome, {user?.username}!</h1>
        <button 
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </header>

      <TodoCreateForm />
      
      {loading ? (
        <p>Loading todos...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <TodoList todos={todos} />
      )}
    </div>
  );
}