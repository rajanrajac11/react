import React from "react";
import documentService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={documentService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
