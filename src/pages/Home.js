import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import glansis from "../images/glansis.png";
import slalom from "../images/slalom.png";
import phoemale from "../images/phoemale.png";
import quizine from "../images/quizine.png";
import cineats from "../images/cineats.png";
import portfolio from "../images/my_portfolio.png";
import sticker from "../images/sticker.svg";
import arrow_down from "../images/keyboard_arrow_down.svg";
import me from "../images/me_home_page.png";
import maiara from "../images/maiara.png";

import "material-icons/iconfont/outlined.css";

const filters = ["Design", "Coding", "Internship", "Academic"];
const projects = [
  {
    id: "glansis",
    imageSrc: glansis,
    link: "/glansis",
    tags: ["All", "Design", "Academic"],
    position: "UX Design Student",
    title: "Fall 2023 Semester Project",
    description:
      "Redesigning GLANSIS database website tools to help improve the current experience of users looking for information on non-native species in the Great Lakes",
  },

  {
    id: "quizine",
    imageSrc: quizine,
    link: "/quizine",
    tags: ["All", "Design", "Coding", "Academic"],
    position: "App Development Student",
    title: "Winter 2024 Semester Project",
    description:
      "Ideating, designing, and coding a responsive trivia website, Quizine Trivia, that allows users to personalize their experience",
  },
  {
    id: "slalom",
    imageSrc: slalom,
    link: "/slalom",
    tags: ["All", "Design", "Internship"],
    position: "UX Design Intern II",
    title: "Summer 2023 Internship",
    description:
      "Designing internal client tools to help improve the employee’s manufacturing configuration experience and workflow efficiency",
  },
  {
    id: "portfolio",
    imageSrc: portfolio,
    link: "/portfolio",
    tags: ["All", "Coding"],
    position: "UX Designer, Web Developer",
    title: "Summer 2024 Personal Project",
    description:
      "Redesigning my personal portfolio website using my development skills while focusing on a clean design and improved accessibility",
  },
  {
    id: "phoemale",
    imageSrc: phoemale,
    link: "/phoemale",
    tags: ["All", "Design", "Internship"],
    position: "UX Design Intern I",
    title: "Summer 2022 Internship ",
    description:
      "Redesigning Phoemale’s website to incorporate a nomination process and create an engaging experience that helps users get the help",
  },
  {
    id: "cineats",
    imageSrc: cineats,
    link: "/cineats",
    tags: ["All", "Design", "Academic"],
    position: "UX Design Student",
    title: "Summer 2021 Project",
    description:
      "Designing a movie the to help improve the people’s experience of going to the movies and ordering concession snacks",
  },
];

export default function Home() {
  const [selectedFilters, setSelectedFilters] = React.useState([]);
  const [visible, setVisible] = React.useState();

  function clearFilters() {
    setSelectedFilters([]);
  }

  function showHidden() {
    setVisible(!visible);
  }

  return (
    <>
      <main>
        <section className="section-1">
          <Navbar />
          <div className="container">
            <h1 className="align-center">
              <img src={maiara} id="maiara" />
            </h1>
            <h2 className="h2-medium grey align-center">
              UX design student @ UMich
            </h2>

            {visible && (
              <div className="surprise-container">
                <div className="image-container">
                  <img
                    id="img-1"
                    src={me}
                    alt="woman making a surprise and smile face with hands on the face"
                  />
                </div>
                <h3 className="surprise-text highlighter-green">
                  {" "}
                  graduating Spring 2025!
                </h3>
              </div>
            )}
          </div>
          <div className="fixed-center-bottom moveUpAndDown">
            <a href="#projects">
              <img src={arrow_down} alt="arrow pointing down" />
            </a>
          </div>
          <div id="sticker" className="fixed-right-bottom">
            <img
              src={sticker}
              onClick={showHidden}
              alt="sticker with a black flower that says click to see a surprise"
            />
          </div>
        </section>

        <section className="section-2">
          <div className="selected-projects">
            <h2 className="h1-semibold grey" id="projects">
              Selected Projects.
            </h2>
            <div className="filter-bar-container">
              <div className="chips-container">
                {filters.map((filter) => {
                  return (
                    <button
                      className="chip"
                      onClick={() => {
                        if (selectedFilters.includes(filter)) {
                          const index = selectedFilters.indexOf(filter);
                          if (index > -1) {
                            selectedFilters.splice(index, 1);
                            setSelectedFilters([...selectedFilters]);
                          }
                        } else {
                          setSelectedFilters([...selectedFilters, filter]);
                        }
                      }}
                    >
                      {selectedFilters.includes(filter) && (
                        <i
                          className="material-icons-outlined"
                          style={{ fontSize: "18px" }}
                        >
                          check
                        </i>
                      )}
                      {filter}
                    </button>
                  );
                })}
              </div>
              {selectedFilters.length !== 0 && (
                <button className="text-btn dark-grey" onClick={clearFilters}>
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          <div className="project-cards-container">
            {projects.map((project) => {
              let shouldShow = selectedFilters.every((filter) =>
                project.tags.includes(filter)
              );
              if (shouldShow || selectedFilters.length === 0) {
                return (
                  <div className="project-card">
                    <a href={project.link}>
                      <img src={project.imageSrc} style={{ width: "100%" }} />
                    </a>
                    <div className="card-body">
                      <h3 id={project.id} className="very-small-uppercase ">
                        <a href={project.link}>{project.title} </a>
                      </h3>
                      <h4
                        className="very-small-regular grey"
                        id={`${project.id}-position`}
                      >
                        {project.position}
                      </h4>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
