import Footer from "../Footer";
import Navbar from "../Navbar";
import React from "react";

// import arrow_down from "../images/keyboard_arrow_down.svg";
// import resume from "../documents/resume.pdf";
import me from "../images/me_about.png";
// import sticker from "../images/fun_sticker.svg";
// import funfacts from "../images/fun_facts.png";

export default function About() {
  // const [visible, setVisible] = React.useState();

  // function showHidden() {
  //   setVisible(!visible);
  // }
  return (
    <>
      <main>
        <section className="inline-margin-large" id="about-sec">
          <Navbar />
          <div className="padding-block">
            <div className="grid-2-container margin-bottom-small">
              <div id="me" className="moveIn">
                <h2 className="h1-semibold maia-light-pink">
                  Nice to meet you!
                </h2>
                <p className="h1-semibold maia-pink margin-bottom-small">
                  I'm Maiara.
                </p>
                <p
                  className="body-regular margin-bottom-small dark-grey moveIn"
                  id="about-text"
                >
                  I’m a{" "}
                  <strong className="maia-pink">
                    User Experience Designer
                  </strong>{" "}
                  graduating from the University of Michigan in April 2025.
                </p>

                <p
                  className="body-regular dark-grey moveIn"
                  style={{ marginBottom: "2.5rem" }}
                  id="about-text-1"
                >
                  I was born and raised in{" "}
                  <strong className="maia-pink">Rio de Janeiro, Brazil</strong>{" "}
                  so ask me about all the delicious Brazilian food you should
                  try - and then thank me later.
                </p>
              </div>
              <img
                src={me}
                id="about-img"
                alt="young girl surrounded by a tulip garden"
                className="moveIn"
              />
            </div>
            <div className="moveIn">
              <p
                className="body-regular dark-grey padding-inline moveIn"
                id="about-text-2"
              >
                Before starting my path in UX, I was a biotechnologist,
                combining
                <strong className="maia-pink"> precision</strong> and{" "}
                <strong className="maia-pink">problem-solving</strong> in the
                lab. However, my passion for designing has always been a part of
                me. When I moved to the US, I decided to merge my scientist
                brain with my creative side to start crafting meaningful,
                intuitive experiences for people. I have fun obsessing over
                pixel-perfect details and fine-tuning UI elements—but I also
                know when to shift gears and focus on speed and adaptability to
                meet the demands of fast-paced projects.
              </p>
            </div>
          </div>
          {/* <div className="fixed-center-bottom moveUpAndDown">
            <a href="#fun-facts" className="maia-light-pink">
              scroll down
            </a>
          </div> */}
          {/* {visible && (
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
          </div> */}
        </section>
        {/* <section id="sec-1">
          <div className="moveIn" id="fun-facts">
            <h1
              className="h3-semibold maia-light-pink padding-block inline-margin-large"
              id="about-title"
            >
              Fun facts.
            </h1>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
