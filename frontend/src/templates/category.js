import React from "react"
import { graphql } from "gatsby"
import ArticlesComponent from "../components/ArticlesComponent"
import Layout from "../components/layout"

export const query = graphql`
  query Category($id: String!) {
    articles: allStrapiArticle(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          title
          category {
            name
          }
          image {
            publicURL
          }
        }
      }
    }
    category: strapiCategory(strapiId: { eq: $id }) {
      name
    }
  }
`

const Category = ({ data }) => {
  const articles = data.articles.edges
  const category = data.category.name

  return (
    <Layout>
      <div>
        <h1>{category}</h1>

        <ArticlesComponent articles={articles} />
      </div>
    </Layout>
  )
}

export default Category
