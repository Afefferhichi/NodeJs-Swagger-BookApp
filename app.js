const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

//routes
const books = require('./routes/api/books');

const app = express();
const port = process.env.PORT || 8082;

//Connect Database
connectDB();

//cors
app.use(cors({origin: true, credentials: true}));

//Init Middleware
app.use(express.json({extends: false}));

app.get('/', (req, res) => res.send('Hello World!'));

//Use Routes
app.use('/api/books', books);

app.listen(port, () => console.log(`App listening on port ${port}`));