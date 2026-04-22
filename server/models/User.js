const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name : { type: String, required: true},
    last_name : String,
    email : { type: String, required: true, unique: true},
    password: { type: String, required: true},
    phone : { type: String, required: true, unique: true},
    role: { type: String, enum : ["customer", "admin"], required: true},
    address: [],
    createdAt: true,
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);