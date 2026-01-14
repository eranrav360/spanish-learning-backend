import mongoose, { Schema, Document } from 'mongoose';

export interface ILesson extends Document {
  title: string;
  description: string;
  level: number;
  icon: string;
  color: string;
  totalExercises: number;
  completed: boolean;
}

const LessonSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  level: { type: Number, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
  totalExercises: { type: Number, required: true },
  completed: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model<ILesson>('Lesson', LessonSchema);
