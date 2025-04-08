import Todo from '../models/Todo.js';

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.userId });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    const todo = new Todo({ 
      title, 
      description, 
      dueDate, 
      priority, 
      user: req.userId 
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create todo' });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOneAndUpdate(
      { _id: id, user: req.userId },
      req.body,
      { new: true }
    );
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update todo' });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: id, user: req.userId });
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete todo' });
  }
};