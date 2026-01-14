import mongoose, { Schema, Document } from 'mongoose';

export interface IExercise extends Document {
  lessonId: string;
  type: 'translation' | 'multipleChoice' | 'fillInBlank';
  question: string;
  questionSpanish?: string;
  correctAnswer: string;
  options?: string[];
  hint?: string;
}

const ExerciseSchema: Schema = new Schema({
  lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson', required: true },
  type: {
    type: String,
    enum: ['translation', 'multipleChoice', 'fillInBlank'],
    required: true
  },
  question: { type: String, required: true },
  questionSpanish: { type: String },
  correctAnswer: { type: String, required: true },
  options: [{ type: String }],
  hint: { type: String },
}, { timestamps: true });

export default mongoose.model<IExercise>('Exercise', ExerciseSchema);
