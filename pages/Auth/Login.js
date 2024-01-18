'use client'

import React, { memo } from "react";
import IconButton from "../common/IconButton";
import Link from "next/link";
import { IMAGE_PATHS } from "../common/constants";
import { useRouter } from "next/router";

const InputWithIcon = memo(
  ({ iconPath, altText, className, type, placeholder }) => {
    return (
      <div className="flex flex-row mt-10">
        <IconButton icon={iconPath} altText={altText} classtype={className} />
        <input
          type={type}
          className="placeholder-blueGray-300 text-blueGray-600 bg-transparent focus:outline-none w-full"
          placeholder={placeholder}
        />
      </div>
    );
  }
);

const Divider = () => <div className="bg-white w-96 h-0.5" />;

const SocialIconButton = memo(({ icon, altText }) => (
  <IconButton
    icon={icon}
    altText={altText}
    classtype="w-8 h-8 mr-8 mb-1 rounded-full border border-white flex items-center justify-center"
  />
));

const Login = () => {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-br from-gray-700 to-gray-900 w-full h-full text-white flex items-center justify-center">
      <div className="card w-fit bg-transparent rounded-2xl shadow-xl my-16 pt-12 px-16">
        <div className="card-body">
          <h1 className="text-2xl not-italic font-bold leading-9 uppercase">
            EXISTING MEMBER
          </h1>
          <h1 className="text-2xl not-italic font-normal leading-9">
            Welcome Back!
          </h1>
          <InputWithIcon
            iconPath={IMAGE_PATHS.MAIL}
            altText="Mail"
            className="w-6 h-6 mr-4 mb-1"
            type="email"
            placeholder="Enter your Email"
          />
          <Divider />
          <InputWithIcon
            iconPath={IMAGE_PATHS.LOCK}
            altText="Lock"
            className="w-6 h-6 mr-4 mb-1"
            type="password"
            placeholder="Enter your Password"
          />
          <Divider />
          <a
            href="/Auth/Forget_Password"
            className="text-sm not-italic font-medium mt-4"
          >
            Forgot Your Password?
          </a>
          <button
            className="bg-white text-black text-sm font-bold uppercase px-6 py-3 rounded h-12 mt-4 mr-1 mb-1 w-full flex-shrink-0"
            type="button"
            onClick={() => router.push("/Home/HomePage")}
          >
            Login
          </button>
          <div className="flex flex-row mt-6">
            <div className="bg-gray-400 w-full h-0.5" />
            <h1 className="mx-2 text-center text-sm not-italic font-medium leading-4">
              OR
            </h1>
            <div className="bg-gray-400 w-full h-0.5" />
          </div>
          <div className="flex flex-row items-center justify-center mt-6 ml-8">
            <SocialIconButton icon={IMAGE_PATHS.GOOGLE} altText="Mail" />
            <SocialIconButton icon={IMAGE_PATHS.FACEBOOK} altText="Mail" />
            <SocialIconButton icon={IMAGE_PATHS.APPLE} altText="Mail" />
          </div>
          <div className="flex flex-row mt-6 mb-24">
            <h1 className="text-sm not-italic font-medium">
              Don’t have an account?
            </h1>
            <Link href="/Auth/Signup" className="text-sm not-italic font-bold">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
