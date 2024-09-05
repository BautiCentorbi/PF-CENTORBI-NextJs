import React from "react";
import Link from "next/link";

const PrimaryButton = ({ label, link, handleEvent, props}) => {
  return (
    <Link
        href={link}
        className="transition px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-white rounded-lg bg-ourpink-light hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400"
        onClick={handleEvent}
        {...props}
    >
        {label}
    </Link>
  );
};

export default PrimaryButton;
