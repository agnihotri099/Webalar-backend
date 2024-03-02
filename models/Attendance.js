const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["present", "absent", "late"],
    default: "present",
  },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;
