import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { StaticQuery, graphql } from "gatsby"
import ArticlesComponent from "../components/ArticlesComponent"

const BlogPage = () => {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <Header />
      <section className="bg-gray-100 pt-6 pb-6">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Blog Posts
          </h1>
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          <StaticQuery
            query={graphql`
              query {
                allStrapiArticle {
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
              }
            `}
            render={data => (
              <ArticlesComponent articles={data.allStrapiArticle.edges} />
            )}
          />
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default BlogPage
