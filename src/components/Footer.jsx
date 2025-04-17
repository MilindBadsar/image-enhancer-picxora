import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 w-full text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Image Enhancer. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
