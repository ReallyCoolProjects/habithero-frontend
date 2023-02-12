import React from "react";

const Dashboard = () => {
  //${i==0? "bg-black" : ""}
  const greetingImg =
    "https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=740&t=st=1676190711~exp=1676191311~hmac=0c7c6943895dbddc633fb49a270fd4c8b6e9acc47949a564369a06b2a43caa2f";

  const days = Array(6)
    .fill(1)
    .map((el, i) => {
      return (
        <div className={`flex flex-col w-10 justify-center`}>
          <span className="text-center">Su</span>
          {/**index can be replaced with present day flag */}
          <span
            className={`${
              i == 0 ? "bg-black text-white" : ""
            } border-2 border-black h-10 rounded-full flex justify-center items-center`}
          >
            23
          </span>
        </div>
      );
    });

  const habits = Array(6)
    .fill(1)
    .map((el, i) => {
      return (
        <tr className="flex capitalize justify-between border-b border-[#b7b8b7] p-2">
          <span>go for a walk</span>
          <div className="flex justify-between w-[8rem]">
            <span>done</span>
            <span>not done</span>
          </div>
        </tr>
      );
    });

  return (
    <section
      className="section p-6 grid grid-cols-1 gap-12 grid-rows-6"
      id="dashboard"
    >
      {/**month selector */}
      <div className="text-2xl flex justify-between">
        <span>January</span>
        <span>add</span>
      </div>

      {/**calendar */}
      <div className=" flex justify-around h-16">{days}</div>

      {/**greetings card */}
      <div className="w-full min-h-8 bg-white flex rounded-2xl p-6 justify-between">
        <p className="text-2xl flex flex-col items-center justify-center">
          Good Morning, User!
        </p>
        <img src={greetingImg} alt="boy-reading" className="h-28 w-28" />
      </div>

        {/**mood question */}
    <div className="">
        <p className="text-center text-lg">How are you feeling today?</p>
        <div className="flex justify-around mt-2">
        <i className="fa-regular fa-face-smile text-5xl"></i>
        <i className="fa-regular fa-face-smile-beam text-5xl"></i>
        <i className="fa-regular fa-face-meh text-5xl"></i>
        <i className="fa-regular fa-face-sad-cry text-5xl"></i>
        <i className="fa-regular fa-face-frown text-5xl"></i>
        </div>
    </div>

        {/**habits table */}
      <table className="borde">{habits}</table>
    </section>
  );
};

export default Dashboard;
