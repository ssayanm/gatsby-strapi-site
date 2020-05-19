import { graphql } from "gatsby"

const ARTICLES_QUERY = graphql`
  query Articles {
    articles(limit: 2) {
      id
      title
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`

export default ARTICLES_QUERY
