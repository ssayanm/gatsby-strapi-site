import React from "react"

import CardComponent from "./CardComponent"

const ArticlesComponent = ({ articles }) => {
  //   const article = data.strapiArticle

  return (
    <React.Fragment>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div className="container flex mb-4 w-full uppercase justify-center">
        {articles.map(article => (
          <CardComponent article={article} />
        ))}
      </div>
    </React.Fragment>
  )
}

export default ArticlesComponent
