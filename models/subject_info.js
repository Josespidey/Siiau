const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubjectInfoSchema = new Schema(
    {
        nrc: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
        professor: { type: Schema.Types.ObjectId, ref: 'Professor' },
        subject_key: { type: String, required: true, min: 3, max: 10 },
        section: { type: String, required: true, min: 3, max: 10 },
        total_places: { type: Integer, required: true },
        ocuppied_places: { type: Integer, required: true },
        start: { type: String, min: 2, max: 5 },
        end: { type: String, min: 2, max: 5 },
        classroom: { type: String, min:2, max: 5 },
        building: { type:String, min: 2, max: 5 },
        days: { type: Array },
        course_start: { type: Date, required: true },
        course_end: { type: Date, required: true},
    }
);

// Virtual for subject's available spaces
SubjectInfoSchema
.virtual('available_spaces')
.get(function() {
    return this.total_places - this.ocuppied_places;
})

module.exports = mongoose.model();