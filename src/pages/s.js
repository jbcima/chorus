import * as React from "react"
import Nav from '../components/navigation.js';
import { graphql } from 'gatsby'
import "../styles/style.css"

// eslint-disable-next-line
export const BlogPostTemplate = ({ title, date, body}) => {
  return (
    <section>
      <p>{title}</p>
      <br />
      <div dangerouslySetInnerHTML={{__html: body}}/>
      <br />
      <p>{date}......</p>
      <br />
    </section>
  );
};

const BlogPage = ({location, data}) => {
  const posts = data.posts.edges;
  return (
    <main>
      <Nav navigation={data.navigation} path={location.pathname} />
      {posts.map((post) => 
        <>
          <BlogPostTemplate title={post.node.frontmatter.title} date={post.node.frontmatter.date} body={post.node.html} />
        </>
      )}
    </main>
  )
}

export const BlogQuery = graphql`
query BlogQuery {
  posts: allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          templateKey
          date(formatString: "M/DD/YY")
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