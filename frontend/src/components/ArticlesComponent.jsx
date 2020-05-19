import React from "react";
import CardComponent from "./CardComponent";

const ArticlesComponent = ({ articles }) => {
  return (
    <React.Fragment>
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Blog Posts
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>{" "}
      <div className="container flex flex-wrap mb-4 w-full uppercase justify-center">
        {articles.map((article) => (
          <CardComponent article={article} key={`article__${article.id}`} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ArticlesComponent;
