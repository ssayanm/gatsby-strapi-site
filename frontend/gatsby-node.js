/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              strapiId
              title
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
              name
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges
  const categories = result.data.categories.edges

  articles.map((article, index) => {
    createPage({
      path: `/article/${article.node.title}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        id: article.node.title,
      },
    })
  })

  categories.map((category, index) => {
    createPage({
      path: `/category/${category.node.name}`,
      component: require.resolve("./src/templates/category.js"),
      context: {
        id: category.node.strapiId,
      },
    })
  })
}
