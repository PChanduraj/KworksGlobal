import React from "react";
import "animate.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import icon from "../image/finteam-icon.png";
import "./Resources.css";

// Roles sourced from FinTeam One's LinkedIn (currently drafts).
// ponytail: descriptions are drafted here — confirm wording against the LinkedIn job posts.
const openings = [
  {
    title: "Social Media Manager",
    type: "Part-time · India (Remote)",
    desc: "Plan and create content across LinkedIn and other channels to grow FinTeam One's audience and brand.",
  },
  {
    title: "Executive Assistant",
    type: "Full-time · Philippines (Remote)",
    desc: "Support leadership with scheduling, communications, and day-to-day operations across a remote team.",
  },
  {
    title: "Operations Manager",
    type: "Full-time · India (Remote)",
    desc: "Drive internal processes, client delivery, and team coordination for a growing finance-as-a-service firm.",
  },
];

const Thumb = ({ label }) => (
  <div className="resource-thumb">
    <img className="resource-thumb-icon" src={icon} alt="" aria-hidden="true" />
    <span className="resource-thumb-cat">{label}</span>
  </div>
);

const Careers = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Finteam One - Careers</title>
        <meta
          name="description"
          content="Join FinTeam One. Explore open roles in accounting, finance, and advisory on our remote-first team."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/careers" />
      </Helmet>
      <div className="resources-container">
        <AnimatedOnScroll animationIn="bounceInRight" style={{ width: "100%" }}>
          <p className="resources-title">
            Careers at FinTeam One
            <br />
            <span>
              Build the future of finance with a remote-first, data-driven team.
            </span>
          </p>
        </AnimatedOnScroll>

        {openings.length > 0 ? (
          <div className="resources-grid resources-grid--3">
            {openings.map((job) => (
              <AnimatedOnScroll animationIn="bounceInUp" key={job.title}>
                <div
                  className="resource-card resource-card--media"
                  onClick={() => navigate("/contact-us")}
                >
                  <Thumb label="Open Role" />
                  <div className="resource-card-body">
                    <h3>{job.title}</h3>
                    <p className="resource-meta">{job.type}</p>
                    <p>{job.desc}</p>
                    <div className="resource-btn">Apply now</div>
                  </div>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>
        ) : (
          <AnimatedOnScroll animationIn="bounceInUp">
            <p className="careers-empty">
              No open roles right now — but we're always glad to meet great
              people.{" "}
              <span
                className="careers-link"
                onClick={() => navigate("/contact-us")}
              >
                Send us your resume.
              </span>
            </p>
          </AnimatedOnScroll>
        )}
      </div>
    </>
  );
};

export default Careers;
