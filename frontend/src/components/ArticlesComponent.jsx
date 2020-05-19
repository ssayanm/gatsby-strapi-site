import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import CardComponent from "./CardComponent"

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
        publicURL
      }
    }
  }
`

const ArticlesComponent = ({ articles }) => {
  const article = articles.strapiArticle
  return (
    <React.Fragment>
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Blog Posts
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>{" "}
      <div className="container flex flex-wrap mb-4 w-full uppercase justify-center">
        <h1>{article.title}</h1>
      </div>
    </React.Fragment>
  )
}

export default ArticlesComponent
