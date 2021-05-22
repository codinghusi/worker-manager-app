import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css'
import '@fontsource/roboto';
import Layout from '../components/layout';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://empty-moon.eu-west-1.aws.cloud.dgraph.io/graphql"
  })
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
