import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import log4js from 'log4js';
import { notFound, errorHandler, apiErrorHandler, ApiError } from './error.js';

type Person = {
  id: number,
  name: string
}

interface RequestWithPerson extends Request {
  person: Person
}

const persons: Person[] = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});


// Middleware for personsroute for id routes to check if person exists
app.use('/persons/:id', (req: Request, res: Response, next: any) => {
  const id = req.params.id as unknown as number
  let person: Person | null = null
  for(let i = 0; i < persons.length; i++) {
    if (persons[i].id == id) {
      person = persons[i]
      break
    }
  }

  if (!person) {
    throw new ApiError("Couldn't find person", 404)
  }
  (req as RequestWithPerson).person = person
  next()
})

app.get('/persons/:id', (req: Request | RequestWithPerson, res: Response) => {
  
  res.status(200).json((req as RequestWithPerson).person)
})

app.post('/persons/', (req: Request, res: Response) => {
  const person: Person = req.body
  if (person.id != null && person.name != null) {
    persons.push(person)
    res.status(201).json(person)
  }
  throw new ApiError("Couldn't create person", 400)
})


app.put('/persons/:id', (req: Request | RequestWithPerson, res: Response) => {
  const id = req.params.id as unknown as number
  const person: Person = req.body
  if (person.id != null && person.name != null) {
    for(let i = 0; i < persons.length; i++) {
      if (persons[i].id == id) {
        persons[i] = person
        res.status(200).json(person)
        return
      }
    }
  }
  throw new ApiError("Couldn't update person", 400)
})

// Error Handling
app.use(notFound);
app.use(apiErrorHandler)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});