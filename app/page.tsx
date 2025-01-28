import PageBlog from "./blog/page";

export default function Home() {
    return (
        <div className="flex justify-start h-screen bg-gray-100">
          <div className="w-full max-w-3xl mx-auto  px-4 pt-20">
            <h1 className="text-4xl font-bold text-black-600 text-gray-700 dark:text-gray-300">Dhiya&apos;Ulhaq Putri Kinanty</h1>
            {/* <p className="text-lg mt-2 text-gray-400 dark:text-gray-500"> 
              Software Engineer
            </p> */}
            <p className="text-base mt-4 text-left text-justify text-gray-700 dark:text-gray-300">
            Hi there! Welcome, and thank you for visiting this page! 
              I&apos;am Ulhaq and currently working as a software engineer, mostly doing fullstack development. Honestly, Iam really eager to dive deeper into 
              backend development that&apos;s where my inrterest lies.
              I&apos;ve been working with Python, PHP, NodeJs, Javascript and recently I’ve started exploring Go,
              which has been super exciting. Outside of coding, I’m a big fan of sports—pretty much any kind! 
              Running, badminton, or just anything active—it’s my way of staying balance, let&apos;s connect!&nbsp;&mdash;&nbsp;😊
            </p>
          <PageBlog />
          </div>
        </div>
      );
}
