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

const Forget_Password = () => {
  return (
    <div className="bg-gradient-to-br from-gray-700 to-gray-900 w-full h-full text-white flex items-center justify-center">
      <div className="card w-fit bg-transparent rounded-2xl shadow-xl my-16 py-28 px-20">
        <div className="card-body">
          <h1 className="text-2xl not-italic font-bold leading-9 uppercase">
          Forgot Your Password?
          </h1>
          <h1 className="text-2xl not-italic font-normal leading-9">
          Don't worry, we're here to help!
          </h1>
          <InputWithIcon
            iconPath={IMAGE_PATHS.MAIL}
            altText="name"
            className="w-6 h-6 mr-4 mb-1"
            type="email"
            placeholder="Enter your Email"
          />
          <Divider />
          <div className="flex flex-row ">
            <Link href="/Auth/Login">
          <button
            className="bg-transparent border border-white text-white text-sm font-bold uppercase px-6 py-3 rounded-3xl h-12 mt-4 mr-8 mb-1  flex-shrink-0"
            type="button"
          >
            Go back
          </button>
          </Link>
          <button
            className="bg-white text-black text-sm font-bold uppercase px-6 py-3 rounded-3xl h-12 mt-4 mr-1 mb-1 w-64 flex-shrink-0"
            type="button"
          >
            Continue
          </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Forget_Password;
