export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="aurora" aria-hidden="true">
        <div className="aurora-blob b1" />
        <div className="aurora-blob b2" />
        <div className="aurora-blob b3" />
      </div>

      <div className="container hero-content">
        <div className="hero-eyebrow">Portfolio · 2026</div>

        <h1 className="hero-name">
          Zachariah
          <br />
          <em>Dellimore</em>
          <span className="dot">.</span>
        </h1>

        <p className="hero-tagline">
          Software engineer at <span className="accent">Telus Digital</span>.
          Backend services, side projects, and performance testing.
        </p>

        <div className="hero-meta">
          <span className="hero-meta-item">
            <span className="pulse" aria-hidden="true" />
            Open to interesting work
          </span>
          <span className="hero-meta-item">Richmond, VA</span>
          <span className="hero-meta-item">B.S. CS, VCU &apos;25</span>
        </div>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            See the work <span className="glyph">↓</span>
          </a>
          <a href="#contact" className="btn arrow">
            Get in touch <span className="glyph">→</span>
          </a>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        Scroll
      </div>
    </header>
  )
}
