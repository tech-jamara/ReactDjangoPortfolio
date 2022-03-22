import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import decor3 from "../../images/decoration/Group-31.png";
import decor4 from "../../images/decoration/Path-25.png";
import imgi from "../../images/slider.png";
import MyPartcles from "./MyPartcles";
import "./Intro.css";
import { useGetHomeDetailsQuery } from "../../Api/api";
import { useGetSocialMediaQuery } from "../../Api/api";

const Intro = () => {
  const { data: conta } = useGetSocialMediaQuery();

  const { data: homeData, isFetching } = useGetHomeDetailsQuery();
  const [homeDetails, setHomeDetails] = useState(homeData);
  const [contacts1Details, setContact2Details] = useState(conta);

  useEffect(() => {
    setHomeDetails(homeData);
    setContact2Details(conta);

    console.log(conta);
  }, [homeDetails, homeData, contacts1Details, conta]);
  if (isFetching) return "loading";

  return (
    <>
      {homeDetails &&
        homeDetails.map((detail) => (
          <section className=" intro-page" id="home">
            <MyPartcles />

            <div className="decorations">
              {/* <div className="large-decor">
                <img src={decor1} alt="" />
              </div> */}
              {/* <div className="decor-dot">
                <img src={decor2} alt="" />
              </div> */}
              <div className="decor-dot2">
                <img src={decor3} alt="" />
              </div>
              <div className="decor-box">
                <img src={decor4} alt="" />
              </div>
              <div className="parcol"></div>
              <div className="backi">
                <img src={imgi} alt="" />
              </div>
            </div>
            <div className="small-intro">
              <div className="intro-row">
                <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
                  <div className="intro-name">
                    <h3 className="hello"></h3>
                    <h3 className="name">
                      <span>
                        {" "}
                        ... {detail.greeting} I'm {detail.name} A{" "}
                        {detail.job_title}
                      </span>
                    </h3>
                    {/* <h4 className="job"> </h4> */}
                    <p className="myinfo">{detail.par_inro}</p>
                  </div>

                  <div className="intro-btns">
                    <Link
                      to={`mailto:${detail.hireMe_link}`}
                      className="contactMe"
                    >
                      <button className="contact-me">
                        Hire me <i class="bx bx-send "></i>
                      </button>
                    </Link>
                    <Link
                      to={`${detail.cv_link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="CvMe"
                    >
                      <button className="my-cv">
                        Resume <i class="bx bx-download"></i>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12 left-img ">
                  <div className="ff">
                    <img className="intro-img" src={detail.avatar_img} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="intro-links">
              {contacts1Details &&
                contacts1Details.map((data1) => (
                  <Link to={data1.link} className="icon-link">
                    <i className={data1.social_icon}></i>
                  </Link>
                ))}
            </div>
          </section>
        ))}
    </>
  );
};

export default Intro;
