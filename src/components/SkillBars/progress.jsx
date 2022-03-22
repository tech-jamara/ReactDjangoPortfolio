import "./progress.css";
import { useGetProgressQuery } from "../../Api/api";
import { useEffect, useState } from "react";

import $ from "jquery";

var nav = $("body");

if (nav.length) {
  var offsetTop = nav.offset().top;
  $(window).on("scroll", function () {
    var height = $(window).height();
    if ($(window).scrollTop() + height > offsetTop) {
      $(".fullwidth").each(function () {
        $(this)
          .find(".skill-bar")
          .animate(
            {
              width: $(this).attr("data-percent"),
            },
            2000
          );
      });
    }
  });
}

const Progress = () => {
  const { data: progress, isFetching } = useGetProgressQuery();
  const [progressDetail, setProgressDetails] = useState(progress);
  useEffect(() => {
    setProgressDetails(progress);
    console.log(progressDetail);
  }, [progressDetail, progress]);
  if (isFetching) return "loading";

  return (
    <>
      <section id="skills">
        <div className="progress-container">
          <div className="progress-title">
            <h2>Skills</h2>
            <h3>My Skills Progress so far</h3>
          </div>
          <div className="progress-row2">
            {progressDetail &&
              progressDetail.map((progress) => (
                <div className=" col-xl-4 col-lg-6 col-md-6">
                  <div className="progress-bar2">
                    <div className="skill-info pt-2">
                      <div className="skill-detail">
                        <div>
                          <i className={progress.icon}></i>
                        </div>
                        <div className="skill-name">{progress.language}</div>
                      </div>
                      <div className="skill-perct">{progress.percentage}%</div>
                    </div>
                    <div
                      className="fullwidth clearfix"
                      style={{}}
                      data-percent={`${progress.percentage}%`}
                    >
                      <div className="skill-bar"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Progress;
