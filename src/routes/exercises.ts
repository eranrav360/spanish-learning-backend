import { Router, Request, Response } from 'express';
import Exercise from '../models/Exercise';

const router = Router();

// Get exercises by lesson ID
router.get('/:lessonId', async (req: Request, res: Response) => {
  try {
    const exercises = await Exercise.find({ lessonId: req.params.lessonId });
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exercises', error });
  }
});

export default router;
