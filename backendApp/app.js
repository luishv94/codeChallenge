const express = require('express');
const dotenv = require('dotenv');
const peopleRouter = require('./api/people/people.route');

dotenv.config();

const app = express();

app.use('/api/people', peopleRouter);

app.listen(3000, () => console.log('Listening on port 3000'));