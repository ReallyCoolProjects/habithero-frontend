import axios from "axios";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Modal(props: any) {
  const handleSave = () => {
    props.onHandleSave();
  };
  const navigate = useNavigate();
  const handleClose = () => {
    props.onHandleClose();
    console.log(props.passed);
  };
  const accessToken =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGUxZGIwbXowMDAwbWJjZ2lhdDJqc2RrIiwiZW1haWwiOiJwYWJsb0BtYWlsLmNvbSIsImlhdCI6MTY3NjI0NjcxMiwiZXhwIjoxNjc2MjQ3NjEyfQ.2Rn7U2Ihvlx8DXnp4ZlbCg-GlplilW5o1933VH0ZX1k"

  const save = async (event: any, habitId: string) => {
    event.preventDefault();
    const response = await axios
      .patch(
        `http://localhost:5000/day/${habitId}`,
        {
          feeling: "i am feeling awesome",
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        handleClose();
      });
  };

  return (
    <div className="h-80 w-80 rounded-md bg-white  border border-black absolute top-40 left-8 z-10 flex flex-col p-8">
      <div className="header w-full mx-auto">
        <div className="header flex flex-row justify-between items-center">
          <h1>Day 1</h1>
          <span
            onClick={handleClose}
            className="material-symbols-outlined text-xl"
          >
            close
          </span>
        </div>

        <form
          className="w-full mt-5 flex flex-col items-center"
          onSubmit={() => {
            save(event, props.habitId);
          }}
          action=""
        >
          <div className="feeling">
            <textarea
              className="w-full p-2 border-none outline-none"
              name="feeling"
              placeholder="how are you feeling today"
            ></textarea>
          </div>

          <button
            className="mt-10 border border-black w-20 m-auto h-8 rounded-md text-white bg-black"
            type="submit"
          >
            save
          </button>

          <></>
        </form>
      </div>
    </div>
  );
}

export default Modal;
