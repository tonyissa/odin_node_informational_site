const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/contact-me', (req, res) => {
    res.sendFile(__dirname + '/public/contact-me.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => console.log(`App listening on port ${port}!`))