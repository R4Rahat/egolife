import mongoose from "mongoose";

const appSchema = new mongoose.Schema({
  name: { type: String, required: true },
  version: { type: String, required: true },
  description: String,
  icon: String, // path to icon file, optional
  fileUrl: { type: String, required: true }, // path to APK/EXE
  fileSize: Number, // bytes, for display
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});


const App = mongoose.model("App", appSchema);

export default App;