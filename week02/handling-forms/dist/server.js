import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
//For env File 
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', express.static('public'));
app.post('/users', (req, res) => {
    const user = req.body;
    console.log(user);
    res.status(200).send("User created");
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
