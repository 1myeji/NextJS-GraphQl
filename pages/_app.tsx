// import '../styles/globals.css';
import type { AppProps } from "next/app";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons/layout";

export default function App({ Component }: AppProps) {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 나중에 하기
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component />
      </Layout>
    </ApolloProvider>
  );
}
