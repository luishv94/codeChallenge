const express = require('express');
const peopleRouter = require('./api/people/people.route');

const app = express();

app.use('/api/people', peopleRouter);

app.listen(3000, () => console.log('Listening on port 3000'));