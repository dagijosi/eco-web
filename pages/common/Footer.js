import React from "react";

const QuickLink = React.memo(({ title, links }) => (
  <div className="mr-20">
    <h1 className="text-xs not-italic font-normal leading-5 capitalize">
      {title}
    </h1>
    {links.map((link, index) => (
      <a
      key={index}
        href="#"
        className="flex text-xs not-italic font-light leading-5 capitalize"
      >
        {link}
      </a>
    ))}
  </div>
));

const Footer = () => {
  const quickLinks = [
    {
      title: "quick links",
      links: ["Home", "about us", "contact us", "fAQ"],
    },
    {
      title: "important policies",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Returns & Refunds",
        "Shipping Policy",
      ],
    },
    {
      title: "let us help you",
      links: ["Customer Support", "Live Chat", "Help Center"],
    },
    {
      title: "connect with us",
      links: ["facebook", "twitter", "instagram"],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col">
  <div className="bg-white text-black">
    <div className="flex flex-col items-center justify-center px-4 py-8 md:flex-row md:justify-between">
      
      {/* Quick links */}
      <div className="flex flex-wrap justify-center mb-4 md:mb-0">
        {quickLinks.map((quickLink) => (
          <QuickLink
            key={quickLink.title} 
            title={quickLink.title}
            links={quickLink.links}
          />
        ))}
      </div>
      
      {/* Email signup */}
      <div className="mr-0 md:mr-20">
        <h2 className="text-sm font-medium mb-2">Subscribe for updates</h2>
        
        <div className="flex flex-col sm:flex-row sm:justify-between max-w-xs">
          <input 
            className="w-full mb-2 sm:mb-0 sm:mr-2"
            placeholder="Enter your email" 
          />
          
          <button className="w-full sm:w-auto bg-black hover:bg-indigo-600 text-white px-4 py-2">
            Subscribe
          </button>
        </div>
      </div>
      
    </div>
  </div>

  {/* Copyright */}
  <div className="bg-gray-900 text-gray-400 text-center py-4 text-sm">
    <p>
      © 2023 Bytez. All rights reserved. 
    </p>
  </div>
</div>

  );
};

export default Footer;
