import React, { useContext, useRef, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../ProjectFooter";
import arrow_down from "../images/keyboard_arrow_down.svg";

import {
  AnchorContext,
  AnchorLink,
  AnchorProvider,
} from "react-anchor-navigation";

const sectionsNames = ["Overview", "Details"];

export default function PassiveBolt() {
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
        <section id="keyshare-hero">
          <Navbar />
          <div className="project-details-container">
            <div className="column-container">
              <span className="passivebolt-grey">
                Passive<span className="passivebolt-teal">Bolt</span>
              </span>
              <h1 className="h2-bold-uppercase passivebolt-grey">
                Key<span className="keyshare-blue">Share</span>
              </h1>

              <h2 className="h4-light poppins dark-grey">
                Securing access with decentralized identity powered by
                cryptographic trust
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
                  <h3 className="body-semibold-uppercase margin-bottom-small">
                    Role
                  </h3>
                  <p className="body-regular">Project Manager</p>
                  <p className="body-regular">UX Design Lead</p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small">
                    Timeline
                  </h3>
                  <p className="body-regular">8 months</p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small">
                    Team
                  </h3>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    5 UX Designers
                  </p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small">
                    Tools
                  </h3>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    Figma
                  </p>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    Miro
                  </p>
                </div>
              </div>
              <div className="detail-container remove-bottom-margin">
                <h2 className="h3-semibold margin-bottom-small light-black">
                  Summary
                </h2>
                <p className="body-regular light-black margin-bottom-small">
                  <strong className="passivebolt-grey">Passive</strong>
                  <strong className="passivebolt-teal">Bolt</strong> focuses on
                  decentralized identity solutions for secure access to spaces,
                  primarily targeting the hospitality sector. Their primary
                  product,{" "}
                  <strong className="passivebolt-grey">
                    Key<span className="keyshare-blue">Share</span>
                  </strong>
                  , aims to provide automation so hotels can serve more guests
                  with fewer staff, as well as provide a seamless and fast guest
                  access experience.
                </p>
                <p className="body-regular light-black ">
                  Focused on uncovering user pain points and identifying
                  opportunities for improvement, I am leading UX design efforts
                  and managing the project. My responsibilities include ensuring
                  a streamlined discovery and redesign process, overseeing
                  timelines, managing stakeholder communication, and driving
                  overall execution. My current work involves conducting user
                  research, defining design strategies, creating wireframes and
                  prototypes, and collaborating closely with PassiveBolt’s team
                  to align business goals with user needs.
                </p>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-1">
            <div className="project-section ">
              <div className="detail-container remove-bottom-margin grey-background-strip padding-block">
                <h2 className="h3-semibold margin-bottom-small keyshare-blue align-center">
                  Details coming soon...
                </h2>
                <p className="h3-semibold margin-bottom-small align-center">
                  We are currently in the ideation phase 🎉👩🏻‍💻
                </p>
                <p className="align-center dark-grey">
                  Feel free to contact me if you want to learn more about this
                  project.
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
