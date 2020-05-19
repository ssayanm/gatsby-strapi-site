import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const CardComponent = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : process.env.REACT_APP_BACKEND_URL + article.image.url;
  return (
    <div>
      <Link to={`/article/${article.id}`}>
        <div className="m-3 rounded shadow-lg text-center w-72">
          <div className="">
            <img
              src={imageUrl}
              alt={article.image.url}
              height="100"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{article.title}</div>
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardComponent;
