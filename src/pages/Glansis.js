import React, { useContext, useRef, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../ProjectFooter";
import arrow_down from "../images/keyboard_arrow_down.svg";
import cover from "../images/Cover.png";
import hierarchy from "../images/hierarchy_icon.svg";
import counterintuitive from "../images/counterintuitive_icon.svg";
import info from "../images/info_overload_icon.svg";
import sketches from "../images/glansis_sketches.png";
import wireframe1 from "../images/glansis_wireframes-1.png";
import wireframe2 from "../images/glansis_wireframes-2.png";
import example1 from "../images/glansis_example1.png";
import example2 from "../images/glansis_example2.png";
import example3 from "../images/glansis_example3.png";
import video1 from "../videos/glansis_homepage.mov";
import video2 from "../videos/glansis_generator.mov";
import video3 from "../videos/glansis_list.mov";
import usability from "../images/Usability_Test.png";
import styleguide from "../images/style_guide.png";
import me1 from "../images/me_1.png";
import me2 from "../images/me_2.png";

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
  "More",
];

export default function Glansis() {
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
        <section id="glansis-hero">
          <Navbar />
          <div className="project-details-container">
            <div className="column-container">
              <span className="h2-bold-uppercase glansis-light-blue">
                Gl<span className="glansis-blue">ans</span>is
              </span>
              <h2 className="h4-light poppins dark-grey">
                Preserving and protecting the Great Lakes ecosystem against
                invasive species
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
                  <p className="body-regular">UX/UI Designer</p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small">
                    Timeline
                  </h3>
                  <p className="body-regular">4 weeks</p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small">
                    Team
                  </h3>
                  <p className="body-regular">Solo</p>
                </div>
                <div>
                  <h3 className="body-semibold-uppercase margin-bottom-small">
                    Tools
                  </h3>
                  <p className="body-regular">Figma</p>
                </div>
              </div>
              <div className="detail-container">
                <h2 className="h3-semibold margin-bottom-small light-black">
                  Summary
                </h2>
                <p className="body-regular light-black">
                  During the Fall 2023 semester, UMSI, the University of
                  Michigan School of Information, implemented a water-themed
                  semester. Because of that, my Intro to UX class had the
                  opportunity to partner with GLANSIS, a NOAA interagency, to
                  redesign their website. GLANSIS is the Great Lakes Aquatic
                  Nonindigenous Species Information System, a database with
                  information about aquatic nonindigenous species specific to
                  the Great Lakes. During the semester, I was able to work{" "}
                  <strong>solo</strong> to redesign parts of the GLANSIS
                  website, receiving recognition as
                  <strong> one of the top 5 best designs</strong> in a class of
                  over 100 talented students.
                </p>
              </div>
              <div
                className="img-strip"
                style={{
                  backgroundImage: `url(${cover})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="detail-container remove-bottom-margin">
                <h2 className="h3-semibold align-center margin-bottom-small">
                  What was the project goal?
                </h2>
                <h3 className="h4-light align-center margin-bottom-large">
                  To <strong className="glansis-blue">redesign</strong> the
                  GLANSIS website to improve the user experience, focusing on
                  the{" "}
                  <strong className="glansis-blue">
                    species list generator{" "}
                  </strong>{" "}
                  page
                </h3>
                <p className="align-center grey margin-bottom-small">
                  GLANSIS offers different tools in their website, so all
                  students were given the chance to decide which tool to focus
                  on.
                </p>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-1">
            <div className="project-section">
              <div className="detail-container remove-bottom-margin">
                <h2 className="h3-semibold margin-bottom-small light-black">
                  Research Phase
                </h2>
                <p className="body-regular light-black margin-bottom-small">
                  To start the project, I analyzed the GLANSIS website to
                  identify its main problems. Later, I gained access to
                  previously conducted research materials, which included
                  reports of needs assessments, interviews, usability testing,
                  and heuristics evaluations.
                </p>
                <p className="body-regular light-black">
                  After exploring the reports, I confirmed the three major
                  problems I had initially identified with my analysis.
                </p>
                <div className="three-column-container detail-container">
                  <div className="flex-center-container">
                    <img src={hierarchy} />
                    <p className="body-semibold-uppercase small-font glansis-blue margin-bottom-small">
                      Lack of hierarchy
                    </p>
                    <p className="small-font light italic dark-grey">
                      There was no clear hierarchy on both the homepage and the
                      website as a whole.
                    </p>
                  </div>
                  <div className="flex-center-container">
                    <img src={counterintuitive} />
                    <p className="body-semibold-uppercase  small-font glansis-blue margin-bottom-small">
                      Counterintuitive Desgins
                    </p>
                    <p className="small-font light italic dark-grey">
                      Counterintuitive designs were implemented through
                      different areas of the website
                    </p>
                  </div>
                  <div className="flex-center-container">
                    <img src={info} />
                    <p className="body-semibold-uppercase small-font glansis-blue margin-bottom-small">
                      Information Overload
                    </p>
                    <p className="small-font light italic dark-grey">
                      A lot of information was being presented at once with no
                      distinction.
                    </p>
                  </div>
                </div>

                <div className="detail-container grey-background-strip remove-bottom-margin">
                  <h3 className="h3-semibold grey margin-bottom-large">
                    Understanding the Problem Statement
                  </h3>
                  <p className="h4-light margin-bottom-small">
                    Access to the information on the GLANSIS website is vital in
                    preserving the Great Lakes and its surrounding communities.
                  </p>
                  <p className="h4-light margin-bottom-small">
                    However,{" "}
                    <strong className="glansis-blue">
                      GLANSIS users struggle to navigate the website, often
                      feeling lost, confused, and overwhelmed when trying to
                      find and understand the information on the pages.
                    </strong>
                  </p>
                  <p className="h4-light margin-bottom-small">
                    This prevents the users from gaining valuable insights,
                    disturbing effective decision-making, and ultimately
                    impacting the collective efforts towards conserving the
                    Great Lakes ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-2">
            <div className="project-section">
              <h2 className="h3-semibold margin-bottom-small light-black">
                Design Phase
              </h2>
              <p className="body-regular light-black">
                During the design process, I focused on:
                <ol>
                  <li className="glansis-blue ">
                    Creating a logical hierarchy for the homepage and website
                    navigation.
                  </li>
                  <li className="glansis-blue">
                    Reorganizing and sectioning the content on the pages and the
                    list generator form.
                  </li>
                  <li className="glansis-blue">
                    Strategizing how to present large amounts of information
                    while still emphasizing the essential.
                  </li>
                  <li className="glansis-blue">
                    Building meaningful consistency throughout the website.
                  </li>
                </ol>
              </p>
              <div className="detail-container">
                <h3 className="align-center">Brainstorming</h3>
                <div className="img-strip-2 margin-bottom-large">
                  <img src={sketches} style={{ width: "100%" }} />
                </div>

                <h3 className="h3-semibold grey margin-bottom-small">
                  Key Design Decisions
                </h3>
                <p className="h4-light glansis-blue margin-bottom-small">
                  Incorporate an effective typographic hierarchy and color
                  solution.<br></br>Add instructional, clarifying content.{" "}
                  <br></br>
                  Include specific UI elements such as cards, tabs, breadcrumbs,
                  and chips.
                </p>
                <p className="small-font light grey margin-bottom-large">
                  After one round of mobile wireframing, I started embrace these
                  3 key design decisions to successfully address the problems
                </p>
                <div className="img-strip-2 align-center margin-bottom-large">
                  <img src={wireframe2} style={{ width: "40%" }} />
                  <img src={wireframe1} style={{ width: "40%" }} />
                </div>
              </div>

              <div className="detail-container grey-background-strip remove-bottom-margin">
                <h3 className="h3-semibold grey margin-bottom-small">
                  Understanding Key Decision #1
                </h3>
                <p className="h4-light margin-bottom-small glansis-blue italic ">
                  <strong>
                    Incorporating an effective typographic hierarchy and color
                    solution
                  </strong>
                </p>

                <p className="body-regular light light-black margin-bottom-large">
                  By creating a hierarchy using typography and color, the users
                  are subconsciously informed of what to focus on. This also
                  allows them to quickly scan the pages.
                </p>
                <img src={example1} style={{ width: "100%" }} />
              </div>

              <div className="detail-container remove-bottom-margin">
                <h3 className="h3-semibold grey margin-bottom-small">
                  Understanding Key Decision #2
                </h3>
                <p className="h4-light margin-bottom-small glansis-blue italic ">
                  <strong>Adding instructional, clarifying content</strong>
                </p>

                <p className="body-regular light light-black margin-bottom-large">
                  Adding content that explains to the user what to expect, how
                  to use a given feature, or what is being displayed on the
                  screen helps mitigate feelings of confusion and
                  disorientation.
                </p>
                <img src={example2} style={{ width: "100%" }} />
              </div>

              <div className="detail-container grey-background-strip remove-bottom-margin">
                <h3 className="h3-semibold grey margin-bottom-small">
                  Understanding Key Decision #3
                </h3>
                <p className="h4-light margin-bottom-small glansis-blue italic ">
                  <strong>
                    Including UI elements such as cards, tabs, breadcrumbs, and
                    chips/tags
                  </strong>
                </p>

                <p className="body-regular light light-black margin-bottom-small">
                  Employing <strong>card</strong> elements and{" "}
                  <strong>tabs</strong> enabled efficient organization and
                  segmentation of the extensive content on the website. This
                  minimizes the need for prolonged scrolling, facilitating users
                  in locating the information they seek with greater ease.
                </p>
                <p className="body-regular light light-black margin-bottom-small">
                  The <strong>breadcrumb</strong> elements present the
                  structural hierarchy of the website to users and provide them
                  with an additional mean to navigate between pages.
                </p>
                <p className="body-regular light light-black margin-bottom-large">
                  While <strong>tags</strong> emphasize and categorize
                  information, <strong>chips</strong> were employed to empower
                  users with greater control, facilitating their interaction
                  with the data on the pages.
                </p>
                <img src={example3} style={{ width: "100%" }} />
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-3">
            <div className="project-section">
              <div className="detail-container remove-bottom-margin">
                <h2 className="h3-semibold margin-bottom-small light-black">
                  Final Design
                </h2>
                <h3 className="grey margin-bottom-large">
                  High-Fidelity Prototype
                </h3>

                <div className="margin-bottom-large">
                  <p className="body-regular light-black margin-bottom-small light">
                    {" "}
                    <strong className="glansis-blue">Homepage:</strong> I
                    incorporated new sections to the homepage to create a more
                    complete experience for both new and recurring users. With
                    this page, users should be able to familiarize themselves
                    with GLANSIS, access the main tools, and access information
                    more quickly.{" "}
                  </p>
                  <video
                    src={video1}
                    style={{ width: "100%" }}
                    autoPlay
                    muted
                  ></video>
                </div>

                <div className="margin-bottom-large">
                  <p className="body-regular light-black margin-bottom-small light">
                    {" "}
                    <strong className="glansis-blue">
                      Species List Generator:
                    </strong>{" "}
                    I removed redundant fields and reorganized the form,
                    creating sections, to help users fill in the information in
                    a more intuitive way and faster.
                  </p>
                  <video
                    src={video2}
                    style={{ width: "100%" }}
                    autoPlay
                    muted
                  ></video>
                </div>

                <div className="margin-bottom-large">
                  <p className="body-regular light-black margin-bottom-small light">
                    {" "}
                    <strong className="glansis-blue">
                      Species Results and Profile:
                    </strong>{" "}
                    I sectioned and reduced the initial amount of information
                    being presented to the user on the species profile by making
                    use of “tabs,” and was able to display all the information
                    users might be looking for on a list by using cards, tags,
                    and an effective typographic hierarchy.
                  </p>
                  <video
                    src={video3}
                    style={{ width: "100%" }}
                    autoPlay
                    muted
                  ></video>
                </div>
              </div>
            </div>
          </CustomSection>

          <CustomSection id="sec-4">
            <div className="project-section">
              <div className="detail-container grey-background-strip remove-bottom-margin">
                <h3 className="h3-semibold light-black margin-bottom-small">
                  Usability Testing
                </h3>
                <div className="two-column-container">
                  <p className="body-regular light-black">
                    Unfortunately, due to time constraints, I was only able to
                    conduct a single usability testing session that didn’t
                    generate any significant insights. <br></br>The designs
                    performed very well, but one session is not enough to infer
                    that the designs truly solve the problems for the{" "}
                    <strong>majority of the users.</strong>
                  </p>
                  <img src={usability} id="usability_test" />
                </div>
              </div>

              <div className="detail-container">
                <h3 className="h3-semibold light-black">Extra</h3>
                <p className="body-regular light-black margin-bottom-small">
                  Thinking of the future, I developed a style guide and
                  components library, and generated documentation of all design
                  decisions made throughout the project. This way, the redesign
                  could be expanded to the remaining pages of the GLANSIS
                  website by me, or any other designer.{" "}
                </p>
                <img src={styleguide} style={{ width: "100%" }} />
              </div>

              <div className="detail-container grey-background-strip remove-bottom-margin">
                <h3 className="h3-semibold light-black margin-bottom-small align-center">
                  ⭐️ Recognition ⭐️
                </h3>

                <p className="body-regular light-black margin-bottom-small">
                  My designs were voted on by classmates and subsequently
                  selected by the professors as one of the best designs in the
                  class. Because of that, I gained the opportunity to present to
                  the client and my classmates on the last day of class.
                </p>
                <p className="body-regular light-black margin-bottom-large">
                  This is me proudly presenting the results of my hard work!
                  🎉😊
                </p>
                <div className="two-column-container">
                  <img src={me1} className="img-size" />
                  <img src={me2} className="img-size" />
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
