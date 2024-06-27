const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 4000;
const StudentModel = require('./models/Student'); // Adjust path as necessary

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/student");

app.post('/applicationform', async (req, res) => {
  try {
    const student = await StudentModel.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    console.error("Error creating student:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get('/', async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.json(students);
  } catch (err) {
    console.error("Error retrieving students:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get('/students/:id', async (req, res) => {
  try {
    const student = await StudentModel.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    console.error("Error retrieving student:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.put('/students/:id', async (req, res) => {
  try {
    const student = await StudentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    console.error("Error updating student:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.delete('/students/:id', async (req, res) => {
  try {
    const student = await StudentModel.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    console.error("Error deleting student:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

