const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const corsOption = {
    origin: 'http://localhost:4200'
};

app.use(cors(corsOption));

app.get('/greet', (req, res) => {
    res.send('hi there');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});