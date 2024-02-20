const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
        type MarkdownRemark implements Node {
            id: String,
            fileAbsolutePath: String,
            frontmatter: Frontmatter
        }
        type Frontmatter {
            title: String,
            description: String,
            content: [Content],
            templateKey: String,
            date: Date @dateformat(formatString: "M/DD/YY")
        }
        type Content {
            type: String,
            artist: String,
            title: String,
            file: String,
            tracks: [Track],
            art: String
        }
        type Track {
            artist: String,
            title: String,
            file: String,
            art: String
        }
    `
    createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(`src/components/directory.js`)

    const data = await graphql(`
        query PagesQuery {
            pages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/_pages/"}}) {
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
                        art
                        tracks {
                            artist
                            title
                            file
                            art
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

    data.data.pages.edges.forEach(edge => {
        let path = edge.node.fileAbsolutePath.split("_pages")[1].split("index.md")[0]
        createPage({
            path: path,
            component: pageTemplate,
            context: {title: edge.node.frontmatter.title, description: edge.node.frontmatter.description, content: edge.node.frontmatter.content, navigation: data.data.navigation } // This is to pass data as props to your component.
        })
    })

}