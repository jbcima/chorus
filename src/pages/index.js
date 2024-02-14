import * as React from "react"
import Nav from '../components/navigation.js';
import { graphql } from 'gatsby'
import "../styles/style.css"

const IndexPage = ({data}) => {
  return (
    <main>
      <Nav data={data} />
    </main>
  )
}

export const NavigationQuery = graphql`
  query NavigationQuery {
      allDirectory {
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


export const Head = () => <title>Home</title>

export default IndexPage