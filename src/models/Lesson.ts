import mongoose, { Schema, Document } from 'mongoose';

export interface VocabularyItem {
  spanish: string;
  hebrew: string;
  example?: string;
}

export interface ILesson extends Document {
  title: string;
  description: string;
  level: number;
  icon: string;
  color: string;
  totalExercises: number;
  completed: boolean;
  vocabulary: VocabularyItem[];
  grammarNotes?: string;
}

const LessonSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  level: { type: Number, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
  totalExercises: { type: Number, required: true },
  completed: { type: Boolean, default: false },
  vocabulary: [{
    spanish: { type: String, required: true },
    hebrew: { type: String, required: true },
    example: { type: String },
  }],
  grammarNotes: { type: String },
}, { timestamps: true });

export default mongoose.model<ILesson>('Lesson', LessonSchema);
