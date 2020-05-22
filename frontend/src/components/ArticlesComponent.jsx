import React from "react"
import { Link } from "gatsby"

import Moment from "react-moment"

const ArticlesComponent = ({ articles }) => {
  //   const article = data.strapiArticle

  return (
    <React.Fragment className="flex flex-no-wrap justify-around">
      {articles.map(article => (
        <Link to={`/article/${article.node.strapiId}`}>
          <div className="m-3 rounded shadow-lg text-center w-72">
            <div className="">
              <img
                src={article.node.image.publicURL}
                alt={article.node.image.publicURL}
                height="100"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{article.node.title}</div>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </div>
          </div>
        </Link>
      ))}
    </React.Fragment>
  )
}

export default ArticlesComponent
