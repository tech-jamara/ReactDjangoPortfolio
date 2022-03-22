import { useGetProjectsQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import "./projects.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const { data: projects, isFetching } = useGetProjectsQuery();
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      310: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2.7,
      },
      1300: {
        items: 3.7,
      },
      1440: {
        items: 3.7,
      },
    },
  };
  const [projectsDetails, setProjectsDetails] = useState(projects);
  useEffect(() => {
    setProjectsDetails(projects);
    console.log(projectsDetails);
  }, [projectsDetails, projects]);
  if (isFetching) return "loading";

  return (
    <div className="mywork " id="work">
      <div className="mywork-title">
        <h2>My Work</h2>
        <h3>Check Out My Reacet Projects</h3>
      </div>
      <div className="project-row">
        {projectsDetails?.length && (
          <OwlCarousel className="owl-theme" {...options}>
            {projectsDetails?.map((details) => (
              <div className="project">
                <div className="project-img">
                  <img src={details.about_avatar} alt="" className="work-img" />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    <p className="admin">{details.language_used}</p>
                  </div>
                </div>
                <div className="work-details">
                  <h2>{details.Project_title}</h2>
                  <p className="work-info">{details.Project_info}</p>
                  <Link
                    to={details.project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h6 className="learnmore">Visit</h6>
                  </Link>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
};

export default Projects;
