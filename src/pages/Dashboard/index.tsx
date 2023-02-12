import React, { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [habit, setHabit] = useState([]);
  const [tempRank, setTempRank] = useState("");
  const [selected, setSelected] = useState(2);
  const moods = ["sad", "meh", "ok", "good", "awesome"];
  const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGUxZGIwbXowMDAwbWJjZ2lhdDJqc2RrIiwiZW1haWwiOiJwYWJsb0BtYWlsLmNvbSIsImlhdCI6MTY3NjIxNzU4NSwiZXhwIjoxNjc2MjE4NDg1fQ.30Xj-EbU2ycKUlAS_taAmUSry9VpOO1GGPUcFCWiBoE";
  //${i==0? "bg-black" : ""}
  const greetingImg =
    "https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=740&t=st=1676190711~exp=1676191311~hmac=0c7c6943895dbddc633fb49a270fd4c8b6e9acc47949a564369a06b2a43caa2f";

  const changeMood = async (event: any) => {
    event.preventDefault();
    const response = await axios.patch(
      "http://localhost:5000/mood/editMood",
      {
        moodOfTheDay: moods[selected],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleClick = (event: any, index: any) => {
    setSelected(index);
    changeMood(event);
  };

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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/habit/allHabits", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(result);
      setHabit(result.data);
    };

    fetchData();
  }, []);

  // const habits = Array(6)
  //   .fill(1)
  //   .map((el, i) => {
  //     return (
  //       <tr className="flex capitalize justify-between text-xl border-b border-[#b7b8b7] p-2">
  //         <span>go for a walk</span>
  //         <div className="flex justify-between w-[5rem]">
  //           <span className="material-symbols-outlined">done</span>
  //           <span className="material-symbols-outlined">close</span>
  //         </div>
  //       </tr>
  //     );
  //   });

  const getRankOfHabit = async (badgeId: string) => {
    try {
      const result = await axios(`http://localhost:5000/rank/${badgeId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setTempRank(result.data.rank);
    } catch (e) {
      throw e;
    }
  };

  const habits = habit.map((h: any, i: number) => {
    getRankOfHabit(h.badgeId);
    return (
      <tr className="flex flex-row items-center capitalize justify-between text-xl border-b border-[#b7b8b7] p-2">
        <span>{h.name}</span>
        <div className="rank">
          <p className="text-sm">{tempRank}</p>
        </div>
        <div className="flex flex-col justify-between w-[5rem]">
          <span className="text-sm">day: {h.streak}</span>
          <span className="text-sm">{h.type}</span>
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
        <select className="w-[1/2] h-14 ">
          <option selected value="a">
            January
          </option>
        </select>
        <Link to="/add">
          <span className="material-symbols-outlined text-3xl">add</span>
        </Link>
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
          {[
            "sentiment_sad",
            "sentiment_dissatisfied",
            "sentiment_neutral",
            "mood",
            "sentiment_very_satisfied",
          ].map((item, index) => (
            <span
              key={index}
              data-mood={moods[index]}
              className="material-symbols-outlined  text-5xl"
              style={{
                color: index === selected ? "green" : "black",
                cursor: "pointer",
              }}
              onClick={() => handleClick(event, index)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/**habits table */}
      <table className="borde">{habits}</table>
    </section>
  );
};

export default Dashboard;

{
  /* <i className="fa-regular fa-face-smile text-5xl"></i>
        <i className="fa-regular fa-face-smile-beam text-5xl"></i>
        <i className="fa-regular fa-face-meh text-5xl"></i>
        <i className="fa-regular fa-face-sad-cry text-5xl"></i>
        <i className="fa-regular fa-face-frown text-5xl"></i> */
}

{
  /* <span>January <span className="material-symbols-outlined">
arrow_drop_down
</span></span> */
}
