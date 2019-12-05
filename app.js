'use strict';
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const catRoute = require('./routes/catRouter');
const userRouter = require('./routes/userRouter');

app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use(express.static('uploads'));

app.use('/cat', catRoute);

app.use('/user', userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));