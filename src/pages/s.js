import * as React from "react"
import Nav from '../components/navigation.js';
import { graphql } from 'gatsby'
import "../styles/style.css"

const BlogPage = ({location, data}) => {
  return (
    <main>
      <Nav navigation={data.navigation} path={location.pathname} />
    </main>
  )
}

export const BlogQuery = graphql`
query BlogQuery {
  posts: allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}) {
    edges {
      node {
        id
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
        }
        html
      }
    }
  },
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
`

export const Head = () => <title>Chorus</title>

export default BlogPage