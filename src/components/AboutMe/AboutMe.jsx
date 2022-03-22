import "./AboutMe.css";
import { useGetAboutMeQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";

const AboutMe = () => {
  const { data: aboutData, isFetching } = useGetAboutMeQuery();
  const [aboutMe, setAboutMe] = useState(aboutData);
  const img_300 = "http://127.0.0.1:8000";

  useEffect(() => {
    setAboutMe(aboutData);
  }, [aboutMe, aboutData]);

  return (
    <>
      {aboutMe &&
        aboutMe.map((details) => (
          <main id="about">
            <div className="aboutMe-container">
              <div className="about-decor">
                <div className="about-dots">
                  <img src={decor1} alt="" />
                </div>
                <div className="about-rect">
                  <img src={reactagle} alt="" />
                </div>
                <div className="about-shady">
                  <img src={shady} alt="" />
                </div>
              </div>
              <div className="abouMe-row">
                <div className=" col-lg-6 col-md-5 col-sm-12 about-img">
                  <img src={`${img_300}${details.about_avatar}`} alt="" />
                </div>
                <div className=" col-lg-6 col-md-7  col-sm-12 about_myinfo">
                  <div className="title">
                    <h2>{details.title}</h2>
                    <h3>{details.title_2}</h3>
                  </div>
                  <div className="lang">
                    <i className="fa fa-html5"></i>
                    <i className="bx bxl-react"></i>{" "}
                    <i className="bx bxl-javascript"></i>{" "}
                    <i className="bx bxl-python"></i>{" "}
                    <i className="bx bxs-data"></i>{" "}
                    <i className="bx bxl-firebase"></i>
                  </div>
                  <div className="about-description">
                    <p className="about-info">{details.description_one}</p>
                    {/* <p className="about-info-2">{details.description_two}</p> */}
                  </div>

                  <button className=" download-cv">Download Cv</button>
                </div>
              </div>
            </div>
          </main>
        ))}
    </>
  );
};

export default AboutMe;
