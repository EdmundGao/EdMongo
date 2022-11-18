let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Assignment = require('../models/assignment');
let assignmentController = require('../controller/assignment');

router.get('/',assignmentController.displayAssignmentList);

router.get('/add', assignmentController.displayAddPage);

router.post('/add',assignmentController.processAddPage);

router.get('/edit/:id',assignmentController.displayEditPage);

router.post('/edit/:id',assignmentController.processEditPage);

router.get('/delete/:id',assignmentController.performDelete);


module.exports=router;

