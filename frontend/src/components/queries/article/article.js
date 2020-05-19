import { graphql } from "gatsby"

const ARTICLE_QUERY = graphql`
  query Articles($id: ID!) {
    article(id: $id) {
      id
      title
      content
      image {
        url
      }
      category {
        id
        name
      }
      published_at
    }
  }
`

export default ARTICLE_QUERY
