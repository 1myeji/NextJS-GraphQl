// import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <p>ddddd</p>
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloSetting>
  );
}
