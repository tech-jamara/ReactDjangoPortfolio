import "./Navbar.css";
import $ from "jquery";
import { Link } from "react-router-dom";

$(document).ready(function () {
  // menu click event
  $(".menuBtn").click(function () {
    $(this).toggleClass("act");
    if ($(this).hasClass("act")) {
      $(".mainMenu").addClass("act");
    } else {
      $(".mainMenu").removeClass("act");
    }
  });
});

$(document).ready(function () {
  $(".mainMenu li a").click(function (e) {
    var targetHref = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(targetHref).offset().top,
      },
      1000
    );
    $(".mainMenu").removeClass("act");

    if ($(this).hasClass("act")) {
      $(".menuBtn").addClass("act");
    } else {
      $(".menuBtn").removeClass("act");
    }

    e.preventDefault();
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbur");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
$(window).on("load", function () {
  $(".toggle").on("click", () => {
    $("body").toggleClass("light");
  });
});

const Navbar = () => {
  return (
    <>
      <button type="button" className="mobile-nav-toggle d-lg-none">
        <i className="icofont-navigation-menu"></i>
      </button>
      <header id="header" className="fixed-top ">
        <div className="container-fluid  navbur">
          <div className="navi">
            <div className="col-xl-12 d-flex align-items-center lefty">
              <h5 className="ld-flex mr-auto">
                <Link to="#" className="myname">
                  F.W
                </Link>
              </h5>

              <nav className="nav-menu  mainMenu">
                <ul>
                  <li className="active">
                    <Link to="#home">Home</Link>
                  </li>
                  <li>
                    <Link to="#about">About</Link>
                  </li>
                  <li>
                    <Link to="#services">Services</Link>
                  </li>
                  <li>
                    <Link to="#skills">Skills</Link>
                  </li>

                  <li>
                    <Link to="#work">My Work</Link>
                  </li>

                  <li>
                    <Link to="#contact">Contact</Link>
                  </li>
                </ul>
              </nav>

              <div className="left-btns">
                <div class=" " id="theme-button2">
                  <input id="toggle" class="toggle" type="checkbox"></input>
                </div>
                <div className=" " id="theme-button">
                  <Link to="#" class="menuBtn">
                    <span class="lines"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
