import "./Footer.css";
import Main from "./main";
import { useGetSocialMediaQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const { data: social, isFetching } = useGetSocialMediaQuery();
  const [socialDetails, setSocialDetails] = useState(social);
  useEffect(() => {
    setSocialDetails(social);
    console.log(socialDetails);
  }, [socialDetails, social]);
  if (isFetching) return "loading";

  return (
    <>
      <Main />
      <section>
        <div className="my-footer">
          <div class="switch">
            <div class="circle"></div>
          </div>

          <div class="progress-wrap">
            <svg
              class="progress-circle svg-content"
              width="100%"
              height="100%"
              viewBox="-1 -1 102 102"
            >
              &#xF145;
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
          </div>
          <div className="footer-info">
            <div className="footer-img">
              <img
                src="https://preview.colorlib.com/theme/breed2/img/xfavicon.png.pagespeed.ic.3uxt66FeIS.webp"
                alt=""
                className="footer-logo"
              />
              <h4 className="foot-name">James</h4>
            </div>

            <div className="all-links">
              <Link to="#">Home</Link>
              <Link to="#">About</Link>
              <Link to="#">Services</Link>
              <Link to="#">Skills</Link>
              <Link to="#">Contact</Link>
            </div>
            <div className="all-social-links">
              {socialDetails &&
                socialDetails.map((details) => (
                  <div className="footer2-social ">
                    <Link to={details.link}>
                      <i className={details.social_icon}></i>
                    </Link>
                  </div>
                ))}
            </div>
            <div className="copywrite">
              <p>
                Copyright ©2022 All rights reserved | Made with ❤️ by James
                Waweru
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
