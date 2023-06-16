const express = require('express');
const app = express();

const cors = require('cors');
const userRouter = require('./routers/UserRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
    const startTime = Date.now();
    req.startTime = startTime;

    console.log(req.method, req.url);

    next();
});

app.use('/api/users', userRouter);

module.exports = app;
