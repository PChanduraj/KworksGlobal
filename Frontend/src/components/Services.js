import React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import "animate.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import ReactCardFlip from "react-card-flip";
import Question from "./Question";
import "./Service.css";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutImg from "../image/cool.png";
import advisory from "../image/financial.png";
import tax from "../image/Cfo.png";
import f1 from "../../src/image/bookeeping.svg";
import f2 from "../../src/image/cfo.svg";
import f3 from "../../src/image/fa.svg";
import f4 from "../../src/image/tax.svg";
import f5 from "../../src/image/fs.svg";
import f6 from "../../src/image/invest.svg";
import f7 from "../../src/image/payroll.svg";
import f8 from "../../src/image/strategic.svg";
import f9 from "../../src/image/whiteLogo11.svg";
import NewServices from "./NewServices";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet";
const data = [
  {
    title: "Finance As Service",
    image: advisory,
    points: [
      "Bookkeeping & Accounting: Stay organized with accurate and up-to-date financial records.",
      "Financial Analysis: Gain insights into your financial health and make data-driven decisions.",
      "Cash Flow Management: Optimize cash flow and working capital.",
      "Tax Planning & Compliance: Ensure tax compliance and minimize your tax burden.",
      "Strategic Financial Advice: Get expert guidance on financial strategy and planning.",
    ],
  },
  {
    title: "Fractional CFO Service",
    image: tax,
    points: [
      "Strategic Financial Planning: Crafting a financial roadmap to help you achieve your business goals.",
      "Budgeting and Forecasting: Accurate financial predictions for informed decision-making.",
      "Cash Flow Management: Optimizing cash flow to keep your business financially healthy.",
      "Risk Assessment and Mitigation: Identifying and managing financial risks.",
      "Mergers and Acquisitions: Expert guidance for successful business transactions.",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Finteam - Home</title>
        <meta
          name="description"
          content="FinTeam One replaces your finance function with lean, data-driven excellence delivering world class financial management services."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.finteam.one" />
      </Helmet>
      <div className="service-container">
        <AnimatedOnScroll animationIn="bounceInRight" style={{ width: "100%" }}>
          {" "}
          <p className="service-title">
            Level up your finance game. Unplug from fixed costs, plug into
            on-demand financial services.
            <br />{" "}
            <span>
              Future of finance reimagined to be{" "}
              <span style={{ fontSize: "1.25rem", fontWeight: "500" }}>
                Finance As A Service.
              </span>{" "}
              Pay for customized, timely solutions that you need.
            </span>
          </p>
        </AnimatedOnScroll>
        <div className="logo-des">
          <div style={{ width: "50%" }}>
            <AnimatedOnScroll animationIn="bounceInRight">
              <img src={f9} alt="f9"></img>
            </AnimatedOnScroll>
          </div>
          <div>
            <AnimatedOnScroll animationIn="bounceInRight">
              {" "}
              <p className="logo-des-p">
                Partner with our on-demand finance department. From bookkeeping
                to strategic planning, M&A, fund & investment accounting and
                more, our certified team manages it all.{" "}
              </p>
            </AnimatedOnScroll>
          </div>
        </div>
        <p className="logo-des-a">
          Free yourself to prioritize business growth.
        </p>
        <Question />

        <NewServices />
        <Testimonials />
        <div className="conclusion">
          <AnimatedOnScroll animationIn="bounceInRight">
            {" "}
            <div className="img-div1">
              {" "}
              <img src={AboutImg} alt="About Us" />
            </div>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInLeft">
            {" "}
            <div className="conclusion-text">
              <p>
                With FinTeam One your dedicated accounting and Finance team
                in-charge, you're liberated.....
                <span>
                  <br />
                  to channel your energy where it counts most, nurturing the
                  growth of your business. We're not just a service; we're your
                  strategic ally in unlocking your business's full potential.
                </span>
              </p>

              <div
                className="conclusion-btn"
                onClick={() => navigate("/contact-us")}
              >
                Talk to us
              </div>
            </div>{" "}
          </AnimatedOnScroll>
        </div>
      </div>
    </>
  );
};

export default Services;
