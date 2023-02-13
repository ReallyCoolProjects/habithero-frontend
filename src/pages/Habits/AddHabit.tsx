import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

function AddHabit() {
  const [title, setTitle] = useState("");
  const [habitType, setHabitType] = useState("");
  const [note, setNote] = useState("");
  const [habitPeriod, setHabitPeriod] = useState({
    value: 60,
    label: "60 days",
  });
  const [habitStatue, setHabitStatue] = useState({
    value: "private",
    label: "private",
  });
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGUxZGIwbXowMDAwbWJjZ2lhdDJqc2RrIiwiZW1haWwiOiJwYWJsb0BtYWlsLmNvbSIsImlhdCI6MTY3NjI0NjcxMiwiZXhwIjoxNjc2MjQ3NjEyfQ.2Rn7U2Ihvlx8DXnp4ZlbCg-GlplilW5o1933VH0ZX1k";
  const handletitleChange = (event: any) => {
    setTitle(event.target.value);
  };
  const handlehabitTypeChange = (event: any) => {
    setHabitType(event.target.value);
  };
  const handlenoteChange = (event: any) => {
    setNote(event.target.value);
  };
  const handlehabitPeriodChange = (event: any) => {
    setHabitPeriod(event.target.value);
  };
  const handlehabitStatueChange = (event: any) => {
    setHabitStatue(event.target.value);
  };

  const statue = [
    { value: "private", label: "private" },
    { value: "public", label: "public" },
  ];

  const period = [
    { value: 30, label: "30 days" },
    { value: 60, label: "60 days" },
    { value: 90, label: "90 days" },
  ];
  const navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(habitPeriod)

    //TODO: when user select other choice than 60 it will give hime undefined error
    
    const response = await axios
      .post(
        "http://localhost:5000/habit/createHabit",
        {
          title: title,
          description: note,
          type: habitType,
          statue: habitStatue.value,
          period: habitPeriod.value
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        navigate("/dashboard");
      });
  };

  return (
    <div className="AddHabit p-5 flex flex-col gap-y-10 items-center">
      <div className="goback w-full flex flex-row justify-between items-center">
        <Link to="/dashboard">
          <span className="material-symbols-outlined text-3xl">
            chevron_left
          </span>
        </Link>
      </div>
      <div className="title">
        <h1 className="text-xl font-bold">Add new habit</h1>
      </div>
      <form
        className="form flex flex-col"
        action=""
        onSubmit={() => {
          handleSubmit(event);
          // if (location.state?.from) {
          //   navigate(location.state.from);
          // }
        }}
      >
        <div className="habit_title flex flex-col h-16 justify-evenly">
          <label htmlFor="">habit title</label>
          <input
            value={title}
            className="rounded-md h-8 bg-transparent border-none outline-none"
            type="text"
            placeholder="title"
            onChange={() => handletitleChange(event)}
          />
        </div>
        <div className="habit_type flex flex-col h-16 justify-evenly">
          <label htmlFor="">type of habit</label>
          <input
            className="rounded-md h-8 bg-transparent border-none outline-none"
            type="text"
            placeholder="type"
            value={habitType}
            onChange={() => handlehabitTypeChange(event)}
          />
        </div>
        <div className="habit_note flex flex-col h-16 justify-evenly">
          <label htmlFor="">note</label>
          <textarea
            className="rounded-md h-18 bg-transparent border-none outline-none"
            placeholder="write a small note. . ."
            value={note}
            onChange={() => handlenoteChange(event)}
          />
        </div>
        <div className="select mt-5 flex flex-row justify-between">
          <div className="peiod">
            <Select
              options={period}
              value={habitPeriod}
              onChange={() => handlehabitPeriodChange(event)}
              placeholder={"period"}
            />
          </div>
          <div className="type">
            <Select
              options={statue}
              placeholder={"statue"}
              value={habitStatue}
              onChange={() => handlehabitStatueChange(event)}
            />
          </div>
        </div>

        <button
          className="mt-10 border border-black w-20 m-auto h-8 rounded-md text-white bg-black"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddHabit;
