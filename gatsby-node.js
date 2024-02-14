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
                        description
                        audio {
                            artist
                            track
                            file
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
// const navigationData = navigation.data.allDirectory.edges.filter((node) => node.node.relativeDirectory == "_pages");

const pageData = pages.data.allMarkdownRemark.edges;

pageData.forEach(edge => {
    let path = edge.node.fileAbsolutePath.split("_pages/")[1].split("index.md")[0]
    let parent = 
    createPage({
        path: `/` + path,
        component: pageTemplate,
        context: {title: edge.node.frontmatter.title, description: edge.node.frontmatter.description, audio: edge.node.frontmatter.audio, navigation: navigation, currentPath: path } // This is to pass data as props to your component.
        })
    })

}