import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { notFound, errorHandler, apiErrorHandler, ApiError } from './error.js';
const persons = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
//For env File 
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.send('Welcome to Express & TypeScript Server');
});
// Middleware for personsroute for id routes to check if person exists
app.use('/persons/:id', (req, res, next) => {
    const id = req.params.id;
    let person = null;
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].id == id) {
            person = persons[i];
            break;
        }
    }
    if (!person) {
        throw new ApiError("Couldn't find person", 404);
    }
    req.person = person;
    next();
});
app.get('/persons/:id', (req, res) => {
    res.status(200).json(req.person);
});
app.post('/persons/', (req, res) => {
    const person = req.body;
    if (person.id != null && person.name != null) {
        persons.push(person);
        res.status(201).json(person);
    }
    throw new ApiError("Couldn't create person", 400);
});
app.put('/persons/:id', (req, res) => {
    const id = req.params.id;
    const person = req.body;
    if (person.id != null && person.name != null) {
        for (let i = 0; i < persons.length; i++) {
            if (persons[i].id == id) {
                persons[i] = person;
                res.status(200).json(person);
                return;
            }
        }
    }
    throw new ApiError("Couldn't update person", 400);
});
// Error Handling
app.use(notFound);
app.use(apiErrorHandler);
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
