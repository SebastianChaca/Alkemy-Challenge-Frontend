import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
  fetch,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

const client = new ApolloClient({
  connectToDevTool: true,
  cache: new InMemoryCache({}),
  link: authLink.concat(httpLink),
  resolvers: {
    Query: {
      isLoggedIn() {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        return { token, username };
      },
    },
  },
});

export default client;
