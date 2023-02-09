import React, { useState, useEffect } from "react";

const StackableDivs = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 bg-black w-full h-32 z-10 ${
          scrollPosition > 32 ? "transform -translate-y-32" : ""
        }`}
      />
      <div
        className={`fixed top-0 left-0 bg-gray-900 w-full h-32 z-20 ${
          scrollPosition > 32 ? "transform translate-y-0" : "transform -translate-y-64"
        }`}
      />
    </div>
  );
};

export default StackableDivs;
