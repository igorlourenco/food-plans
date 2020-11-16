import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://frontend-challenge.jungsoft.io/graphiql',
    cache: new InMemoryCache()
});

export default client