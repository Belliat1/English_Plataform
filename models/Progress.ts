import mongoose, { Schema, model, models } from 'mongoose';

const progressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    progress: [
      {
        level: { type: String, required: true },
        modules: [{ type: String }],
      },
    ],
  },
  { timestamps: true }
);

const Progress = models.Progress || model('Progress', progressSchema);
export default Progress;
