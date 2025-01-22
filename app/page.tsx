import Image from "next/image";
import PageBlog from "./blog/page";

export default function Home() {
    return (
        <div className="flex justify-start h-screen bg-gray-100">
          <div className="w-full max-w-3xl mx-auto  px-4 pt-20">
            <h1 className="text-4xl font-bold text-black-600">Dhiya'Ulhaq Putri Kinanty</h1>
            <p className="text-lg mt-4 text-gray-700"> 
              Software Engineer | Fullstack Developer | Python Developer
            </p>
            <p className="text-base mt-4 text-gray-700 text-left text-justify">
            Hi There, Welcome and thank you for visiting this page!
            I’m a passionate software engineer dedicated to building innovative and efficient solutions. 
            With experience in full-stack development, I enjoy sharing ideas, collaborating, and creating applications that make a real impact.
            Feel free to explore and reach out if you have any questions or would like to connect!😊 
            </p>
          <PageBlog />
          </div>
        </div>
      );
}
