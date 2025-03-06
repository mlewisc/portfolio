import resume from "../src/documents/new_resume.pdf";

export default function ProjectFooter() {
  return (
    <footer>
      <div className="footer-section-2">
        <div className="stacked-left-container">
          <p className="very-small-uppercase grey">Let's Connect</p>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/maiara-lewis-cipriano/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="mailto: maiaralewiscipriano@email.com">Email</a>
            <a href={resume} target="_blank">
              Resume
            </a>
          </div>
        </div>
        <div className="stacked-right-container">
          <p className="very-small-uppercase grey">
            © 2025 Maia Lewis Cipriano
          </p>
          <p>Designed and developed by me 🌷</p>
        </div>
      </div>
    </footer>
  );
}
