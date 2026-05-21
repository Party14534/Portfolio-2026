export default function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-mono" aria-label="Zachariah Dellimore · Home">
        Z<span className="sep">·</span>D
      </a>
      <div className="nav-links">
        <a href="#about">
          <span className="num">01</span>About
        </a>
        <a href="#projects">
          <span className="num">02</span>Work
        </a>
        <a href="#skills">
          <span className="num">03</span>Toolkit
        </a>
        <a href="#resume">
          <span className="num">04</span>Experience
        </a>
        <a href="#contact" className="contact-cta">
          <span className="num">05</span>Contact
        </a>
      </div>
    </nav>
  )
}
