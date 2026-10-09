import PageBlog from "./blog/page";
import { site, experience } from "./site";

export default function Home() {
  return (
    <div className="space-y-12">
      <section>
        <p className="text-sm text-muted">
          <span className="text-accent">$</span> whoami
        </p>
        <h1 className="cursor mt-2 text-2xl font-bold sm:text-3xl">
          {site.name}
        </h1>
        <p className="mt-1 text-muted">{site.role}</p>
        {site.status && (
          <p className="mt-3 text-sm">
            <span className="text-accent">●</span> status: {site.status}
            {site.location && <span className="text-muted"> · {site.location}</span>}
          </p>
        )}

        <div className="mt-6 space-y-4 leading-relaxed">
            <p>
              Hi, I&apos;m Ulhaq, a software engineer with 4 years of experience building
              reliable, scalable, and maintainable applications. I enjoy working with
              product and engineering teams to turn ideas into solid, production-ready
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

        <dl className="mt-6 grid grid-cols-[4rem_1fr] gap-y-1 border-l-2 border-accent pl-4 text-sm">
          {site.stack.map(([key, value]) => (
            <div key={key} className="contents">
              <dt className="text-muted">{key}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 break-all text-sm text-muted">
          <span className="text-accent">$</span> curl {site.url.replace(/^https?:\/\//, "")}/api/whoami
        </p>
      </section>

      {experience.length > 0 && (
        <section>
          <h2 className="text-sm text-muted">
            <span className="text-accent">$</span> cat experience.log
          </h2>
          <ul className="mt-3">
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="flex gap-4 border-b border-line py-3">
                <span className="w-24 shrink-0 text-sm leading-6 text-muted sm:w-44">{job.period}</span>
                <div>
                  <p>
                    {job.role} <span className="text-muted">@</span> {job.company}
                  </p>
                  {job.highlight && <p className="mt-1 text-sm text-muted">{job.highlight}</p>}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <PageBlog />
    </div>
  );
}
