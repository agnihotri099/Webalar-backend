const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

// Route to get all attendance records
router.get("/", attendanceController.getAllAttendance);

// Route to create a new attendance record
router.post("/", attendanceController.createAttendance);

// Route to update an existing attendance record
router.put("/:id", attendanceController.updateAttendance);

// Route to delete an attendance record
router.delete("/:id", attendanceController.deleteAttendance);

module.exports = router;
