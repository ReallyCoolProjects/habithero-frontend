import React from "react";
import DarkButton from "../../components/Buttons/DarkButton";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import TextField from "../../components/Input/TextField";

const ProfileView = () => {
  const profilePic =
    "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  return (
    <div
      className="grid p-6 grid-cols-1 grid-rows-2 w-full h-[100vh]"
      id="profile-view"
    >
      <div className="flex flex-col justify-between">
        <span className="text-5xl">Hello, Ligma</span>
        <img
          src={profilePic}
          alt=""
          className="w-28 border border-black rounded-full"
        />
      </div>
      {/** form */}
      <form action="" className='flex flex-col justify-around text-xl p-4 bg-[#c8c9ca] rounded-lg min-h-[50vh]'>
            <TextField label="Name" type="text" id="user-name" placeholder="ex: johanathan25" />
            <TextField label="Goal" type="text" id="goal" placeholder="ex: Lose 5kg in a month" />
            <div className="flex  flex-col justify-between items-center h-[20vh] w-full">
                <DarkButton text="Submit" />
                <OutlinedButton text="Cancel" />
            </div>
        </form>
      {/* <div className="mt-4">
        <div>
          <div className="flex flex-col">
            <span className="">Name</span>
            <span className="text-2xl">Jack Dorsey</span>
          </div>
          <span className="material-symbols-outlined">edit</span>
        </div>
      </div> */}
    </div>
  );
};

export default ProfileView;
