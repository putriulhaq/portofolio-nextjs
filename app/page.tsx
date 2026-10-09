import PageBlog from "./blog/page";

export default function Home() {
  return (
    <div className="flex justify-start h-screen bg-gray-100">
      <div className="w-full max-w-3xl mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-300">
          Dhiya&apos;Ulhaq Putri Kinanty
        </h1>

        <div className="mt-4 space-y-4 text-base leading-relaxed text-left text-gray-700 dark:text-gray-300">
            <p>
              Hi, I&apos;m Ulhaq, a software engineer with 4 years of experience building
              reliable, scalable, and maintainable applications. I enjoy working with
              product and engineering teams to turn ideas into solid, production ready
              solutions.
            </p>
            <p>
              I work mainly with Python (Flask), Node.js, and PHP, backed by PostgreSQL
              and MySQL, and I&apos;m comfortable owning a service from API design through
              deployment on AWS and GCP. My recent work includes migrating a Laravel
              backend to Python for better scalability, integrating a payment system. 
              Earlier, I built real-time monitoring and observability systems with RESTful 
              APIs, set up CI/CD pipelines with Jenkins and Docker, and built Linux servers from scratch.
            </p>
            <p>
              Below are notes on things I&apos;ve learned and tried along the way. Outside
              of code, I&apos;m usually running or playing badminton. Let&apos;s connect!
            </p>
        </div>

        <PageBlog />
      </div>
    </div>
  );
}
