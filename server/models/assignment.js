let mongoose = require('mongoose');

let assignmentModel = mongoose.Schema({
    course: String,
    assignment: String,
    worth: String,
    description: String,
    due: Number
    },
    {
        collection: "assignments"
    }

);
module.exports = mongoose.model('Assignment', assignmentModel);
