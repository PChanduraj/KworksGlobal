import React from "react";
import "animate.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import articles from "../data/articles";
import icon from "../image/finteam-icon.png";
import "./Resources.css";

const NEWSLETTER_URL =
  "https://www.linkedin.com/newsletters/weekly-finteam-one-bulletin-7284989050405449730/";

const Thumb = ({ label }) => (
  <div className="resource-thumb">
    <img className="resource-thumb-icon" src={icon} alt="" aria-hidden="true" />
    <span className="resource-thumb-cat">{label}</span>
  </div>
);

// `asPage` is true only on the /resources route — so the page <title> is set there
// but NOT when Resources renders as a section on the Home page (which owns its own title).
const Resources = ({ asPage }) => {
  const navigate = useNavigate();
  return (
    <div className="resources-container">
      {asPage && (
        <Helmet>
          <title>Finteam One - Resources</title>
          <meta
            name="description"
            content="Insights, guides, and tools from FinTeam One — free finance resources for growing businesses."
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="/resources" />
        </Helmet>
      )}
      <AnimatedOnScroll animationIn="bounceInRight" style={{ width: "100%" }}>
        <p className="resources-title">
          Resources to power your finance decisions
          <br />
          <span>Insights, guides, and tools — free for growing businesses.</span>
        </p>
      </AnimatedOnScroll>

      <div className="resources-grid resources-grid--3">
        {articles.map((a) => (
          <AnimatedOnScroll animationIn="bounceInUp" key={a.slug}>
            <div
              className="resource-card resource-card--media"
              onClick={() => navigate(`/resources/${a.slug}`)}
            >
              <Thumb label={a.category || "Article"} />
              <div className="resource-card-body">
                <h3>{a.title}</h3>
                <p className="resource-meta">
                  {a.date} · {a.readingTime}
                </p>
                <p>{a.excerpt}</p>
                <div className="resource-btn">Read article</div>
              </div>
            </div>
          </AnimatedOnScroll>
        ))}

        <AnimatedOnScroll animationIn="bounceInUp">
          <div
            className="resource-card resource-card--media"
            onClick={() =>
              window.open(NEWSLETTER_URL, "_blank", "noopener,noreferrer")
            }
          >
            <Thumb label="Newsletter" />
            <div className="resource-card-body">
              <h3>Weekly FinTeam One Bulletin</h3>
              <p className="resource-meta">41 editions</p>
              <p>
                Stay informed, make smarter decisions, and stay ahead. Get our
                weekly finance insights straight to your inbox.
              </p>
              <div className="resource-btn">Subscribe</div>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </div>
  );
};

export default Resources;
