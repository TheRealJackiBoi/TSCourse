import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
//For env File 
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const DB_PORT = process.env.DB_PORT || 3000;
const DB_BASEURL = `http://localhost`;
const DB_URL = `${DB_BASEURL}:${DB_PORT}`;
// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.send('Welcome to Express & TypeScript Server');
});
// get persons
app.get('/persons', async (req, res) => {
    try {
        const response = await axios.get(`${DB_URL}/persons/`);
        if (response.data) {
            res.status(200).json(response.data);
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).send('Person not found');
    }
});
//get person by id
app.get('/persons/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const response = await axios.get(`${DB_URL}/persons/${id}`);
        if (response.data) {
            res.status(200).json(response.data);
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).send('Person not found');
    }
});
//post person
app.post('/persons', async (req, res) => {
    const person = req.body;
    try {
        const response = await axios.post(`${DB_URL}/persons/`, person);
        if (response) {
            res.status(200).send('OK - Succes');
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Couldn't post user");
    }
});
//delete person by id
app.delete('/persons/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const response = await axios.delete(`${DB_URL}/persons/${id}`);
        if (response) {
            res.status(200).send('OK - Succes');
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Couldn't delete user");
    }
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
