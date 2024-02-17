const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(`src/components/directory.js`)

    const data = await graphql(`
        query PagesQuery {
            pages: allMarkdownRemark {
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
    `)

    const pageData = data.data.pages.edges;
    pageData.forEach(edge => {
        if(edge.node.fileAbsolutePath.includes("_pages")) {
            let path = edge.node.fileAbsolutePath.split("_pages")[1].split("index.md")[0]
            createPage({
                path: path,
                component: pageTemplate,
                context: {title: edge.node.frontmatter.title, description: edge.node.frontmatter.description, content: edge.node.frontmatter.content, navigation: data.data.navigation, currentPath: path } // This is to pass data as props to your component.
            })
        }
    })

}