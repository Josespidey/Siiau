const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        first_name: { type: String, required: true, min: 2, max: 50 },
        last_name: { type: String, required: true, min: 2, max: 50 },
        email: { type: String, required: true, min: 10, max: 100 },
        password: { type: String, required: true, min: 10, max: 30 },
        user_permission: { type: Schema.Types.ObjectId, ref: 'UserPermission', required: true },
    }
);

// Virtual for user's full name
UserSchema
.virtual('name')
.get(function() {
    if (!this.first_name || !this.last_name) {
        return '';
    } else {
        return this.first_name + ' ' + this.last_name;
    }
});

module.exports = mongoose.model('User', UserSchema);