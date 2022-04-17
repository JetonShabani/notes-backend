const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler} = require('./backend/middleware/errorMiddleware');
const connectDB = require('./backend/config/db');
const app = express();

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/notes', require('./backend/routes/noteRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));