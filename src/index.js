import express from 'express';

const server = express(); //Creating express server

server.get('/', (req, res) => { //Creating request
    res.send('Hello world!');
})

server.listen(8070, () => {
    console.log('Express is up and running!');
});