import SectionHead from './SectionHead'

const groups = [
  {
    label: 'Languages',
    items: [
      'C++',
      'C',
      'Go',
      'C#',
      'Java',
      'Python',
      'TypeScript',
      'JavaScript',
      'Kotlin',
      'SQL',
      'GLSL',
      'MATLAB',
    ],
  },
  {
    label: 'Frameworks',
    items: [
      '.NET',
      'Spring Boot',
      'FastAPI',
      'Node.js',
      'Gin',
      'React',
      'Next.js',
      'Tailwind',
      'Jetpack Compose',
    ],
  },
  {
    label: 'Cloud & Tooling',
    items: [
      'Google Cloud',
      'Azure',
      'AWS',
      'Docker',
      'Terraform',
      'Git',
      'CMake',
      'JUnit',
      'GTest',
      'Claude Code',
      'Codex',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" data-num="03">
      <div className="container">
        <SectionHead num="03" name="Toolkit" />
        <h2 className="section-title">
          What I reach <em>for</em>.
        </h2>

        <div className="skills-grid">
          {groups.map((g) => (
            <div className="skill-group" key={g.label}>
              <div className="skill-label">{g.label}</div>
              <ul className="skill-list">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
