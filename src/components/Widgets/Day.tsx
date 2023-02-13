import React from "react";

function Day(props: any) {
  const handleClick = () => {
    props.onClick();
  };


  
  
  return (
    <div
      onClick={handleClick}
      className={`h-12 w-12 rounded-md border border-black ${(props.n < props.streak) ? 'bg-black' : ''}`}
    ></div>
  );
}

export default Day;
