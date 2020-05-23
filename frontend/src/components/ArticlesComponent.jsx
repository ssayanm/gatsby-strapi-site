import React from "react"

import CardComponent from "./CardComponent"

const ArticlesComponent = ({ articles }) => {
  //   const article = data.strapiArticle

  return (
    <React.Fragment className="container flex flex-wrap mb-4 w-full uppercase justify-center">
      {articles.map(article => (
        <CardComponent article={article} />
      ))}
    </React.Fragment>
  )
}

export default ArticlesComponent
