const http = require('http');
const app = require('./app');
const port = 3000;

const server = http.createServer(app);

server.listen(port);

// const http = require('http');
// const app = require('./app');
// const { Sequelize } = require('sequelize');
// const config = require("./config/config");

// const sequelize = new Sequelize(config.development); // Assuming 'development' configuration

// const port = 3000;
// const server = http.createServer(app);

// sequelize.authenticate()
//     .then(() => {
//         console.log('Database connection succeeded.');

//         server.listen(port, () => {
//             console.log(`Server started at port ${port}`);
//         });
//     })
//     .catch(err => {
//         console.error('Database connection failed:', err);
//     });