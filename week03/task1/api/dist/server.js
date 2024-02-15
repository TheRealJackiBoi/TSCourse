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
app.use('/', cors(), express.json(), expressMiddleware(server, {
    context: async () => {
        return {
            persons,
            addresses
        };
    }
}));
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/`);
