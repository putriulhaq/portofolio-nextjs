import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-4 flex flex-col items-center fixed bottom-0 left-0 w-full text-center">
      <div className="flex justify-center items-center mb-2">
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
        <a
          href="mailto:putriulhaq0609@gmail.com"
          className="mx-2"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
            className="h-6 w-6"
          />
        </a>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        © 2025 | This website is built with <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and hosted on <strong>Vercel</strong>.
      </p>
    </footer>
  );
};

export default Footer;
