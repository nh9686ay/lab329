const express = require('express');
const todoControllers = require('./controllers/todos');

const app = express();
app.use("/todos", todoControllers)


app.set('view engine', 'hbs');




const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Express MVC app is running on ${port}`);
});