import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkButton from "../../components/Buttons/DarkButton";
import TextField from "../../components/Input/TextField";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    name: "",
  });

  const submitForm = ()=>{
    alert(555)
  }
  return (
    <section className="p-6 flex flex-col justify-center items-center relative">
        <Link to={"/"}>
        <div className="absolute top-4 left-4 text-4xl font-black font-[monospace]">HabitHero</div>
        </Link>
        <h2 className="text-xl mb-10 font-semibold text-center">Login to your account and let's start grinding!</h2>
        {/**login form */}
      <form action="" className="bg-[#c8c9ca] w-[100%] p-4 flex flex-col h-[50vh] justify-around rounded-lg">
        <h3 className="text-3xl text-center">Log In</h3>
        {/**form starts here */}
        <div>
        <TextField
            label="Name"
            type="name"
            id="name"
            onChange={(e: any) => {
              console.log(e.target.value);
            }}
          />

          <TextField
            label="E-mail"
            type="email"
            id="email"
            onChange={(e: any) => {
              console.log(e.target.value);
            }}
          />

        </div>
        <div className="flex justify-center" onClick={submitForm}>
        <DarkButton text="Login" />
        </div>
      </form>
    </section>
  );
};

export default Login;
