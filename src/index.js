// import dotenv from 'dotenv';
// import articlesRoutes from './routes/articles.js';
// import express from 'express';
// import bodyParser from 'body-parser';


// dotenv.config(); //
// const server = express(); //Creating express server
// server.use(bodyParser.json());


// server.use('/articles', articlesRoutes); // all the routes will start with /articles, so we can remove /articles part in file articles.js


server.listen(process.env.PORT, () => { // starting server
    console.log(`Express is up and running on port ${process.env.PORT}`);
});
import http from 'http';

// defing our web server
const server = http.createServer((req, res) => { // param = request and response
    res.end('Hello cats and dogs!');
});

server.listen(8070, () => {
    console.log('Server is up and running!')
});