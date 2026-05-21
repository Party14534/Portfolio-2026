import SectionHead from './SectionHead'

export default function About() {
  return (
    <section id="about" data-num="01">
      <div className="container">
        <SectionHead num="01" name="About" />

        <div className="about-grid">
          <p className="about-quote">
            I like building all types of software.{' '}
            <span className="gradient">
              A backend monitoring service. An AI agent that ships browser
              games. A Game Boy emulator that runs real ROMs.
            </span>{' '}
            The medium changes; the work doesn&apos;t.
          </p>

          <div className="about-body">
            <p>
              I&apos;m a software engineer at <strong>Telus Digital</strong>,
              working on backend services for a customer-facing platform. The
              work shifts week to week: standing up a new service one sprint,
              digging into a slow query the next, sitting in on architecture
              decisions in between. I like that no two weeks look the same.
            </p>
            <p>
              Outside of work I build things that have nothing to do with my
              day job. Most recently, a Game Boy emulator in C++ that plays
              commercial ROMs. Before that, an AI agent that ships browser
              games end-to-end and took{' '}
              <strong>
                2nd at the Cerebral Valley AIE Code Agents Hackathon
              </strong>
              . Before that, a karaoke app powered by Mozilla&apos;s
              DeepSpeech.
            </p>
            <p>
              I graduated from{' '}
              <a
                href="https://www.vcu.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virginia Commonwealth University
              </a>{' '}
              with a B.S. in Computer Science, Magna Cum Laude, in May 2025. I
              live in Richmond, VA.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
