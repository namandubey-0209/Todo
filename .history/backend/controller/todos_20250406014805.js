import Todo from '../models/Todo.js';

// Get all todos for the logged-in user
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.userId }).sort('-createdAt');
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
};

// Create a new todo (with user association)
export const createTodo = async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    
    const newTodo = new Todo({
      title,
      description,
      dueDate,
      priority,
      user: req.userId,
    });

    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create todo' });
  }
};

// Update a todo (only if user owns it)
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed, dueDate, priority } = req.body;

    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: id, user: req.userId },
      { title, description, completed, dueDate, priority },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update todo' });
  }
};

// Delete a todo (only if user owns it)
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findOneAndDelete({ _id: id, user: req.userId });

    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete todo' });
  }
};