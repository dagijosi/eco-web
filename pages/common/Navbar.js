'use client'
// Import React library and necessary components
import React, { useState } from "react";
import IconButton from "./IconButton";
import { IMAGE_PATHS } from "./constants";
import Link from "next/link";

// Define the Navbar component
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Define the navigation items
  const navItems = ["HOME", "STORE", "BLOG", "CONTACT"];

  // Define the icons
  const icons = [
    { src: IMAGE_PATHS.SEARCH, alt: "Search" },
    { src: IMAGE_PATHS.CART, alt: "Cart" },
    { src: IMAGE_PATHS.USER, alt: "User" },
  ];
  const dropdownItems = [
    {
      text: "Hello Nabeel",
      action: () => console.log("Username clicked"),
      iconpic: IMAGE_PATHS.CUSTOMER,
    },
    {
      text: "Orders",
      action: () => console.log("Orders clicked"),
      iconpic: IMAGE_PATHS.IN_TRANSIT,
    },
    {
      text: "Cart",
      action: () => console.log("Cart clicked"),
      iconpic: IMAGE_PATHS.CART,
    },
    {
      text: "Wishlist",
      action: () => console.log("Wishlist clicked"),
      iconpic: IMAGE_PATHS.HEART,
    },
    {
      text: "Compare",
      action: () => console.log("Compare clicked"),
      iconpic: IMAGE_PATHS.COMPARE,
    },
    {
      text: "Profile",
      action: () => console.log("Profile clicked"),
      iconpic: IMAGE_PATHS.PROFILE,
    },
    {
      text: "Logout",
      action: () => console.log("Logout clicked"),
      iconpic: IMAGE_PATHS.LOGOUT,
    },
  ];
  // Map through the navigation items and create buttons for each item
  const NavbarItem = ({ item }) => (
    <button
      key={item}
      className="text-black text-xs not-italic font-medium leading-7 uppercase mt-3 mr-5"
    >
      {item}
    </button>
  );

  // Map through the icons and create icon buttons for each icon
  const IconButtonComponent = ({ icon, altText, classtype, onClick }) => (
    <IconButton
      key={altText}
      icon={icon}
      altText={altText}
      classtype={classtype}
      onClick={onClick}
    />
  );

  // Return the Navbar component
  return (
    <nav className="flex flex-row w-full h-20 flex-shrink-0 justify-between">
      <div className="flex flex-row ml-4 md:ml-14">
        <button className="w-20 h-12 mt-4 mr-4 md:mr-12">
          <img src={IMAGE_PATHS.LOGO} alt="Logo" />
        </button>

        {/* Use flex-wrap to wrap nav items */}
        <div className="flex flex-row flex-wrap">
          {navItems.map((item) => (
            <NavbarItem item={item} />
          ))}
        </div>
      </div>
      <div className=" mt-4 mr-4 md:mr-20">
        {/* Hide icons on mobile */}
        <div className="hidden md:flex">
          {icons.map((icon) => (
            <IconButtonComponent
              icon={icon.src}
              altText={icon.alt}
              classtype={"w-6 h-6 mt-4 mr-8"}
              onClick={
                icon.alt === "User"
                  ? () => setShowDropdown(!showDropdown)
                  : undefined
              }
            />
          ))}
        </div>

        {/* Show hamburger menu icon on mobile */}
        <button className="md:hidden">
          <HamburgerIcon />
        </button>
        {showDropdown && (
          <div className="dropdown mt-5 flex flex-col">
            {isLoggedIn ? (
              <>
                {dropdownItems.map(({ text, action, iconpic }, index) => (
                  <button
                    key={index}
                    className="flex justify-start items-center bg-white w-40 text-black text-base not-italic font-normal leading-7 capitalize mt-0.5"
                    onClick={action}
                  >
                    <IconButton icon={iconpic} classtype={"bg-white p-2"} />
                    {text}
                  </button>
                ))}
              </>
            ) : (
              <div className="absolute">
                <Link href="/Auth/Login">
                  <button className="flex p-2 justify-center items-center bg-white w-40 mt-0.5 text-black text-base not-italic font-normal leading-7 capitalize">
                    Login
                  </button>
                </Link>
                <Link href="/Auth/Signup">
                  <button className="flex p-2 justify-center items-center bg-white w-40 mt-0.5 text-black text-base not-italic font-normal leading-7 capitalize">
                    Sign up
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

// Export the Navbar component
export default Navbar;

function HamburgerIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
