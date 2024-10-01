import React, { useState, useEffect } from "react";
import Post from "./Post";
import postsData from "../../postsData.json";
import leftIcon from "../assets/arrow-left.svg";
import rightIcon from "../assets/arrow-right.svg";

const PostCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePeriod, setActivePeriod] = useState("All");

  const postsToShow = postsData.filter((post) => {
    if (activePeriod === "All") return true;
    return false;
  });

  useEffect(() => {
    // Auto-swipe the carousel every 10 seconds
    const timer = setInterval(() => {
      if (activeIndex + 4 < postsToShow.length) {
        setActiveIndex(activeIndex + 4);
      } else {
        setActiveIndex(0);
      }
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [activeIndex, activePeriod, postsToShow]);

  const moveNext = () => {
    if (activeIndex + 4 < postsToShow.length) {
      setActiveIndex(activeIndex + 4);
    }
  };

  const movePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 4);
    }
  };

  return (
    <div
      className="flex flex-col items-center my-10 justify-center"
      id="latestposts"
    >
      <h3 className="text-[52px]">Latest Posts</h3>
      <div className="post-container grid grid-cols-1 xl:grid-cols-4 items-center gap-4 md:gap-6 lg:gap-8 mb-6">
        {postsToShow.slice(activeIndex, activeIndex + 4).map((post, index) => (
          <Post key={index} postTitle={post.postTitle} date={post.date} />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 transform scale-100 hover:scale-110 transition-transform">
          <button onClick={movePrev} disabled={activeIndex === 0}>
            <img src={leftIcon} alt="left" />
          </button>
        </div>
        <div className="flex justify-center w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 transform scale-100 hover:scale-110 transition-transform">
          <button
            onClick={moveNext}
            disabled={activeIndex + 4 >= postsToShow.length}
          >
            <img src={rightIcon} alt="right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCarousel;
