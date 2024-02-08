    import express, { Express, Request, Response , Application } from 'express';
    import dotenv from 'dotenv';
    import bodyParser from 'body-parser';
    import morgan from 'morgan';
    import log4js from 'log4js';
    import exp from 'constants';
    
    //For env File 
    dotenv.config();
    
    const app: Application = express();
    const port = process.env.PORT || 3000;
    
    // Middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(morgan('dev'));
    app.use('/', express.static('public'))    

    app.post('/users', (req: Request, res: Response) => {
      const user = req.body

      console.log(user)
      res.status(200).send("User created")

    })
    
    app.listen(port, () => {
      console.log(`Server is Fire at http://localhost:${port}`);
    });