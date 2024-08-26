import Footer from "../Footer";
import Navbar from "../Navbar";
import React from "react";

import arrow_down from "../images/keyboard_arrow_down.svg";
import resume from "../documents/resume.pdf";
import me from "../images/me_about.png";
import sticker from "../images/fun_sticker.svg";
import funfacts from "../images/fun_facts.png";

export default function About() {
  const [visible, setVisible] = React.useState();

  function showHidden() {
    setVisible(!visible);
  }
  return (
    <>
      <main>
        <section>
          <Navbar />
          <div className="moveIn">
            <h1
              className="h3-semibold align-center grey padding-block"
              id="about-title"
            >
              As a UX designer, I believe in solving problems with intuitive yet
              innovative designs. I’m passionate about enhancing people’s lives
              by making part of their days easier.
            </h1>
          </div>
          <div className="fixed-center-bottom moveUpAndDown">
            <a href="#me">
              <img src={arrow_down} alt="arrow pointing down" />
            </a>
          </div>
          {visible && (
            <div id="funfacts" className="align-center">
              <img src={funfacts} />
            </div>
          )}

          <div
            id="sticker"
            className="fixed-right-bottom"
            style={{ bottom: "2.5rem" }}
          >
            <img src={sticker} onClick={showHidden} />
          </div>
        </section>
        <section id="sec-1">
          <div className="grid-2-container padding-block">
            <div id="me">
              <h2 className="h1-semibold grey">Hey there,</h2>
              <p className="h1-semibold light-black margin-bottom-small">
                I'm Maia.
              </p>
              <p className="body-regular margin-bottom-small light-black">
                My name is Maiara, but I go by Maia. I’m a{" "}
                <strong>senior</strong> undergrad at the University of Michigan
                studying UX Design at the School of Information.
              </p>

              <p
                className="body-regular light-black"
                style={{ marginBottom: "2.5rem" }}
              >
                Before starting my path in UX, I was a biotechnologist. However,
                I have always been passionate about designing. So, when I moved
                to the US, I decided to combine my scientist brain with my
                passion to start creating good experiences for people out there.{" "}
              </p>
              <p className="body-regular">
                <strong>
                  <a href={resume} target="_blank">
                    ↗️ Resume
                  </a>
                </strong>
              </p>
            </div>

            <img src={me} id="about-img" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
