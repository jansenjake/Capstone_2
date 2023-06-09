const express = require('express');

const route = require('./controller');

const cors = require('cors');

const port = parseInt(process.env.PORT) || 4000;

const app = express();

const {errorHandling} = require('./middleware/errorHandling');

const cookieParser = require('cookie-parser');


app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    req.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.use(route);
app.use(
    cors(),
    cookieParser(),
    express.json(),
    express.urlencoded({extended: false})
)

app.listen(port, () => {
    console.log(`the server is running on port ${port}`);
});

app.use(errorHandling);