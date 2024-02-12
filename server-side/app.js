const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3150 ;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === 'example@example.com' && password === 'password') {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});

app.get('/dashboard', (req, res) => {
    res.send('Welcome to the dashboard');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
