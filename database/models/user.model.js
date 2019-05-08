const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = schema({
  avatar: { type: String }
})

const User = mongoose.model('user', userSchema);

module.exports = User;