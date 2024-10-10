const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/google-calendar-clone-master", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  time: String,
  userDetails: {
    name: String,
    email: String,
    phoneNumber: String,
  },
});

const Event = mongoose.model("Event", eventSchema);
