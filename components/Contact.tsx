import SectionHead from './SectionHead'

export default function Contact() {
  return (
    <section id="contact" data-num="05">
      <div className="container">
        <SectionHead num="05" name="Contact" />
        <h2 className="section-title">
          Got something in mind? <em>Let&apos;s talk</em>.
        </h2>

        <div className="contact-wrap">
          <a
            href="mailto:zachariahdellimore03@gmail.com"
            className="contact-email"
          >
            zachariahdellimore03<span className="at">@</span>gmail.com
          </a>

          <div className="contact-links">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/zachariah-dellimore/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">01</span>LinkedIn{' '}
              <span className="arrow">↗</span>
            </a>
            <a
              className="contact-link"
              href="https://github.com/Party14534"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">02</span>GitHub{' '}
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
