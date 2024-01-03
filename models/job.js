const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  recruiterName: { type: String, required: false },
  companyName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  logoURL: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: String, required: true },
  jobType: { type: String, enum: ["Full-time", "Part-time"], required: true },
  remote: { type: String, enum: ["Remote", "Office"], required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  about: { type: String, required: true },
  skillsRequired: { type: [String], required: true },
  information: { type: String, required: false },
});

module.exports = mongoose.model("JobPost", jobPostSchema);
