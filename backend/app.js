const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const path = require('path');
require('dotenv').config();

// const userRoute = require('./routes/usersRoute.js');
const ApiRoute = require('./routes/apiRoute.js');
const Route = require('./routes/route.js');

const config = require('./config.js');

const MONGODB_URI = config.mongodburi || 'mongodb://moonstar:Backtohome1111@localhost:27017/moonstar';
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (error) => {
    console.log(4567890)
    console.log(error);
});

let app = express();

// Body Parser Middleware
app.use(bodyParser.json({ limit: '200mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

app.use(express.static(path.join(__dirname, '../nftfrontend/public/index.html')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

global.appRoot = path.resolve(__dirname);

// routing
// app.use('/api/users', userRoute);
app.use('/api', ApiRoute);
app.use('/', Route);
// end routing

// for production mode
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../nftfrontend/build/index.html'));
});
// end for production mode

// setting for cron jobs for getting log.txt data
//Cron.setCron();
// end setting for cron jobs

app.listen(PORT, () => {
    console.log('Server started on port', PORT);
});

