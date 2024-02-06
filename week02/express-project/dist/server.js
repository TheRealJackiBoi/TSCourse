import express from 'express';
import dotenv from 'dotenv';
//For env File 
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Welcome to Express & TypeScript Server');
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
