import mongoose, { Schema, Document } from 'mongoose';

export interface IUserProgress extends Document {
  lessonId: string;
  completed: boolean;
  score: number;
  completedExercises: number;
  totalExercises: number;
  lastAccessed: Date;
}

const UserProgressSchema: Schema = new Schema({
  lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson', required: true },
  completed: { type: Boolean, default: false },
  score: { type: Number, default: 0 },
  completedExercises: { type: Number, default: 0 },
  totalExercises: { type: Number, required: true },
  lastAccessed: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model<IUserProgress>('UserProgress', UserProgressSchema);
