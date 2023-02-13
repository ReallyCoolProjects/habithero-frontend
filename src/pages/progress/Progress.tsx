import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Day from "../../components/Widgets/Day";
import Modal from "../../components/Widgets/Modal";

function Progress(props: any) {
  const days = Array(30).fill(null);
  const habitId = "";
  const location = useLocation();
  const data: any = location.state?.data;

  const accessToken = "";
  

  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const handleClick = (index: number) => {
    setOpen(true);

  };

  const daysProgress = days.map((_, index) => {
    return <Day streak={data.streak} onClick={handleClick} n={index} />;
  });

  return (
    <div className={`relative h-full w-full p-5 `}>
      <div className="header flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold">{data.name}</h1>
        <div className="info flex flex-col items-start">
          <h3 className="">days: {data.streak}</h3>
          <h3 className="">{data.type}</h3>
        </div>
      </div>
      {open ? <Modal habitId={data.id} onHandleClose={closeModal} /> : <></>}
      <div className="progress w-full mt-10 grid grid-cols-5 gap-4">
        {daysProgress}
      </div>
    </div>
  );
}

export default Progress;
