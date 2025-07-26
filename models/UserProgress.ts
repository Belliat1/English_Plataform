// plataforma-ingles/models/UserProgress.ts
import mongoose, { Schema, model, models } from 'mongoose';

const UserProgressSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
  progress: [{
    level: { type: String, enum: ['Principiante', 'Intermedio', 'Avanzado'], required: true },
    modules: [String]  // Lista de IDs de módulos completados
  }]
});

const UserProgress = models.UserProgress || model('UserProgress', UserProgressSchema);

export default UserProgress;
