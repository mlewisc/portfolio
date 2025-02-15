import Footer from "../Footer";
import Navbar from "../Navbar";
import React from "react";

import cook from "../images/cookge.png";
import koi from "../images/koinoike.png";
import koi_logo from "../images/koi_logo.png";
import posters from "../images/posters.png";

import koi_guide from "../documents/koinoike_style_guide.pdf";

export default function extra() {
  return (
    <>
      <main>
        <section style={{ height: "unset" }} className="inline-margin-large">
          <Navbar />
          <div className="moveIn">
            <h1 className="h1-semibold maia-light-pink padding-block ">
              Here are some additional<strong className="maia-pink"> UI</strong>{" "}
              and
              <strong className="maia-pink"> UX</strong> projects I've worked
              on, either for fun or as part of school assignments.
            </h1>
            <h2 className="h2-small grey" id="extra-subtitle">
              While working on these, I focused on refining my UI design and
              prototyping skills in Figma
            </h2>
          </div>
        </section>
        <section id="sec-1" className="moveIn">
          <div className="project-section">
            <div className=" padding-block">
              <div
                className="grid-2-container margin-bottom-large extra-container"
                style={{ alignItems: "center" }}
              >
                <img src={cook} style={{ maxWidth: "70%" }} />

                <div>
                  <h3 className="h3-semibold margin-bottom-small  maia-pink">
                    Cookge
                  </h3>
                  <p className="body-regular dark-grey margin-bottom-small">
                    A mobile app that helps users to cook with friends and
                    family who live separately.
                  </p>
                  <div className="flex">
                    <a
                      href="https://www.figma.com/proto/Wy1zPzbCwVUxtuT4P5PbVN/Cookge-App?node-id=370-2661&page-id=355%3A2611&scaling=contain&t=BamvwWEaOqVfKcI2-1&type=design&viewport=315%2C-3300%2C0.31"
                      target="_blank"
                    >
                      <button className="chip maia-light-pink">
                        case study
                      </button>
                    </a>
                    <a
                      href="https://www.figma.com/proto/Wy1zPzbCwVUxtuT4P5PbVN/Cookge-App?disable-default-keyboard-nav=1&hide-ui=1&node-id=272-9528&page-id=249%3A7434&scaling=scale-down&starting-point-node-id=370%3A2643&t=uXjWb8oUN3EIiGzm-8&type=design&viewport=674%2C194%2C0.39"
                      target="_blank"
                    >
                      <button className="chip maia-light-pink">
                        prototype
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="grid-2-container extra-container"
                style={{ alignItems: "center" }}
              >
                <img src={koi} style={{ maxWidth: "70%" }} />

                <div>
                  <h3 className="h3-semibold margin-bottom-small maia-pink">
                    Koinoike
                  </h3>
                  <p className="body-regular dark-grey margin-bottom-small">
                    A mobile app that helps users maintain care for their koi
                    fish and ponds.
                  </p>
                  <p className="very-small-regular italic grey margin-bottom-small">
                    This was an assignment for a Graphic Design class where I
                    was given low-fidelity wireframes and transformed them into
                    high-fidelity.
                  </p>

                  <a
                    href="https://www.figma.com/proto/WdpAZBUsgJckOJXOJff6PK/SI320---Graphic-Design?page-id=602%3A286&type=design&node-id=602-385&viewport=664%2C310%2C0.28&t=iaNfCnuF3bAI6SeM-8&scaling=scale-down&starting-point-node-id=602%3A287&hide-ui=1"
                    target="_blank"
                  >
                    <button className="chip maia-light-pink">prototype</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="sec-2" className="moveIn">
          <div className="project-section margin-bottom-large">
            <div className=" padding-block">
              <h2 className="h1-semibold margin-bottom-small grey">
                Graphic Design.
              </h2>
              <p className="body-regular light-black margin-bottom-large">
                These are some of the works I created for some of my previous
                design classes.{" "}
              </p>
              <div
                className="grid-2-container margin-bottom-large"
                style={{ alignItems: "center" }}
              >
                <div>
                  <h3 className="h3-semibold margin-bottom-small">Logos</h3>
                  <p className="body-regular light-black margin-bottom-small">
                    In addition to the logo design, I also created a style guide
                    for the Koinoike brand.
                  </p>
                  <div className="flex">
                    <a href={koi_guide} target="_blank">
                      <button className="chip">style guide</button>
                    </a>
                  </div>
                </div>
                <img src={koi_logo} style={{ width: "90%" }} />
              </div>
              <div
                className="grid-2-container margin-bottom-large"
                style={{ alignItems: "center" }}
              >
                <img src={posters} style={{ width: "90%" }} />

                <div>
                  <h3 className="h3-semibold margin-bottom-small">Posters</h3>
                  <p className="body-regular light-black margin-bottom-small">
                    A curated selection of posters designed to with different
                    purposes, some to inform, others to inspire and entertain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
