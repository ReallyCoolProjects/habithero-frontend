// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import DarkButton from "../../components/Buttons/DarkButton";
// import TextField from "../../components/Input/TextField";
// import { usePassword } from "../../hooks/usePassword";

// const Signup = () => {
//   const [password, setPassword] = useState({
//     firstPassword: "",
//     confirmePassword: "",
//   });

//   const [focused, setFocused] = React.useState(false);
//   const onFocus = () => setFocused(true);
//   const onBlur = () => setFocused(false);

//   const [checked, setChecked] = useState(false);

//   const [ready, setReady] = useState(false);

//   const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
//     usePassword({
//       firstPassword: password.firstPassword,
//       secondPassword: password.confirmePassword,
//     });

//   const setPass = (event: any) => {
//     setPassword({ ...password, firstPassword: event.target.value });
//   };
//   const setConfirmePass = (event: any) => {
//     setPassword({ ...password, confirmePassword: event.target.value });
//   };

//   const submitData = () => {
//     if (
//       validLength &&
//       hasNumber &&
//       upperCase &&
//       lowerCase &&
//       match &&
//       specialChar &&
//       checked
//     ) {
//     }
//   };
//   return (
//     <section className="p-6 flex flex-col justify-center items-center relative">
//       <Link to={"/"}>
//         <div className="absolute top-4 left-4 text-4xl font-black font-[monospace]">
//           HabitHero
//         </div>
//       </Link>
//       <h2 className="text-xl mb-10 font-semibold text-center">
//         Login to your account and let's start grinding!
//       </h2>
//       {/**login form */}
//       <form
//         action=""
//         className="bg-[#c8c9ca] w-[100%] p-4 flex flex-col h-[50vh] justify-around rounded-lg"
//         onSubmit={submitData}
//       >
//         <h3 className="text-3xl text-center">Log In</h3>
//         {/**form starts here */}
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             className="h-10 rounded-md border-none outline-none "
//             onChange={(e: any) => {
//               console.log(e.target.value);
//             }}
//           />
//           <label htmlFor="email">password</label>
//           <input
//             type="password"
//             id="password"
//             className="h-10 rounded-md border-none outline-none "
//             onFocus={onFocus}
//             onBlur={onBlur}
//             onChange={() => {
//               setPass(event);
//             }}
//           />
//           <ul className="list-none">
//             {focused && validLength ? (
//               <li className="text-xs text-green-500">
//                 between 15 and 30 character long
//               </li>
//             ) : (
//               <li className="text-xs">
//                 between 15 and 30 character long
//               </li>
//             )}
//             {upperCase ? (
//               <li className="text-xs line-through">
//                 {" "}
//                 li uppercase character
//               </li>
//             ) : (
//               <li className="text-xs">uppercase character</li>
//             )}
//             {lowerCase ? (
//               <li className="text-xs line-through">lowercase character</li>
//             ) : (
//               <li className="text-xs">lowercase character</li>
//             )}
//             {hasNumber ? (
//               <li className="text-xs line-through">1 digit</li>
//             ) : (
//               <li className="text-xs">1 digit</li>
//             )}
//             {specialChar ? (
//               <li className="text-xs line-through">1 special character</li>
//             ) : (
//               <li className="text-xs">1 special character</li>
//             )}
//           </ul>
//           <label htmlFor="email">Confirm password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             onChange={() => {
//               setConfirmePass(event);
//             }}
//             className="h-10 rounded-md border-none outline-none "
//           />
//           {match ? (
//             <p className="text-xs line-through">password match</p>
//           ) : (
//             <p className="text-xs">password not matched</p>
//           )}
//         </div>
//         <div className="flex justify-center">
//           {/* <DarkButton text="Login" /> */}
//           <button type="submit"></button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Signup;

import React, { useEffect, useRef, useState } from "react";

import { FcGoogle } from "react-icons/fc";

import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

import { usePassword } from "../../hooks/usePassword";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const accessToken = "";
  const [hidden, setHidden] = useState(true);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [items, setItems] = useState([]);

  const [checked, setChecked] = useState(false);

  const [ready, setReady] = useState(false);

  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    usePassword({
      firstPassword: password,
    });

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handleBioChange = (event: any) => {
    setBio(event.target.value);
  };

  const setPass = (event: any) => {
    setPassword(event.target.value);
  };

  const submitData = async (event: any) => {
    event.preventDefault();
    if (
      validLength &&
      hasNumber &&
      upperCase &&
      lowerCase &&
      specialChar &&
      checked
    ) {
      try {
        console.log(name, email, password, bio);
        const response = await axios.post(
          "http://localhost:5000/auth/local/signup",
          {
            username: name,
            email: email,
            hashedPassword: password,
            bio: bio,
          }
        );
        localStorage.setItem("access_token", response.data.access_token);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="bg-black h-screen w-full max-lg:h-screen py-10">
      <div className="container xl:w-3/6 h-5/6 bg-white flex flex-row m-auto mt-10 rounded-md lg:w-3/6  md:w-4/6 lg:w-full  max-lg:flex-col w-full  max-lg:items-center">
        <div className="login xl:flex xl:flex-col flex-1 w-2/6 items-center justify-center px-24 max-lg:px-18 max-lg:w-full max-md:px-5 ">
          <div className="google_auth  w-5/6 flex flex-row gap-x-2 items-center justify-center rounded-md border py-2 my-10 cursor-pointer max-lg:w-full">
            <FcGoogle size={"22px"} />
            <p className="font-lg">Sign up with google</p>
          </div>

          <form
            action=""
            className="flex flex-col gap-y-3 w-5/6 max-lg:w-full  "
            onSubmit={() => {
              submitData(event);
            }}
          >
            <div className="email flex flex-col gap-y-3">
              <label htmlFor="email">Name</label>
              <input
                className="p-2 rounded-md border outline-none"
                type="name"
                name="name"
                required
                placeholder="Enter your name"
                value={name}
                onChange={() => {
                  handleNameChange(event);
                }}
              />
            </div>
            <div className="email flex flex-col gap-y-3">
              <label htmlFor="email">Email</label>
              <input
                className="p-2 rounded-md border outline-none"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                onChange={() => {
                  handleEmailChange(event);
                }}
              />
            </div>
            <div className="password relative flex flex-col gap-y-3">
              <label htmlFor="password">Password</label>
              <input
                className="p-2 rounded-md border outline-none"
                type={hidden ? "password" : "text"}
                name="password"
                required
                onChange={setPass}
                placeholder="Password"
              />
              {hidden ? (
                <RxEyeClosed
                  onClick={() => {
                    setHidden(false);
                  }}
                  className="absolute top-12 right-4"
                />
              ) : (
                <RxEyeOpen
                  className="absolute top-12 right-4"
                  onClick={() => {
                    setHidden(true);
                  }}
                />
              )}
              <ul className={`list-none`}>
                {validLength ? (
                  <li className="text-xs line-through">
                    between 15 and 30 character long
                  </li>
                ) : (
                  <li className="text-xs ">between 15 and 30 character long</li>
                )}
                {upperCase ? (
                  <li className="text-xs line-through">
                    {" "}
                    li uppercase character
                  </li>
                ) : (
                  <li className="text-xs ">uppercase character</li>
                )}
                {lowerCase ? (
                  <li className="text-xs line-through">lowercase character</li>
                ) : (
                  <li className="text-xs ">lowercase character</li>
                )}
                {hasNumber ? (
                  <li className="text-xs line-through">1 digit</li>
                ) : (
                  <li className="text-xs ">1 digit</li>
                )}
                {specialChar ? (
                  <li className="text-xs line-through">1 special character</li>
                ) : (
                  <li className="text-xs ">1 special character</li>
                )}
              </ul>
            </div>
            <div className="bio flex flex-col gap-y-3">
              <label htmlFor="">Bio</label>
              <textarea
                className="border-none outline-none"
                name="bio"
                id="bio"
                value={bio}
                onChange={() => {
                  handleBioChange(event);
                }}
                placeholder="tell us more about your self..."
              ></textarea>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-x-2">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="privacy"
                  value="privacy"
                  color="black"
                  checked={checked}
                  onChange={() => {
                    checked ? setChecked(false) : setChecked(true);
                  }}
                />
                <label className="text-sm text-gray-400" htmlFor="vehicle1">
                  By checking this box you agree on the privacy policy
                </label>
              </div>
            </div>
            <button
              className="text-white bg-black rounded-md py-2 mt-5"
              type="submit"
            >
              Sign up
            </button>
          </form>
          <div className="create_account flex flex-row items-center gap-x-2 mt-10 max-lg:mb-10">
            <p>already have an account?</p>{" "}
            <Link to="/login">
              <p className="text-blue-500">Sign in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
