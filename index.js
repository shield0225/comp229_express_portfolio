const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Me!');
})

app.get('/AboutMe', (req, res) => {
    res.send('About Me');
  })

app.get('/Projects', (req, res) => {
    res.send('Projects');
  })

app.get('/Services', (req, res) => {
    res.send('Services');
  })

app.get('/ContactMe', (req, res) => {
    res.send('Contact Me');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})