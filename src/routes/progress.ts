import { Router, Request, Response } from 'express';
import UserProgress from '../models/UserProgress';

const router = Router();

// Get all user progress
router.get('/', async (req: Request, res: Response) => {
  try {
    const progress = await UserProgress.find();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching progress', error });
  }
});

// Save or update user progress
router.post('/', async (req: Request, res: Response) => {
  try {
    const { lessonId, completed, score, completedExercises, totalExercises } = req.body;

    const existingProgress = await UserProgress.findOne({ lessonId });

    if (existingProgress) {
      existingProgress.completed = completed;
      existingProgress.score = Math.max(existingProgress.score, score);
      existingProgress.completedExercises = Math.max(existingProgress.completedExercises, completedExercises);
      existingProgress.lastAccessed = new Date();
      await existingProgress.save();
      res.json(existingProgress);
    } else {
      const newProgress = new UserProgress({
        lessonId,
        completed,
        score,
        completedExercises,
        totalExercises,
        lastAccessed: new Date(),
      });
      await newProgress.save();
      res.json(newProgress);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error saving progress', error });
  }
});

// Get user stats
router.get('/stats', async (req: Request, res: Response) => {
  try {
    const allProgress = await UserProgress.find();

    const totalScore = allProgress.reduce((sum, p) => sum + p.score, 0);
    const totalLessonsCompleted = allProgress.filter(p => p.completed).length;
    const level = Math.floor(totalScore / 100) + 1;

    // Simple streak calculation (days accessed in last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentProgress = allProgress.filter(p => p.lastAccessed >= sevenDaysAgo);
    const currentStreak = recentProgress.length > 0 ? Math.ceil((Date.now() - sevenDaysAgo.getTime()) / (1000 * 60 * 60 * 24)) : 0;

    res.json({
      totalScore,
      currentStreak,
      totalLessonsCompleted,
      level,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stats', error });
  }
});

export default router;
