import React from "react"

import CardComponent from "./CardComponent"

const ArticlesComponent = ({ articles }) => {
  //   const article = data.strapiArticle

  return (
    <React.Fragment>
      <div className="container flex mb-4 w-full uppercase justify-center flex-wrap">
        {articles.map(article => (
          <CardComponent article={article} />
        ))}
      </div>
    </React.Fragment>
  )
}

export default ArticlesComponent
