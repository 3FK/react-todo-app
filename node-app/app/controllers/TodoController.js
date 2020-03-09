const db = require('../db/DatabaseAccess');
const uuid = require('uuid/v4');
const TodoModel = require('../models/TodoModel');

exports.addTodo = (req, res) =>  {
    let data = TodoModel({"ID": uuid(), "LABEL": req.body.label});
    let params = [data.ID, data.LABEL, data.IS_COMPLETE, data.IS_DELETE];
    db.run('insert into TODOS (ID, LABEL, IS_COMPLETE, IS_DELETE) values (?,?,?,?)', params, (err, rows) => {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : data.ID
        })
    })
};
exports.getTodo = (req, res) => {
    let todoArr = [];
    db.all('select * from TODOS', todoArr, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
          }
          res.json({
              "message":"success",
              "data":rows
          })
    })
};
exports.updateTodo = (req, res) => {
    const id = req.params.id;
    //let data = TodoModel({"ID":req.body.id, "LABEL":req.body.label, "IS_COMPLETE":req.body.isComplete, "IS_DELETE": req.body.isDelete});
    let params = [req.body.LABEL, req.body.IS_COMPLETE, req.body.IS_DELETE, id];
    db.run('update TODOS set LABEL = COALESCE(?, LABEL), IS_COMPLETE = COALESCE(?, IS_COMPLETE), IS_DELETE = COALESCE(?, IS_DELETE) where ID = ?', params, (err, rows) => {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": params,
            "id" : "data.ID"
        })
    })
};
exports.deleteTodo = (req, res) => {
    const id = req.params.id;
    db.run('delete from TODOS where ID = ?',id, (err, rows) => {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": rows,
            "id" : "data.ID"
        })
    })
}