const express = require('express');

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); // goes to the public file and runs the files

app.use((req, res) => { // 404 response
    res.status(404);
    res.send('<h1>Error: 404 Not Found </ h1>');
})

app.listen(3000, () => { // if thes server is listening
    console.log('listening on port 3000: http://localhost:3000/ ');
})