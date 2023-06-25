const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname + '/index.html'));
});

app.get('/pushups', (req, res) => {
    res.sendfile(path.join(__dirname + '/pushupsite/index.html'));
})

app.listen(5000, () => console.log('http://localhost:5000/'));
