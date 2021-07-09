import React from "react"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import fetch from "cross-fetch"

const client = new ApolloClient({
  fetch,
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
})

const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)

export default wrapRootElement
