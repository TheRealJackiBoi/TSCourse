import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import asyncHandler from 'express-async-handler';
//For env File 
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.send('Welcome to Express & TypeScript Server');
});
//get person by id
app.get('/persons/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        const response = await axios.get(`http://localhost:3000/${id}`);
        if (response.data) {
            res.status(200).json(response.data);
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).send('Person not found');
    }
}));
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
