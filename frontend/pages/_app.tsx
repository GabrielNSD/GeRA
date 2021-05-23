import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../components/layout/PageLayout";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps.title)
  return (
    <Layout title={pageProps.title}>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
