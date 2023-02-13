// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import DarkButton from "../../components/Buttons/DarkButton";
// import TextField from "../../components/Input/TextField";

// const Login = () => {
//   const [loginInfo, setLoginInfo] = useState({
//     email: "",
//     password: "",
//   });

//   const submitForm = ()=>{
//     alert(555)
//   }
//   return (
//     <section className="p-6 flex flex-col justify-center items-center relative">
//         <Link to={"/"}>
//         <div className="absolute top-4 left-4 text-4xl font-black font-[monospace]">HabitHero</div>
//         </Link>
//         <h2 className="text-xl mb-10 font-semibold text-center">Login to your account and let's start grinding!</h2>
//         {/**login form */}
//       <form action="" className="bg-[#c8c9ca] w-[100%] p-4 flex flex-col h-[50vh] justify-around rounded-lg">
//         <h3 className="text-3xl text-center">Log In</h3>
//         {/**form starts here */}
//         <div>
//         <TextField
//             label="Name"
//             type="email"
//             id="name"
//             onChange={(e: any) => {
//               console.log(e.target.value);
//             }}
//           />

//           <TextField
//             label="E-mail"
//             type="password"
//             id="email"
//             onChange={(e: any) => {
//               console.log(e.target.value);
//             }}
//           />

//         </div>
//         <div className="flex justify-center" onClick={submitForm}>
//         <DarkButton text="Login" />
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Login;

import React, { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { RiCodeView } from "react-icons/ri";
import { FiGift } from "react-icons/fi";
import { DiGitCommit } from "react-icons/di";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(email, password);
    if (email && password) {
      try {
        const response = await axios.post(
          "http://localhost:5000/auth/local/signin",
          {
            email: email,
            hashedPassword: password,
          }
        );
        localStorage.setItem("access_token", response.data.access_token);
        console.log(localStorage.getItem("access_token"));
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="bg-black h-screen w-screen pt-20 max-lg:h-screen">
      <div className="container w-4/6 h-5/6 bg-white flex flex-row m-auto mt-10 rounded-md max-xl:w-5/6 h-5/6 max-lg:flex-col h-5/6">
        <div className="login flex flex-col flex-1 w-2/6 items-center justify-center px-24 max-lg:w-full h-full px-12 max-md: h-full px-3">
          <div className="google_auth  w-5/6 flex flex-row gap-x-2 items-center justify-center rounded-md border py-2 my-10 cursor-pointer max-md: w-full">
            <FcGoogle size={"22px"} />
            <p className="font-lg">sign in with google</p>
          </div>
          <p className="my-3 text-slate-500">or</p>
          <form
            action=""
            className="flex flex-col gap-y-3 w-5/6 max-md:w-full"
            onSubmit={() => {
              handleSubmit(event);
            }}
          >
            <div className="email flex flex-col gap-y-3">
              <label htmlFor="email">Email</label>
              <input
                className="p-2 rounded-md border outline-none"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={() => {
                  handleEmailChange(event);
                }}
              />
            </div>
            <div className="password flex flex-col gap-y-3">
              <label htmlFor="password">Password</label>
              <input
                className="p-2 rounded-md border outline-none"
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={() => {
                  handlePasswordChange(event);
                }}
              />
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-x-2">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1" className="text-sm">
                  Remember me
                </label>
              </div>
              <a className="text-blue-500 text-sm" href="#">
                forgot my password
              </a>
            </div>
            <button
              className="text-white bg-black rounded-md py-2 mt-5"
              type="submit"
            >
              Log in
            </button>
          </form>
          <div className="create_account flex flex-row items-center gap-x-2 mt-10">
            <p className="text-sm">Don't have an account?</p>{" "}
            <Link to="/signup">
              <p className="text-blue-500 text-sm">Sign up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
