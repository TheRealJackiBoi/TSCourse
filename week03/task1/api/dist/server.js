// npm install @apollo/server express graphql cors
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { typeDefs } from './schema.js';
import { persons, addresses } from './data.js';
import { Query } from './resolvers/query.js';
import { Mutation } from './resolvers/mutation.js';
import { AddressResolver } from './resolvers/address.js';
import path from 'path';
import fileUpload from 'express-fileupload';
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Address: AddressResolver
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use(cors());
app.use('/graphql', cors(), express.json(), expressMiddleware(server, {
    context: async () => {
        return {
            persons,
            addresses
        };
    }
}));
app.use('/avatars', express.static('./src/avatars'));
app.use(fileUpload());
app.post('/upload/:personid', (req, res) => {
    const personid = req.params.personid;
    if (!req.files) {
        return res.status(400).send('No files were uploaded');
    }
    const image = req.files.file;
    if (!image) {
        return res.status(400).send('No files were uploaded.');
    }
    const imageWithId = { ...image, name: `${personid}.${image.name.split('.')[1]}` };
    imageWithId.mv(path.join('./src/avatars/', imageWithId.name), (err) => {
        if (err) {
            return res.status(500).send(image);
        }
    });
    res.status(200).send('File uploaded');
});
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/`);
