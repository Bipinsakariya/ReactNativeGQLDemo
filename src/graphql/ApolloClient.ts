import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const link = new HttpLink({
  uri: `https://countries-274616.ew.r.appspot.com`,
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache,
});

export default client;
