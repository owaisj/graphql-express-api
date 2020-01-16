import express from 'express';
import graphqlHTTP from 'express-graphql';
import {buildSchema} from 'graphql';

const app = express();
const PORT = 4242;

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
export const rootValue = {
  hello: () => `Hello World!`,
};
const httpConfig = {
  schema,
  rootValue,
  graphiql: true,
};
app.use('/', graphqlHTTP(httpConfig));
app.listen(PORT, () => {
  console.log(`GraphQL Server at http://localhost:${PORT}/`);
});
