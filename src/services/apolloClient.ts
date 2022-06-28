import {ApolloClient, InMemoryCache} from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://teachme-api-ts.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
