const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  assigneeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  taskStatus: {
    type: String,
    enum: ["pending", "in progress", "completed"],
    default: "pending",
  },
  dateAssigned: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
