import { ApolloServer, gql } from 'apollo-server';
const typeDefs = gql`
    type Query {
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => {
            return "hello world";
        }
    }
} 

const 