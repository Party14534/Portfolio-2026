import SectionHead from './SectionHead'

type Item = {
  date: string
  role: string
  org: string
  points: string[]
}

const items: Item[] = [
  {
    date: 'Sep 2025 to Present',
    role: 'Software Engineer',
    org: 'Telus Digital · Charlottesville, VA',
    points: [
      'Designed and built a Spring Boot service on GKE that monitors a production data pipeline end-to-end (Pub/Sub, BigQuery, GCS, Datastore), with chat alerting on missed file arrivals and SLA breaches. Replaced 30+ min of daily manual checks; cut incident recovery from hours to minutes.',
      'Drove a performance push across a high-traffic API: brought two hot endpoints from 2.5s to 600ms and 2s to 50ms, prototyped a schema redesign that tested at 5–10× on the worst cases, and co-presented the patterns we developed to the broader engineering org.',
      'Supported the Talent Program through career fair interviews and intern onboarding.',
    ],
  },
  {
    date: 'May to Aug 2024',
    role: 'Return Software Engineer Intern',
    org: 'WillowTree · Charlottesville, VA',
    points: [
      'Shipped three new .NET REST API endpoints expanding client reporting data, plus enhancements to existing endpoints to improve availability of critical reporting.',
      'Used Azure Service Bus to efficiently transfer and replicate data between micro-services and their databases.',
      'Added authorization guards to close a security gap; led two client-facing demos showcasing new backend features.',
    ],
  },
  {
    date: 'Aug 2021 to May 2025',
    role: 'B.S. Computer Science',
    org: 'Virginia Commonwealth University · Magna Cum Laude · GPA 3.89',
    points: ["Dean's List, 6 semesters."],
  },
]

export default function Experience() {
  return (
    <section id="resume" data-num="04">
      <div className="container">
        <SectionHead num="04" name="Experience" />
        <h2 className="section-title">
          A short <em>history</em>.
        </h2>

        <div className="timeline">
          {items.map((it) => (
            <div className="tl-item" key={it.role + it.date}>
              <div className="tl-date">{it.date}</div>
              <div>
                <h3 className="tl-role">{it.role}</h3>
                <div className="tl-org">{it.org}</div>
                <ul className="tl-points">
                  {it.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="resume-download">
          <a href="/resume.pdf" download className="btn btn-primary">
            Download full resume <span className="glyph">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
