const config = require('./config');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');


const transactionsRoutes = require('./routes/transactionsRoutes');

const app = express();

// Middleware
app.use(cors())
app.use(express.json());
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Connect to db
console.log(`connecting to ${config.MONGO_URI}/${config.MONGO_DB_NAME}`)
mongoose
    .connect(`${config.MONGO_URI}/${config.MONGO_DB_NAME}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// API routes
app.use('/api/v1/transactions',  transactionsRoutes);

// Static files
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

app.listen(config.PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${config.PORT}`.yellow.bold));
