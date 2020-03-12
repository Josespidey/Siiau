const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserPermissionSchema = new Schema(
    {
        id: { type: Integer, required: true },
        permissions: { type: String, required: true, min: 20},
    }
);

module.exports = mongoose.model('UserPermission', UserPermissionSchema);