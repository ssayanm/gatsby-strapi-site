// import React from "react"
// import { graphql } from "gatsby"
// import ReactMarkdown from "react-markdown"
// import Moment from "react-moment"

// export const query = graphql`
//   query ArticleQuery($id: String) {
//     strapiArticle(strapiId: { eq: $id }) {
//       strapiId
//       title
//       content
//       published_at
//       image {
//         publicURL
//       }
//     }
//   }
// `

// const ArticlesComponent = ({ data }) => {
//   const article = data.strapiArticle
//   return (
//     <React.Fragment>
//       <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
//         Blog Posts
//       </h1>
//       <div class="w-full mb-4">
//         <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
//       </div>{" "}
//       <div className="container flex flex-wrap mb-4 w-full uppercase justify-center">
//         <h1>{article.title}</h1>
//       </div>
//       <div>
//         <div
//           id="banner"
//           className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
//           data-src={article.image.publicURL}
//           data-srcset={article.image.publicURL}
//           data-uk-img
//         >
//           <h1>{article.title}</h1>
//         </div>

//         <div className="uk-section">
//           <div className="uk-container uk-container-small">
//             <ReactMarkdown source={article.content} />
//             <p>
//               <Moment format="MMM Do YYYY">{article.published_at}</Moment>
//             </p>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   )
// }

// export default ArticlesComponent

import React from "react"
import CardComponent from "./CardComponent"

const ArticlesComponent = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftArticles.map((article, i) => {
            return (
              <CardComponent
                article={article}
                key={`article__${article.node.id}`}
              />
            )
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, i) => {
              return (
                <CardComponent
                  article={article}
                  key={`article__${article.node.id}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlesComponent
