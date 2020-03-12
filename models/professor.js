const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfessorSchema = new Schema(
    {
        code: { type: String, max: 10 },
        first_name: { type: String, min: 10, max: 50 },
        last_name: { type: String, min: 10, max: 100 },    
    }
);

// Virtual for professor's full name
ProfessorSchema
.virtual('name')
.get(function() {
    if (!this.first_name || !this.last_name) {
        return '';
    } else {
        return this.last_name + ',' + this.first_name;
    }
});

module.exports = mongoose.model('Professor', ProfessorSchema);