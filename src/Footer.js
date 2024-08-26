import resume from "../src/documents/resume.pdf";

export default function Footer() {
  return (
    <footer>
      <div className="footer-section-1">
        <h2 className="h1-semibold grey">Thanks for stopping by!</h2>
      </div>
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
            © 2024 Maia Lewis Cipriano
          </p>
          <p>Designed and coded with 🖤 by me</p>
        </div>
      </div>
    </footer>
  );
}
