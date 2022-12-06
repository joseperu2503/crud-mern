import React from "react";
import img from "@/assets/illustration.svg";
import { Outlet } from "react-router-dom";

const LoginResgister = () => {
  return (
    <div className="bg-gray-50 fixed right-0 bottom-0 left-0 top-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full p-4 sm:p-10">
        <div className="flex items-center justify-center sm:max-w-2xl mx-auto w-full">
          <Outlet />
        </div>
        <div className="hidden lg:flex items-center justify-center ">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginResgister;
