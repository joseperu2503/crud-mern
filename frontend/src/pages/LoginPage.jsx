import React, { useState } from "react";
import Input from "@/components/login/Input";
import SocialButton from "@/components/login/SocialButton";
import facebookLogo from "@/assets/facebook.png";
import googleLogo from "@/assets/google.png";
import Card from "@/components/login/Card";
import CheckBox from "@/components/login/CheckBox";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setToken } from "../slices/authSlice";
// import http from "../axios";
import reactLogo from "@/assets/react.png";

const LoginPage = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const onLogin = async (event) => {
    event.preventDefault()
    console.log('submiiiiit')
    // await http
    //   .post("/login", {
    //     email: email,
    //     password: password,
    //   })
    //   .then((response) => {
    //     dispatch(setToken(response.data.access_token));
    //     navigate("/dashboard");
    //   })
    //   .catch((error) => {
    //     if (error.response.status === 422) {
    //       setErrors(error.response.data.errors);
    //     }
    //   });
  };

  const signUp = (event) => {
    navigate("/register");
  };

  return (
    <>
      <Card>
        <img src={reactLogo} alt="" className="w-28 mx-auto mb-4" />
        <h2 className="text-2xl font-bold">Welcome back</h2>
        <p className="text-sm font-light text-slate-500">
          <span>Start your website in seconds. Don’t have an account?</span>
          <span
            className="text-primary-600 font-medium cursor-pointer ml-2 w-min"
            onClick={signUp}
          >
            Sign up.
          </span>
        </p>
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10" onSubmit={onLogin}>
          <Input
            value={email}
            setValue={setEmail}
            label="Email"
            type="text"
            placeholder="joseperu2503@gmail.com"
            error={errors.email}
          />
          <Input
            value={password}
            setValue={setPassword}
            label="Password"
            type="password"
            placeholder="•••••••••"
            error={errors.password}
          />
        </form>
        <div className="mt-10 flex items-center">
          <hr className="w-full border" />
          <span className="mx-4">or</span>
          <hr className="w-full border" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <SocialButton text="Sign in with Facebook" img={facebookLogo} />
          <SocialButton text="Sign in with Google" img={googleLogo} />
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2">
          <CheckBox
            value={remember}
            setValue={setRemember}
            label="Remember me"
          />
          <span className="text-sm text-primary-600 font-medium hover:underline cursor-pointer">
            Forgot password?
          </span>
        </div>
        <div className="mt-6">
          <button
            type="button"
            className="w-full text-white bg-primary-500 hover:bg-primary-600 shadow border font-medium rounded-lg text-sm px-5 py-2 flex justify-center items-center"
            onClick={onLogin}
          >
            Sign in to your account
          </button>
        </div>
      </Card>
    </>
  );
};

export default LoginPage;
