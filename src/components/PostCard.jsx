import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
 const color = () => {
  const getColor = () => Math.floor(Math.random() * 75) + 180; 
  return `rgba(${getColor()}, ${getColor()}, ${getColor()}, 0.8)`;
};
  return (
    <Link to={`/post/${$id}`}>
      <div style={{backgroundColor:color()}} className="w-full rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold text-center">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
