import * as React from "react"
import Nav from '../components/navigation.js';
import { graphql } from 'gatsby'
import "../styles/style.css"

const IndexPage = ({data}) => {
  return (
    <main>
      <Nav navigation={data.navigation} />
    </main>
  )
}

export const NavigationQuery = graphql`
  query NavigationQuery {
    navigation: allDirectory {
      edges {
          node {
          relativeDirectory
          relativePath
          base
          }
      }
    }
  }
`;

export const Head = () => <title>Chorus</title>

export default IndexPage