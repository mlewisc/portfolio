import React, { useContext, useRef, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../ProjectFooter";
import arrow_down from "../images/keyboard_arrow_down.svg";

import problem from "../images/problem.svg";
import goal from "../images/goal.svg";
import vision from "../images/vision.svg";
import price from "../images/price.svg";
import time from "../images/time.svg";
import convinience from "../images/convi.svg";
import lowfi from "../images/cineats_lowfi.png";
import sketch from "../images/sketch_cineats.png";
import wireframe1 from "../images/cineats_wire1.png";
import wireframe2 from "../images/cineats_wire2.png";
import use1 from "../images/use1.png";
import use2 from "../images/uni2.png";
import prototype from "../videos/cineats_prototype.mov";

import {
  AnchorContext,
  AnchorLink,
  AnchorProvider,
} from "react-anchor-navigation";

const sectionsNames = [
  "Overview",
  "Research",
  "Design",
  "Usability Test",
  "Final Design",
  "Takeaways",
];

export default function Cineats() {
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
        <section id="cineats-hero">
          <Navbar />
          <div className="project-details-container">
            <div className="column-container">
              <h1 className="h2-bold-uppercase cineats-red">Cineats</h1>
              <h2 className="h4-light poppins dark-grey">
                Building a better movie theater app
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
                  <h3 className="body-semibold-uppercase margin-bottom-small cineats-red">
                    Role
                  </h3>
                  <p className="body-regular">UX/UI Design</p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small cineats-red">
                    Timeline
                  </h3>
                  <p className="body-regular">2 months</p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small cineats-red">
                    Team
                  </h3>
                  <p className="body-regular">Solo</p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small cineats-red">
                    Tools
                  </h3>
                  <p className="body-regular">Figma</p>
                </div>
              </div>
              <div className="detail-container remove-bottom-margin">
                <h2 className="h3-semibold margin-bottom-small light-black">
                  Summary
                </h2>
                <p className="body-regular light-black margin-bottom-small">
                  The Google UX Design Certificate is a career certificate
                  offered by Google through Coursera that aims to teach the
                  foundations of UX design. And so, during the summer of 2021, I
                  was able to learn and experience what is like to be a{" "}
                  <strong>UX Designer</strong> for the first time through my
                  first course project.
                </p>
                <p className="body-regular light-black ">
                  Starting from a generic prompt, I worked solo on this project
                  to design a movie theater mobile app, focusing on snack
                  ordering, from the ground up based on my research findings.
                </p>
              </div>
              <div className="detail-container remove-bottom-margin grey-background-strip padding-block">
                <h2 className="h3-semibold margin-bottom-small light-black align-center">
                  How did the project start?
                </h2>
                <p className="body-regular light-black align-center light margin-bottom-small">
                  This project started with a simple prompt:
                  <strong className="italic cineats-red">
                    {" "}
                    “Design a movie theater, snack-ordering app.”
                  </strong>
                </p>
                <p className="body-regular light light-black align-center">
                  By using UX research methods, I was able to outline the
                  product’s vision, define the problem, and determine the goal
                </p>

                <div className="padding-block">
                  <div className="two-flex">
                    <img src={problem} style={{ width: "20%" }} />
                    <div>
                      <p className="body-semibold-uppercase margin-bottom-small dark-grey">
                        Problem
                      </p>
                      <p className="body-regular light-black">
                        Moviegoers struggle with waiting in line for snack
                        orders, which often leads to missing the beginning of
                        the movie, leaving mid-session for more snacks, and
                        consequently missing more of the film.
                      </p>
                    </div>
                  </div>
                  <div className="two-flex">
                    <img src={goal} style={{ width: "20%" }} />
                    <div>
                      <p className="body-semibold-uppercase margin-bottom-small dark-grey">
                        Goal
                      </p>
                      <p className="body-regular light-black">
                        Design an app that allows users to order snacks in
                        advance, so waiting in line before the movie starts
                        isn’t necessary, and provide a way for the user to get
                        more snacks during the movie without missing parts of
                        it.
                      </p>
                    </div>
                  </div>
                  <div className="two-flex" style={{ paddingBottom: "0" }}>
                    <img src={vision} style={{ width: "20%" }} />
                    <div>
                      <p className="body-semibold-uppercase margin-bottom-small dark-grey">
                        Vision
                      </p>
                      <p className="body-regular light-black">
                        Believing the experience of going to the movies isn't
                        complete without snacks, the Cineats App was created to
                        offer an easy and convenient way for users to order
                        snacks before and during the film, and while purchasing
                        tickets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-1">
            <div className="project-section ">
              <div className="detail-container remove-bottom-margin ">
                <h2 className="h3-semibold margin-bottom-small light-black ">
                  Research Phase
                </h2>
                <p className="body-regular light-black margin-bottom-small">
                  To kick off this phase, I conducted a competitive analysis to
                  understand the competitor’s strengths and weaknesses and four
                  user interviews to identify the users and understand their
                  pain points.
                </p>
                <p className="body-regular light-black margin-bottom-small">
                  I identified two <strong>user groups</strong>: Families with
                  kids who have to order snacks when they go to the movie
                  theater and groups of young adults who enjoy going to the
                  movies quite often.
                </p>
                <p className="body-regular light-black margin-bottom-large">
                  Both user groups confirmed assumptions regarding the wait time
                  at the concession stand and missing important parts of the
                  movie. My research also revealed that, although most
                  moviegoers would enjoy snacks during the movie, not everybody
                  ends up purchasing because of the high prices offered.
                </p>
                <h3 className="h3-semibold margin-bottom-small grey margin-bottom-small">
                  Major Pain Points
                </h3>
                <div className="three-column-container detail-container">
                  <div className="flex-center-container">
                    <img src={time} className="margin-bottom-small" />
                    <p className="body-semibold-uppercase small-font cineats-red margin-bottom-small">
                      Time
                    </p>
                    <p className="small-font light italic dark-grey">
                      People usually don’t have a lot of time from when they
                      arrive at the movie theater to when the movie starts to
                      wait in line to order snacks.
                    </p>
                  </div>
                  <div className="flex-center-container">
                    <img src={convinience} className="margin-bottom-small" />
                    <p className="body-semibold-uppercase  small-font cineats-red margin-bottom-small">
                      Convenience
                    </p>
                    <p className="small-font light italic dark-grey">
                      It is inconvenient to miss part of the movie when leaving
                      the auditorium to get snacks.
                    </p>
                  </div>
                  <div className="flex-center-container">
                    <img src={price} className="margin-bottom-small" />
                    <p className="body-semibold-uppercase small-font cineats-red margin-bottom-small">
                      Price
                    </p>
                    <p className="small-font light italic dark-grey">
                      The price of snacks offered in the movie theater
                      discourages users from eating during the movie.
                    </p>
                  </div>
                </div>
              </div>

              <div className="detail-container grey-background-strip padding-block">
                <h3 className="h3-semibold margin-bottom-small grey margin-bottom-small">
                  Persona Statements
                </h3>
                <p className="h4-light light-black margin-bottom-small italic">
                  <strong className="cineats-red">“</strong> Kathleen is a
                  mother of 4 who needs a better way to order movie snacks in
                  the movie theater because she can’t enjoy the movie when she
                  leaves mid-session to grab more snacks.
                </p>
                <p className="h4-light light-black margin-bottom-small italic">
                  <strong className="cineats-red">“</strong> Carlo is a movie
                  enthusiast who shares a movie review website with his partner,
                  who needs a way to order more snacks during the movie because
                  he can't miss parts of it to write reviews.
                </p>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-2">
            <div className="project-section ">
              <div className="margin-bottom-large">
                <h2 className="h3-semibold margin-bottom-small">
                  Design Phase
                </h2>
                <div className="grid-2-container padding-block">
                  <div>
                    <h3>Sketches</h3>

                    <p className="body-regular light-black margin-bottom-small">
                      Iterating each page of the app on paper helped ensure that
                      the elements that moved to digital wireframes focused on
                      addressing user pain points.
                    </p>
                    <img src={sketch} style={{ width: "100%" }} />
                  </div>
                  <div>
                    <h3>Wireframes</h3>

                    <p className="body-regular light-black margin-bottom-small">
                      I made sure the low-fidelity wireframes had a clear enough
                      structure so that I could create a low-fi prototype where
                      users could test the primary flow.
                    </p>
                    <img src={lowfi} style={{ width: "100%" }} />
                  </div>
                </div>

                <p className="h4-light light-black margin-bottom-small align-center">
                  Considering the user pain points,{" "}
                  <strong className="italic">
                    inconvenience, price, and time
                  </strong>
                  , I incorporated potential solutions into my initial low-fi
                  wireframes.
                </p>
                <div className="grid-2-container padding-block">
                  <img src={wireframe1} style={{ width: "100%" }} />
                  <img src={wireframe2} style={{ width: "80%" }} />
                </div>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-3">
            <div className="project-section">
              <div className="padding-block grey-background-strip strip-darker-grey">
                <h2 className="h3-semibold margin-bottom-small">
                  Usability Tests
                </h2>
                <p className="body-regular light-black">
                  I conducted two rounds of usability studies during the
                  project. The first study resulted in findings that helped to
                  adjust wireframes before transitioning to mockups. The second
                  study, conducted with a high-fidelity prototype, clarified
                  what aspects of the mockups needed refining.
                </p>
              </div>

              <div className="padding-block">
                <h3 className="cineats-red align-center">Round 1 Findings</h3>
                <p className="body-regular light-black align-center">
                  <strong>1) </strong>Users want a way to save their favorites
                  in the food section.
                </p>
                <p className="body-regular light-black align-center">
                  <strong>2) </strong>Users want to finish the order process
                  fast
                </p>
                <p className="body-regular light-black align-center">
                  <strong>3) </strong>Users need labeled icons to know what they
                  are clicking
                </p>
                <div className="align-center padding-block">
                  <img
                    src={use1}
                    style={{ width: "95%", marginRight: "-5rem" }}
                  />
                </div>
              </div>

              <div className="margin-bottom-large grey-background-strip">
                <h3 className="cineats-red align-center">Round 2 Findings</h3>
                <p className="body-regular light-black align-center">
                  <strong>1) </strong>Users want “Rewards” info to be more
                  visible throughout the app.
                </p>
                <p className="body-regular light-black align-center">
                  <strong>2) </strong>Users struggled with button labels and
                  font size. fast
                </p>
                <p className="body-regular light-black align-center">
                  <strong>3) </strong>Users want more control over when their
                  pickup order.
                </p>
                <p className="body-regular light-black align-center padding-block italic light">
                  Given finding #3, that users wish to have more control over
                  when their pickup order starts to be prepared, I{" "}
                  <strong>removed</strong> the option “Select time for pickup”
                  and <strong>added</strong> the “Start Order” button so users
                  could start the order when they please.
                </p>
                <div className="align-center ">
                  <img
                    src={use2}
                    style={{ width: "95%", marginRight: "-3.5rem" }}
                  />
                </div>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-4">
            <div className="project-section">
              <h2 className="h3-semibold light-black margin-bottom-small">
                Final Design
              </h2>
              <p className="body-regular">
                The high-fidelity prototype presented clearer user flows for
                ordering snacks (during or before the movie) and navigating
                through the app. It allowed users to experiment with all
                possibilities, from ordering snacks and buying movie tickets to
                redeeming coupons and creating an account.
              </p>
              <div className="align-center padding-block">
                <video
                  src={prototype}
                  autoPlay
                  muted
                  style={{ width: "35%" }}
                />
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-5">
            <div className="project-section">
              <div className="grey-background-strip padding-block">
                <h2 className="h3-semibold cineats-red align-center ">
                  Key Takeaways
                </h2>
                <p className="h4-light align-center margin-bottom-small">
                  Users will always guide the way to a good design 🚶🏻‍♀️
                </p>
                <p className="body-regular  dark-grey align-center">
                  I learned how important it is to collect feedback from users.
                  The first ideas for the app are only the beginning of the
                  process and, with user input, will be transformed into its
                  best version to deliver the best experience.
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
