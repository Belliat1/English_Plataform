// models/Certificate.ts
import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  examName: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Certificate || mongoose.model("Certificate", CertificateSchema);
