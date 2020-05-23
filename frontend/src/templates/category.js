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
      <section className="pt-6 pb-6">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            {category}
          </h1>
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          <ArticlesComponent articles={articles} />
        </div>
      </section>
    </Layout>
  )
}

export default Category
