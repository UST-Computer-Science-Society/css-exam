import React from "react";
import cssLogo from "../assets/css.png";

const Divider = () => {
  const backgroundStyle = {
    backgroundImage: `url(${cssLogo})`,
    backgroundRepeat: "repeat-x",
    backgroundSize: "auto 100%",
    height: "128px",
  };

  return <div className="w-full" style={backgroundStyle}></div>;
};

export default Divider;
