import React from "react";

const LoadingSkeleton = ({ width = "w-full", height = "h-6", rounded = "rounded-lg" }) => {
  return (
    <div
      className={`${width} ${height} ${rounded} bg-gradient-to-r from-[#00FF88] via-[#00AEEF] to-[#00FF88] 
        animate-pulse opacity-75`}
    ></div>
  );
};

export default LoadingSkeleton;
