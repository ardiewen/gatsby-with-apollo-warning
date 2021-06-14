import React from "react"
import { useQuery, gql } from "@apollo/client"

export default function Test() {
  const { data, loading, error } = useQuery(gql`
    query GetCountries {
      countries {
        name
      }
    }
  `)

  return (
    <>
      {loading && <p>Query is loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p>Error with graphql query</p>}
    </>
  )
}
