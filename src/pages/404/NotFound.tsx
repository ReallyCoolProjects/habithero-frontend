import React from "react";
import notfound from "../../assets/SVG/DrawKit Larry Character Illustration (1).svg";

function NotFound() {
  return (
    <div className="h-screen w-screen p-10">
      <h1 className="text-3xl">Page not found :(</h1>
      <img src={notfound} alt="boy-reading" className="h-1/2" />
    </div>
  );
}

export default NotFound;
