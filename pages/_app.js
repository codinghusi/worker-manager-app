import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import '@fontsource/roboto';
import Layout from '../components/layout';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { SemanticToastContainer } from 'react-semantic-toasts'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    // uri: "https://empty-moon.eu-west-1.aws.cloud.dgraph.io/graphql"
    uri: "https://gerrit.lamann.eu/dgraph/graphql"
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Layout>
          <SemanticToastContainer />
          <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
