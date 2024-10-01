import React from "react";
import placeholder from "../assets/placeholder.png";

const Post = (props) => {
  return (
    <div className="relative group w-[315px] h-[315px]">
      <img
        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
        src={placeholder}
        alt="Post"
      />
      <div className="absolute bottom-0 left-0 w-full flex flex-col justify-end  group-hover:scale-110 transition-transform p-4">
        <p className="text-white">{props.postTitle}</p>
        <p className="text-white">{props.date}</p>
      </div>
    </div>
  );
};

export default Post;
