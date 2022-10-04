// 01 setting projek express dan memanggil cookie parser
const express = require('express')
const cookieParser = require('cookie-parser')
//02 setup express app
const app = express()
// 03 gunakan cookie parser
app.use(cookieParser());
//04 membuat route homepage
app.get('/', (req, res) => {
    res.send('welcome to a simple HTTP cookie server');
});

app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`, `encrypted cookie string Value`);
    res.send('Cookie have been saved successfully');
});
