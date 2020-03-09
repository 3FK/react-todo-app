const TodoController = require('../controllers/TodoController');
module.exports = (app) => { 
    app.get('/todo', TodoController.getTodo);
    app.post('/todo', TodoController.addTodo);
    app.put('/todo/:id', TodoController.updateTodo);
    app.delete('/todo/:id', TodoController.deleteTodo);
}