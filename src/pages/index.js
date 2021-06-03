import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { useQuery, gql } from "@apollo/client"

const IndexPage = () => {
  const { data, loading, error } = useQuery(gql`
    query GetCountries {
      countries {
        name
      }
    }
  `)
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
      {loading && <p>Query is loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p>Error with graphql query</p>}
    </Layout>
  )
}

export default IndexPage
