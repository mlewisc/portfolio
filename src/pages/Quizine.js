import React, { useContext, useRef, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../ProjectFooter";
import arrow_down from "../images/keyboard_arrow_down.svg";

import process from "../images/quizine_process.png";
import pages from "../images/quizine_pages.jpg";
import reqs from "../images/quizine_req.jpg";
import sketch from "../images/quizine_sketch.jpg";
import figma from "../images/quizine_figma.png";
import visual from "../images/quizine_identity.png";
import phone from "../videos/quizine_phone.mov";
import laptop from "../videos/quizine_laptop.mov";

import {
  AnchorContext,
  AnchorLink,
  AnchorProvider,
} from "react-anchor-navigation";

const sectionsNames = [
  "Overview",
  "Creation Process",
  "Final Design",
  "Live App",
];

export default function Quizine() {
  const CustomSection = ({ children, ...attributes }) => {
    const { registerSection, unregisterSection } = useContext(AnchorContext);
    const ref = useRef(null);

    // Logic to register/unregister component
    // when added/removed from DOM
    useEffect(() => {
      if (ref.current) {
        registerSection(ref.current);

        // Initialization of the component.
        // If mounted from a SPA without server-side rendering the hash will not
        // scroll at all, so do it manually
        if (attributes.id === window.location.hash.substr(1)) {
          ref.current.scrollIntoView();
        }
      }

      return () => {
        if (ref.current) {
          unregisterSection(ref.current);
        }
      };
    }, []);

    return (
      <section {...attributes} ref={ref}>
        {children}
      </section>
    );
  };
  return (
    <>
      <main>
        <section id="quizine-hero">
          <Navbar />
          <div className="project-details-container">
            <div className="column-container">
              <h1 className="h2-bold-uppercase quizine-purple">
                Quizine Trivia
              </h1>
              <h2 className="h4-light poppins dark-grey">
                Serving your trivia on a platter
              </h2>
            </div>
          </div>
          <div className="fixed-center-bottom moveUpAndDown">
            <img src={arrow_down} alt="arrow pointing down" />
          </div>
        </section>

        <AnchorProvider offset={500}>
          <div className="project-nav">
            <ul>
              {sectionsNames.map((section, i) => {
                const sectionId = `#sec-${i}`;
                return (
                  // <li key={sectionId}>
                  <AnchorLink href={sectionId} activeClassName="active">
                    <li key={sectionId}>{section}</li>
                  </AnchorLink>
                  // </li>
                );
              })}
            </ul>
          </div>

          <CustomSection id="sec-0">
            <div className="project-section">
              <div className="four-column-container">
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small quizine-purple">
                    Role
                  </h3>
                  <p
                    className="body-regular"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    UX Designer
                  </p>
                  <p className="body-regular">Web Developer </p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small quizine-purple">
                    Timeline
                  </h3>
                  <p className="body-regular">3 weeks</p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small quizine-purple">
                    Team
                  </h3>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    Solo
                  </p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small quizine-purple">
                    Tools
                  </h3>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    Figma
                  </p>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    React
                  </p>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    Firebase
                  </p>
                </div>
              </div>
              <div className="detail-container remove-bottom-margin">
                <h2 className="h3-semibold margin-bottom-small light-black">
                  Summary
                </h2>
                <p className="body-regular light-black margin-bottom-small">
                  This application is my final project for one of my coding
                  classes where the goal was to learn how to build interactive
                  and accessible web applications.
                </p>
                <p className="body-regular light-black margin-bottom-large">
                  During my time developing this application I posed as both{" "}
                  <strong className="quizine-purple">UX Designer</strong> and{" "}
                  <strong className="quizine-purple">Web Developer</strong> in
                  order to create a useful, usable, equitable, and enjoyable
                  final product.
                </p>
                <div className="detail-container remove-bottom-margin grey-background-strip padding-block">
                  <h2 className="h3-semibold margin-bottom-small light-black">
                    What is{" "}
                    <span className="quizine-purple">Quizine Trivia</span>?
                  </h2>
                  <p className="h4-light light-black ">
                    Quizine Trivia was envisioned and designed to be a
                    responsive trivia website that allows users to personalize
                    their experience.
                  </p>
                </div>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-1">
            <div className="project-section ">
              <h2 className="h3-semibold light-black">
                Design & Developement Process
              </h2>
              <img
                className="padding-block"
                src={process}
                style={{ width: "100%" }}
              />
              <p className="body-regular light-black margin-bottom-small">
                During the creation process I focused on defining functionality
                requirements that would give users control over their game.{" "}
              </p>
              <div className="grid-2-container margin-bottom-large">
                <img src={reqs} style={{ width: "70%" }} />
                <img src={pages} style={{ width: "100%" }} />
              </div>

              <p className="body-regular light-black margin-bottom-small">
                After understanding the class criteria for the project to be
                accepted, I brainstormed and defined Quizine Trivia’s{" "}
                <strong className="quizine-purple">main features</strong>
              </p>
              <ol className="body-regula margin-bottom-large">
                <li>
                  Selection of the trivia{" "}
                  <strong className="quizine-purple">
                    topic, number of questions, and the timer length.
                  </strong>
                </li>
                <li>
                  Prompt to add{" "}
                  <strong className="quizine-purple">player name</strong> and
                  select <strong className="quizine-purple">avatar</strong>.
                </li>
                <li>
                  Up to date{" "}
                  <strong className="quizine-purple">
                    leaderboard with the top 10
                  </strong>{" "}
                  best results
                </li>
              </ol>

              <h3 className="h3-semibold grey margin-bottom-small">
                Design Concept
              </h3>
              <p className="body-regular light-black">
                While sketching and wireframing to build a product with a
                recognizable visual identity, I made careful decisions with
                accessibility in mind.
              </p>
              <div className="grid-2-container padding-block">
                <img src={sketch} style={{ width: "100%" }} />
                <img src={figma} style={{ width: "100%" }} />
              </div>
              <div className="align-center">
                <img src={visual} style={{ width: "70%" }} />
              </div>

              <div className="grey-background-strip">
                <h3 className="h3-semibold grey margin-bottom-small">
                  Development
                </h3>
                <p className="body-regular light-black margin-bottom-small">
                  During the development process, I used{" "}
                  <strong className="italic quizine-purple">React</strong> to
                  create a fully interactive and responsive web application.
                  Using <strong>Google’s Firebase</strong>, I was able to store
                  each game data and retrieve the most recent information to
                  create an updated leaderboard with the top 10 best scores.
                </p>
                <p className="body-regular light-black">
                  In terms of accessibility, I focused on following best
                  practices, for example the correct use of semantic tags, to
                  ensure a smooth experiences for users using screen readers.
                  Additionally, I also ran automated and manual accessibility
                  tests on visual elements (color contrast, font size, etc) and
                  certified all actionable items on the website could be
                  accessed through keyboard navigation.{" "}
                </p>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-2">
            <div className="project-section ">
              <div>
                <h2 className="h3-semibold margin-bottom-small quizine-purple align-center">
                  Final Design
                </h2>
                <div className="flex-center padding-block">
                  <video src={phone} autoPlay muted id="phone" />
                  <video src={laptop} autoPlay muted id="laptop" />
                </div>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-3">
            <div className="project-section ">
              <div className="margin-bottom-large grey-background-strip">
                <h2 className="h3-semibold margin-bottom-small grey ">
                  Live Application
                </h2>
                <p className="body-regular light-black margin-bottom-small">
                  Both the live website and source code are available for
                  viewing
                </p>
                <p
                  className="body-regular light-black"
                  style={{ marginBottom: ".5rem" }}
                >
                  <a
                    href="https://mlewisc.github.io/final-project/build/index.html"
                    target="_blank"
                  >
                    {" "}
                    <strong className="quizine-purple">
                      ↗️ Access the live website and play some trivia
                    </strong>
                  </a>
                </p>
                <p className="body-regular light-black">
                  <a
                    href="https://github.com/mlewisc/final-project.git"
                    target="_blank"
                  >
                    {" "}
                    <strong className="quizine-purple">
                      ↗️ Access the source code on Github
                    </strong>
                  </a>
                </p>
              </div>
            </div>
          </CustomSection>
          <Footer />
        </AnchorProvider>
      </main>
    </>
  );
}
