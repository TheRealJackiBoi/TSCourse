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


//get person by id
app.get('/persons/:id', asyncHandler(async(req: Request, res: Response) => {

  const id: string = req.params.id
  try {
    const response: AxiosResponse<Person> = await axios.get(`http://localhost:3000/${id}`)
    if (response.data) {
          res.status(200).json(response.data)
        }
    }
  catch(err: unknown) {    
    console.log(err)
    res.status(404).send('Person not found')
  }
}))


app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
