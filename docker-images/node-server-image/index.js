const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.end('Hello world!\n');
    return;
});

app.listen(8080, ()=>{
    console.log('successfully started app');
});