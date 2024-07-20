const express = require('express');
const app = express();
const port = 3000;

app.get('/greet', (req, res) => {
    res.send('hi there');
});

app.listen(port, () => {
    console.log('server running');
});