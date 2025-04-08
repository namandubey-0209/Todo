import express from 'express';
import { 
  getTodos, 
  createTodo, 
  updateTodo, 
  deleteTodo 
} from '../controller/todos.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getTodos);
router.post('/', auth, createTodo);
router.put('/:id', auth, updateTodo);
router.delete('/:id', auth, deleteTodo);

export default router;