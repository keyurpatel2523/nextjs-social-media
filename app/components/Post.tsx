"use client";
import { useState } from "react";

interface PostProps {
  title: string;
  description: string;
  contentUrl?: string;
  contentType?: string;
  postTime?: string;
}

const Post: React.FC<PostProps> = ({
  title,
  description,
  contentUrl,
  contentType,
  postTime,
}) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<string[]>([]);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleComment = (comment: string) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
        </div>
        <div>
          <p className="text-gray-600 mb-2">{postTime}</p>
        </div>
      </div>
      {contentType === "image" && (
        <img
          src={contentUrl}
          alt="Post Image"
          className="w-full rounded-lg mb-2"
        />
      )}
      {contentType === "video" && (
        <div className="w-full rounded-lg mb-2">
          <video controls className="w-full">
            <source src={contentUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={handleLike}
            className="text-gray-500 hover:text-blue-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="ml-1">{likes}</span>
          </button>
        </div>
        <div>
          <button className="text-gray-500 hover:text-blue-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 15.874v-2.5a5.259 5.259 0 0 0-1.4-3.6 5.364 5.364 0 0 0-4.9-1.2h-.2a6.649 6.649 0 0 0-1.7.9l-3.6 2.5-3.6-2.5a6.649 6.649 0 0 0-1.7-.9h-.2a5.364 5.364 0 0 0-4.9 1.2 5.259 5.259 0 0 0-1.4 3.6v2.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.037 20H6.963a2.975 2.975 0 0 1-2.819-4l1.666-5.304A3.965 3.965 0 0 1 8.75 8h6.5a3.965 3.965 0 0 1 3.936 2.696L20.855 16A2.975 2.975 0 0 1 17.037 20z"
              />
            </svg>
            <span className="ml-1">{comments.length}</span>
          </button>
        </div>
      </div>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="text-gray-600 mt-2">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
