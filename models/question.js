const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  screenName: {
    type: String
  },
  dob: {
    type: String
  },
  gender: {
    type: String
  },
  country: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  }
});

module.exports = mongoose.model('question', questionSchema);
