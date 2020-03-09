const express  = require('express');

const PORT_NUMBER = 3040;

const app = express();



app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin' , 'http://localhost:3000');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json());
app.get('/', (req, res) => {
    res.send("hello world");
});
// routes
require('./app/router/TodoRoutes')(app);

app.listen(PORT_NUMBER, () => {
    console.log(`server start on ${PORT_NUMBER}`);
});