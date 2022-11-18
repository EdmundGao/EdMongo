let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Assignment = require('../models/assignment');

module.exports.displayAssignmentList = (req,res,next)=>{
    Assignment.find((err,Assignmentlist)=> {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('assignment/list',{
                title:'Assignment Tracker',
                Assignmentlist: Assignmentlist
            })
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('assignment/add',{title:'Add Assignment'})
}

module.exports.processAddPage = (req,res,next)=>{
    let newAssignment = Assignment({
        "course":req.body.course,
        "assignments":req.body.assignments,
        "worth":req.body.worth,
        "description":req.body.description,
        "due":req.body.due
    });
    Assignment.create(newAssignment,(err,Assignment) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/assignment-list');
        }
    })
}

module.exports.displayEditPage =(req,res,next)=>{
    let id= req.params.id;
    Assignment.findById(id,(err,AssignmentToEdit)=>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        res.render('assignment/edit',{title:'Edit Assignment', assignment:AssignmentToEdit});
    }
    });
}

module.exports.processEditPage =(req,res,next)=>{
    let id= req.params.id;
    let updateAssignment = Assignment({
        "_id":id,
        "course":req.body.course,
        "assignments":req.body.assignments,
        "worth":req.body.worth,
        "description":req.body.description,
        "due":req.body.due
    });
    Assignment.updateOne({_id:id},updateAssignment,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/assignment-list');
        }
    });
}

module.exports.performDelete = (req,res,next)=>{
    let id= req.params.id;
    Assignment.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/assignment-list');
        }
    })
}