import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> JIYEON CHOI / PORTFOLIO
          </p>

          <h1>
            DESIGN
            <br />
            WITH
            <span className="hero-last">
              PURPOSE<span className="accent-dot">.</span>
            </span>
          </h1>

          <p>
            HCI student exploring the connection between people, design, and
            technology.
            <br />
            Creating simple and thoughtful digital experiences.
          </p>

          <div className="button-row">
            <Button asChild>
              <Link href="/work">
                View my work <span aria-hidden="true">↗</span>
              </Link>
            </Button>

            <Link className="text-link" href="/about">
              About me ↗
            </Link>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <span className="art-label">OPEN TO POSSIBILITIES</span>
          <svg viewBox="0 0 400 400">
            <path
              d="M70 320 320 70M100 70h220v220"
              fill="none"
              stroke="currentColor"
              strokeWidth="60"
            />
          </svg>
          <span className="art-bottom">IDEAS → INTO ACTION</span>
        </div>
      </section>

      <div className="ticker">
        <span>THINK CLEARLY.</span>
        <span>MAKE BOLDLY.</span>
        <span>KEEP EXPLORING.</span>
        <span aria-hidden="true">↗</span>
      </div>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / THE WORK</p>
            <h2>Start with a question.</h2>
          </div>
          <Link className="text-link" href="/work">
            All sample projects ↗
          </Link>
        </div>

        <div className="project-grid">
          {projects.map((project, i) => (
            <Link
              className="project-card"
              href={`/work/${project.slug}`}
              key={project.slug}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={800}
                  height={560}
                />
              </div>

              <div className="project-meta">
                <span>0{i + 1} / SAMPLE PROJECT</span>
                <span aria-hidden="true">↗</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.discipline}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
