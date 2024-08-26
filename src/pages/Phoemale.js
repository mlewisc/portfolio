import React, { useContext, useRef, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../ProjectFooter";
import arrow_down from "../images/keyboard_arrow_down.svg";
import empathymap from "../images/empathymaps_phoemale.png";
import oldform from "../images/nominationform_analysis.png";
import flow from "../images/userflow.png";
import sitemap from "../images/sitemap.png";
import lowfi from "../images/lowfi_phoemale.png";
import getinvolved from "../images/getinvolved.png";
import nomiform from "../images/nomiform.png";
import nomipage from "../images/nomipage.png";
import prototype1 from "../images/phoemale_flow.gif";
import prototype2 from "../images/nomiform.gif";

import {
  AnchorContext,
  AnchorLink,
  AnchorProvider,
} from "react-anchor-navigation";

const sectionsNames = [
  "Overview",
  "Research",
  "Design Process",
  "Final Design",
  "Takeaways",
];

export default function Slalom() {
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
        <section id="phoemale-hero">
          <Navbar />
          <div className="project-details-container">
            <div className="column-container">
              <h1 className="h2-bold-uppercase phoemale-pink">Phoemale</h1>
              <h2 className="h4-light poppins dark-grey">
                Helping women survivors of trauma to rise from the ashes as
                Phoenixes
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
                  <h3 className="body-semibold-uppercase margin-bottom-small phoemale-pink">
                    Role
                  </h3>
                  <p className="body-regular">UX Design Intern I</p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small phoemale-pink">
                    Timeline
                  </h3>
                  <p className="body-regular">8 weeks</p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small phoemale-pink">
                    Team
                  </h3>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    1 Scrum Master
                  </p>

                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    2 UX Designers
                  </p>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    2 Developers
                  </p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small phoemale-pink">
                    Tools
                  </h3>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    Figma
                  </p>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    Miro
                  </p>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    Trello
                  </p>
                </div>
              </div>
              <div className="detail-container remove-bottom-margin">
                <h2 className="h3-semibold margin-bottom-small light-black">
                  Summary
                </h2>
                <p className="body-regular light-black margin-bottom-small">
                  Phoemale is a non-profit created by women to help women. By
                  partnering with local shelters and other non-profits, Phoemale
                  aims to support women survivors of Domestic Violence, Human
                  Trafficking, Sexual Assault, and Homelessness.
                </p>
                <p className="body-regular light-black margin-bottom-large">
                  During my time @ <span className="slalom-blue">Slalom</span>{" "}
                  as a{" "}
                  <strong className="phoemale-pink">UX Design Intern</strong>, I
                  was able to work with Phoemale to redesign their website and
                  pilot the design of a new feature, a nomination application
                  form, that would improve their nomination process.
                </p>
              </div>
              <div className="detail-container remove-bottom-margin grey-background-strip padding-block">
                <h2 className="h3-semibold margin-bottom-small light-black align-center">
                  What were the goals?
                </h2>
                <ul className="body-regular align-center light-black margin-bottom-small ">
                  <li style={{ listStyleType: "none" }}>
                    <span className="phoemale-pink">Redesign</span> the
                    structure and overall aesthetics of the website
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    <span className="phoemale-pink">Design</span> a
                    visual/digital encyclopedia that represents Phoemale
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    <span className="phoemale-pink">
                      Implement a digital nomination
                    </span>{" "}
                    form and a seamless and efficient nomination process
                  </li>
                </ul>
                <p className="body-regular dark-grey align-center light">
                  When working in consulting, clients will usually have their
                  goals and priorities shared right in the beginning. It is the
                  consultant’s job to understand those goals, and as a UX
                  designer, be able to advocate for the users while still
                  meeting the client’s needs.
                </p>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-1">
            <div className="project-section ">
              <div className="detail-container remove-bottom-margin ">
                <h2 className="h3-semibold margin-bottom-small light-black ">
                  Discovery Phase
                </h2>
                <p className="body-regular light-black margin-bottom-large">
                  During the discovery/research phase of this project, we used
                  various tools common in the UX field in order to familiarize
                  ourselves with the niche of nonprofit organizations and dive
                  in to uncover the needs of both the client and their users.
                </p>
                <div className="grid-2-container">
                  <div>
                    <p className="body-regular light-black">
                      Starting with a competitive analysis and stakeholder
                      interviews (that led to empathy maps and a thematic
                      analysis), we were able to gain some{" "}
                      <strong className="phoemale-pink">
                        important insights
                      </strong>
                      .
                    </p>
                    <ol className="body-regular light-black">
                      <li>
                        Phoemale’s website would have, at minimum, three
                        different groups of users: supporters of the
                        organization (donors, volunteers, etc), the survivors
                        themselves, and social workers and family/friends of
                        women in need of help.
                      </li>
                      <li>
                        The current nomination form was limiting those familiar
                        with the process from submitting additional nominations.
                      </li>
                      <li>
                        There was a lot of unclarity about how the Phoemale can
                        and is willing to help survivors, as well as how the
                        public can get involved.
                      </li>
                    </ol>
                  </div>
                  <img src={empathymap} style={{ width: "100%" }} />
                </div>
              </div>

              <div className="detail-container grey-background-strip">
                <h3 className="h3-semibold margin-bottom-small grey margin-bottom-small">
                  What did I do?
                </h3>
                <p className="body-regular light-black margin-bottom-small">
                  While taking ownership of all the processes related to the
                  nomination form, I kept in mind one of our main
                  recommendations/goals:
                </p>
                <p className="body-regular italic margin-bottom-small">
                  {" "}
                  <strong>
                    "increase the efficiency of the nomination process."{" "}
                  </strong>
                </p>
                <p className="body-regular light-black margin-bottom-large">
                  To do that, I conducted a deep, personalized analysis of the
                  original/old nomination form.
                </p>

                <div className="grid-2-container margin-bottom-small">
                  <div>
                    <p className="h4-light dark-grey margin-bottom-small">
                      <strong>
                        WAIT… but what was the goal of this analysis?
                      </strong>
                    </p>
                    <p className="body-regular light-black">
                      To redesign and implement the nomination form, I felt the
                      need to understand all the intricacies of the original
                      form, as well as the meaning and goal of each question, to
                      make sure I could optimize the form and still collect all
                      the information Phoemale needs from the user/nominee.
                    </p>
                  </div>
                  <img src={oldform} style={{ width: "100%" }} />
                </div>

                <p className="body-regular light-black padding-block">
                  After having a clearer understanding of what the nomination
                  form was, in essence, and what were some of its crucial
                  elements, I worked on creating an ideal user flow for the new
                  digital nomination form. As well as a flow with different
                  paths the user could take to find the nomination form on the
                  redesigned website since receiving more nominations was one of
                  the main goals of the organization.
                </p>
                <img src={flow} style={{ width: "100%" }} />
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-2">
            <div className="project-section ">
              <div className="margin-bottom-large">
                <h2 className="h3-semibold margin-bottom-small">
                  Design Phase
                </h2>
                <div className="grid-2-container margin-bottom-large">
                  <div>
                    <p className="body-regular light-black margin-bottom-small">
                      Since there are several parts to the website, we decided
                      to break tasks into sections based on the sitemap
                      information we developed.
                    </p>
                    <p className="body-regular dark-grey">
                      I was in charge of the <strong>"Get Involved"</strong>{" "}
                      Page, <strong>all pages directly attached to it</strong>,
                      and the <strong>nomination form</strong>.
                    </p>
                  </div>
                  <img src={sitemap} style={{ width: "100%" }} />
                </div>

                <h3 className="h3-semibold grey margin-bottom-small">
                  Wireframes
                </h3>
                <div className="grid-2-container">
                  <div>
                    <p className="body-regular light-black margin-bottom-small">
                      One of the insights that guided me through the ideation
                      and wireframing process was:{" "}
                      <strong className="italic">
                        “There was a lot of unclarity about how the Phoemale can
                        and is willing to help survivors, as well as how the
                        public can get involved.”
                      </strong>
                    </p>
                    <p className="body-regular light-black margin-bottom-small">
                      I wanted to create a design that would address this issue
                      by giving the users all the information they need.
                    </p>
                    <p className="body-regular light-black margin-bottom-small">
                      By creating a Get Involved page, I was able to showcase to
                      users all the ways they can get involved with the
                      organization and help women in need(Volunteer, Nominate,
                      and Donate).
                    </p>
                    <p className="body-regular light-black">
                      By structuring the information on each of those subsequent
                      pages, users could gain a more in-depth understanding of
                      how each of those processes works and their impact.
                    </p>
                  </div>
                  <img
                    src={lowfi}
                    style={{
                      width: "100%",
                      marginRight: "-2.5rem",
                      marginTop: "4rem",
                    }}
                  />
                </div>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-3">
            <div className="project-section">
              <div className="padding-block grey-background-strip strip-darker-grey">
                <h2 className="h3-semibold margin-bottom-large">
                  Final Design
                </h2>
                <div className="three-column-container">
                  <div className="flex-center-container">
                    <img
                      className="margin-bottom-small"
                      src={getinvolved}
                      style={{ width: "100%" }}
                    />
                    <p className="body-reguler light">Get Involved Page</p>
                  </div>
                  <div className="flex-center-container">
                    <img
                      className="margin-bottom-small"
                      src={nomipage}
                      style={{ width: "100%" }}
                    />
                    <p className="body-reguler light">Nomination Page</p>
                  </div>
                  <div className="flex-center-container">
                    <img
                      className="margin-bottom-small"
                      src={nomiform}
                      style={{ width: "100%" }}
                    />
                    <p className="body-reguler light">
                      Nomination Form (1st Screen)
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="grid-2-container padding-block"
                style={{ alignItems: "center" }}
              >
                <img src={prototype1} style={{ width: "100%" }} />
                <div>
                  <h3>Get Involved</h3>
                  <p className="body-regular light-black margin-bottom-small">
                    A clean, simple, and direct page that showcases to the users
                    how they can get involved with the organization and directs
                    them to one of three pages:
                    <span className="italic">
                      {" "}
                      nomination, donation, or volunteer.
                    </span>{" "}
                  </p>
                  <h3>Nomination Page</h3>
                  <p className="body-regular light-black">
                    This page was a new addition to the redesigned website and
                    was created to familiarize the user with the nomination
                    process. Before the beginning of this project, the
                    nomination process was not integrated into their website, so
                    its implementation required a page that would introduce the
                    concept and the process to users, as well as some guidelines
                    on how to fill out the nomination form.
                  </p>
                </div>
              </div>

              <div
                className="grid-2-container padding-block"
                style={{ alignItems: "center" }}
              >
                <img src={prototype2} style={{ width: "100%" }} />
                <div>
                  <h3>Nomination Form</h3>
                  <p className="body-regular light-black">
                    A multi-step form that actively informs the user how far
                    into the process they are, why Phoemale is requesting
                    certain information, and what is expected from each answer.
                  </p>
                </div>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-4">
            <div className="project-section">
              <div className="grey-background-strip padding-block">
                <h2 className="h3-semibold phoemale-pink align-center ">
                  Key Takeaways
                </h2>
                <p className="h4-light light-black align-center margin-bottom-small">
                  Have questions, concerns, or valuable comments? Bring them up!
                  🙋🏻‍♀️
                </p>
                <p className="body-regular  light-black align-center">
                  There’s nothing wrong with asking questions that might seem
                  obvious; sometimes, everybody is wondering the same. It is
                  important to keep asking questions and communicate thoroughly
                  with clients and teammates to make sure we’re all moving in
                  the right direction.{" "}
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
