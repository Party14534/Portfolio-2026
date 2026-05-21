import SectionHead from './SectionHead'

type Project = {
  num: string
  title: string
  titleEm: string
  year: string
  badge?: string
  desc: string
  tags: string[]
}

const projects: Project[] = [
  {
    num: '001',
    title: 'Game Boy',
    titleEm: 'Emulator',
    year: 'January 2026',
    desc: 'A Game Boy emulator in C++ and SFML that plays commercial ROMs. Full CPU instruction set, graphics rendering, memory mapping, savestates with custom serialization, adjustable game speed, and a configurable UI. Validated against the cpu_instrs and dmg-acid2 hardware test ROMs and a GTest suite organized by instruction category.',
    tags: ['C++', 'SFML', 'CMake', 'GTest'],
  },
  {
    num: '002',
    title: 'AI Web Game',
    titleEm: 'Generator',
    year: 'November 2025',
    badge: '2nd Overall · Cerebral Valley AIE Hackathon',
    desc: 'An autonomous agent that pulls game ideas off a queue and ships playable web games end-to-end. Claude writes the Phaser.js while Gemini generates the in-game art. FastAPI orchestrates the loop, a React/Vite frontend serves the games, all wired together with Docker Compose. Two-person team.',
    tags: ['Python', 'FastAPI', 'React', 'Phaser.js', 'Claude', 'Gemini', 'Docker'],
  },
  {
    num: '003',
    title: 'Real-time',
    titleEm: 'Karaoke',
    year: 'July 2024',
    desc: "An automated karaoke app in C++/SFML. Drop in any audio file and it uses Mozilla's DeepSpeech model to generate and display lyrics synced to the music in real time.",
    tags: ['C++', 'SFML', 'DeepSpeech'],
  },
]

export default function Projects() {
  return (
    <section id="projects" data-num="02">
      <div className="container">
        <SectionHead num="02" name="Selected Work" />
        <h2 className="section-title">
          Things I&apos;ve <em>built</em>.
        </h2>

        <div className="projects-list">
          {projects.map((p) => (
            <article className="project-card" key={p.num}>
              <div>
                <div className="project-num">
                  {p.num} / {String(projects.length).padStart(3, '0')}
                </div>
                <h3 className="project-title">
                  {p.title} <em>{p.titleEm}</em>
                </h3>
                <div className="project-meta">
                  <span>{p.year}</span>
                  {p.badge && (
                    <span className="project-badge">★ {p.badge}</span>
                  )}
                </div>
              </div>

              <div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="project-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
