import '../styles/globals.css';
import '@fontsource/roboto';
import Layout from '../compontents/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
