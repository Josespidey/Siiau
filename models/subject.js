const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubjectSchema = new Schema(
    {
        nrc: { type: String, required: true, max: 15 },
        department: { type: String, required: true, max: 50 },
        area: { type: String, required: true, },
        theory_hrs: { type: Integer, required: true},
        practical_hrs: { type: Integer, required: true },
        credits: { type: Integer, required: true },
        level: { type: String, required: true },
    }
);

module.exports = mongoose.model('Subject', SubjectSchema);