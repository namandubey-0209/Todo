import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
     },
    description: {
      type: String,
      },
    completed: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: Date,
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const Todo = mongoose.model('Todo', TodoSchema);
export default Todo;