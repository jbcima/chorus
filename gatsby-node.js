const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(`src/components/directory.js`)

const pages = await graphql(`
    query PagesQuery {
        allMarkdownRemark {
            edges {
            node {
                id
                fileAbsolutePath
                frontmatter {
                title
                content {
                    type
                    artist
                    title
                    file
                    track {
                        artist
                        title
                        file
                    }
                }
                }
            }
            }
        }
    }
`)

const navigation = await graphql(`
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
`)

const pageData = pages.data.allMarkdownRemark.edges;
pageData.forEach(edge => {
    let path = edge.node.fileAbsolutePath.split("_pages/")[1].split("index.md")[0]
    createPage({
        path: `/` + path,
        component: pageTemplate,
        context: {title: edge.node.frontmatter.title, description: edge.node.frontmatter.description, content: edge.node.frontmatter.content, navigation: navigation, currentPath: path } // This is to pass data as props to your component.
        })
    })

}