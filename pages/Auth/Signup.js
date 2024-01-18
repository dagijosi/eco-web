import React, { memo } from "react";
import IconButton from "../common/IconButton";
import Link from "next/link";
import { IMAGE_PATHS } from "../common/constants";

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

const Signup = () => {
  return (
    <div className="bg-gradient-to-br from-gray-700 to-gray-900 w-full h-full text-white flex items-center justify-center">
      <div className="card w-fit bg-transparent rounded-2xl shadow-xl my-16 pt-12 px-16">
        <div className="card-body">
          <h1 className="text-2xl not-italic font-bold leading-9 uppercase">
          create an account
          </h1>
          <h1 className="text-2xl not-italic font-normal leading-9">
          Welcome To Bytez
          </h1>
          <InputWithIcon
            iconPath={IMAGE_PATHS.CUSTOMER}
            altText="name"
            className="w-6 h-6 mr-4 mb-1"
            type="text"
            placeholder="Enter your name"
          />
          <Divider />
          <InputWithIcon
            iconPath={IMAGE_PATHS.MAIL}
            altText="mail"
            className="w-6 h-6 mr-4 mb-1"
            type="email"
            placeholder="Enter your email"
          />
          <Divider />
          <InputWithIcon
            iconPath={IMAGE_PATHS.LOCK}
            altText="password"
            className="w-6 h-6 mr-4 mb-1"
            type="password"
            placeholder="Enter your password"
          />
          <Divider />
          <InputWithIcon
            iconPath={IMAGE_PATHS.LOCK}
            altText="password-confirm"
            className="w-6 h-6 mr-4 mb-1"
            type="password"
            placeholder="Confirm password"
          />
          <Divider />
          <button
            className="bg-white text-black text-sm font-bold uppercase px-6 py-3 rounded h-12 mt-4 mr-1 mb-1 w-full flex-shrink-0"
            type="button"
          >
            Sign Up
          </button>
        
          <div className="flex flex-row mt-6 mb-24">
            <h1 className="text-sm not-italic font-medium">
              Already have an account?
            </h1>
            <Link href="/Auth/Login" className="text-sm not-italic font-bold">
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
