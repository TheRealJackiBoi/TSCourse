import express, { Express, Request, Response , Application } from 'express';
import axios, { AxiosResponse, AxiosError } from 'axios'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import log4js from 'log4js';   
import asyncHandler from 'express-async-handler'


//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8080;
const DB_PORT = process.env.DB_PORT || 3000
const DB_BASEURL = `http://localhost`
const DB_URL = `${DB_BASEURL}:${DB_PORT}`;

 // Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

type Person = {
  id: number,
  name: string,
  age: number
}

// get persons
app.get('/persons', asyncHandler(async(req: Request, res: Response) => {

  try {
    const response: AxiosResponse<Person> = await axios.get(`${DB_URL}/persons/`)
    if (response.data) {
          res.status(200).json(response.data)
        }
    }
  catch(err: unknown) {    
    console.log(err)
    res.status(404).send('Person not found')
  }
}))


//get person by id
app.get('/persons/:id', asyncHandler(async(req: Request, res: Response) => {

  const id: string = req.params.id
  try {
    const response: AxiosResponse<Person> = await axios.get(`${DB_URL}/persons/${id}`)
    if (response.data) {
          res.status(200).json(response.data)
        }
    }
  catch(err: unknown) {    
    console.log(err)
    res.status(404).send('Person not found')
  }
}))


//post person
app.post('/persons', asyncHandler(async(req: Request, res: Response) => {

  const person = req.body
  try {
    const response: AxiosResponse = await axios.post(`${DB_URL}/persons/`, person)
    if (response) {
          res.status(200).send('OK - Succes')
        }
    }
  catch(err: unknown) {    
    console.log(err)
    res.status(400).send("Couldn't post user")
  }
}))


//delete person by id
app.delete('/persons/:id', asyncHandler(async(req: Request, res: Response) => {

  const id: string = req.params.id

  try {
    const response: AxiosResponse = await axios.delete(`${DB_URL}/persons/${id}`)
    if (response) {
          res.status(200).send('OK - Succes')
        }
    }
  catch(err: unknown) {    
    console.log(err)
    res.status(400).send("Couldn't delete user")
  }
}))


app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
