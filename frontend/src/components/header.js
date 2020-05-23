import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Header = () => {
  return (
    <section className="gradient p-6">
      <nav className="container">
        <div className="flex justify-between content-center mx-2">
          <Link className="h-full text-2xl w-1/3" to="/">
            React Strapi Blog
          </Link>
          <div className="w-2/3 h-full flex items-center justify-end uppercase">
            <Link to="/" className="p-3 cursor-pointer hover:text-gray-400">
              Home
            </Link>
            <Link
              to="/about"
              className="p-3 cursor-pointer hover:text-gray-400"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="p-3 cursor-pointer hover:text-gray-400"
            >
              Contact
            </Link>
            <Link to="/blog" className="p-3 cursor-pointer hover:text-gray-400">
              Blog
            </Link>
            <StaticQuery
              query={graphql`
                query {
                  allStrapiCategory {
                    edges {
                      node {
                        strapiId
                        name
                      }
                    }
                  }
                }
              `}
              render={data =>
                data.allStrapiCategory.edges.map((category, i) => {
                  return (
                    <Link
                      key={category.node.strapiId}
                      to={`/category/${category.node.name}`}
                      className="p-3 cursor-pointer hover:text-gray-400"
                    >
                      {category.node.name}
                    </Link>
                  )
                })
              }
            />
          </div>
        </div>
      </nav>
      <hr className="border-b border-gray-100 opacity-25 my-2 py-0" />
    </section>
  )
}

export default Header
