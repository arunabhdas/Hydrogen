"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

// Create the Apollo client
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export function Providers({ children }: { children: ReactNode }) {
  return (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
  );
}