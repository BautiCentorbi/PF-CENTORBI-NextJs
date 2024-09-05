import React from "react";
import Link from "next/link";

const SecondaryButton = ({ label, link, handleEvent }) => {
  return (
    <Link
        href={link}
        className="transition px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-ourpink-light/80 dark:text-white rounded-lg border-2 border-ourpink-light/80 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-transparent dark:border-2 dark:border-ourpink-light dark:hover:bg-ourpink-light/50 dark:focus:ring-pink-400"
        onClick={handleEvent}
    >
        {label}
    </Link>
  );
};

export default SecondaryButton;
