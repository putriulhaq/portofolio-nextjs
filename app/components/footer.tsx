import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-4 flex justify-center items-center fixed bottom-0 left-0 w-full">
      <a
        href="https://www.linkedin.com/in/dhiyaulhaqputrikinanty/"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn"
          className="h-6 w-6"
        />
      </a>
      <a
        href="https://github.com/putriulhaq"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub"
          className="h-6 w-6"
        />
      </a>
    </footer>
  );
};

export default Footer;
