import React, { useContext, useRef, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../ProjectFooter";
import arrow_down from "../images/keyboard_arrow_down.svg";

import {
  AnchorContext,
  AnchorLink,
  AnchorProvider,
} from "react-anchor-navigation";

const sectionsNames = ["Overview", "Details", "Takeaways"];

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
        <section id="slalom-hero">
          <Navbar />
          <div className="project-details-container">
            <div className="column-container">
              <h1 className="h2-bold-uppercase slalom-blue">Slalom</h1>
              <h2 className="h4-light poppins dark-grey">
                Building better tomorrows for all
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
                  <p className="body-regular">UX Design Intern II</p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small">
                    Timeline
                  </h3>
                  <p className="body-regular">10 weeks</p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small">
                    Team
                  </h3>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    1 Product Owner
                  </p>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    1 Solution Owner
                  </p>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    5 UX Designers
                  </p>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    10+ Developers
                  </p>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    2 QA Developers
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
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    Jira
                  </p>
                  <p className="body-regular" style={{ marginBottom: ".5rem" }}>
                    Angular Material
                  </p>
                </div>
              </div>
              <div className="detail-container remove-bottom-margin">
                <h2 className="h3-semibold margin-bottom-small light-black">
                  Summary
                </h2>
                <p className="body-regular light-black margin-bottom-small">
                  Slalom is a purpose-led, global business and technology
                  consulting company.{" "}
                </p>
                <p className="body-regular light-black margin-bottom-large">
                  During my time there as a{" "}
                  <strong className="slalom-blue">UX Design Intern</strong> , I
                  was able to work for a big automotive client on a highly
                  ambiguous and fast-paced project where I piloted a design
                  audit, made design improvements based on user feedback, and
                  designed a new feature to improve the overall software being
                  developed.
                </p>
                <p className="body-regular light-black italic margin-bottom-small">
                  <strong>
                    🚨 Project details or the client’s name cannot be disclosed
                    publicly! 🚨
                  </strong>
                </p>
                <p className="body-regular light italic dark-grey">
                  Please contact me for more details.{" "}
                </p>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-1">
            <div className="project-section ">
              <div className="detail-container remove-bottom-margin grey-background-strip padding-block">
                <h2 className="h3-semibold margin-bottom-small light-black align-center">
                  What did I do?
                </h2>
                <div className="grid-2-container">
                  <div>
                    <p className="h4-light margin-bottom-small">
                      UX Research 🔎
                    </p>
                    <p className="body-regular light-black">
                      Created a research plan and engaged in 5+ user feedback
                      sessions with users and stakeholders.{" "}
                    </p>
                    <ul className=" body-regular light-black">
                      <li>
                        Found opportunities to improve the existing designs
                      </li>
                      <li>
                        Found opportunities to generate new designs and
                        solutions
                      </li>
                      <li>Determined the user’s potential mental models</li>
                    </ul>
                  </div>
                  <div>
                    <p className="h4-light margin-bottom-small">
                      UX Design 👩🏻‍💻🖌️
                    </p>
                    <p className="body-regular light-black">
                      Designed an approach, structure, and template for a{" "}
                      <strong>design audit</strong> ; designed two{" "}
                      <strong>solutions</strong> for existing features based on
                      user feedback; and designed flows, information structure,
                      high-fidelity wireframes, and prototypes for a
                      <strong> new feature</strong>.{" "}
                    </p>
                    <ul className="body-regular light-black">
                      <li>
                        Constantly engaged with developers, product and solution
                        owners, and other designers.
                      </li>
                      <li>
                        Validated all the work with research and got it approved
                        by the client on a weekly basis
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-2">
            <div className="project-section ">
              <div className="margin-bottom-large">
                <h2 className="h3-semibold margin-bottom-small slalom-blue align-center">
                  Key Takeaways
                </h2>
                <div className="grid-2-container">
                  <div>
                    <p className="h4-light margin-bottom-small">
                      Designing effectively is riding the waves of change 🌊
                    </p>
                    <p className="body-regular dark-grey light">
                      I learned to adapt and be flexible in the face of
                      unforeseen challenges and changes. This skill allowed me
                      to adjust solutions and design approaches to evolving
                      project requirements and scalability considerations.
                    </p>
                  </div>
                  <div>
                    <p className="h4-light margin-bottom-small">
                      Remember the end goal and how your work will make an
                      impact 🎯
                    </p>
                    <p className="body-regular light dark-grey">
                      Complex projects can be overwhelming and demanding at
                      times. However, this experience taught me the importance
                      of resilience and perseverance. By focusing on the end
                      goal and the impact my work would generate, I overcame
                      obstacles and successfully delivered outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CustomSection>

          <Footer />
        </AnchorProvider>
      </main>
    </>
  );
}
