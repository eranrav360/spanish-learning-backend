import { Router, Request, Response } from 'express';
import Lesson from '../models/Lesson';

const router = Router();

// Get all lessons
router.get('/', async (req: Request, res: Response) => {
  try {
    const lessons = await Lesson.find().sort({ level: 1 });
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lessons', error });
  }
});

// Get lesson by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lesson', error });
  }
});

export default router;
