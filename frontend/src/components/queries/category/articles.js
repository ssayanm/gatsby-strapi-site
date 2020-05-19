import { graphql } from "gatsby"

const CATEGORY_ARTICLES_QUERY = graphql`
  query Category($id: ID!) {
    category(id: $id) {
      id
      name
      articles {
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
      }
    }
  }
`

export default CATEGORY_ARTICLES_QUERY
