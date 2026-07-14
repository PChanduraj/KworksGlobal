import React, { useState } from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import ReactCardFlip from "react-card-flip";
import { Helmet } from "react-helmet";
import "./Service.css";
import f1 from "../../src/image/bookeeping.svg";
import f2 from "../../src/image/cfo.svg";
import f3 from "../../src/image/fa.svg";
import f4 from "../../src/image/tax.svg";
import f5 from "../../src/image/fs.svg";
import f6 from "../../src/image/invest.svg";
import f7 from "../../src/image/payroll.svg";
import f8 from "../../src/image/strategic.svg";

// The 8 pillars of Finance as a Solution. Hover a card to reveal how we deliver it.
const services = [
  {
    img: f1,
    title: "Accounting, Bookkeeping & Controllership",
    back: "Chaos got you in a chokehold? Breathe easy with organized finances! We tame tangled records & conquer month-end close with flawless accuracy. Stay informed, stay ahead.",
  },
  {
    img: f2,
    title: "CFO Consulting Services",
    back: "Skip full-time CFO costs, unlock expert growth guidance. Level up your finances with our part-time CFOs. Get clarity, build investor confidence, and scale smarter. Bridge to the big leagues starts here.",
  },
  {
    img: f3,
    title: "Financial Analysis",
    back: "Lost in financial fog? Stop guessing, start knowing. We analyze your numbers, reveal insights, and guide you to goals. Expert analysis, actionable steps — your financial compass to navigate with confidence.",
  },
  {
    img: f4,
    title: "Tax & Compliance",
    back: "Tax season stress-free? We got this. Deadlines met, deductions maxed, sleep tight. Our experts navigate the chaos, keeping you squeaky clean with the IRS. Relax, your finances are in good hands.",
  },
  {
    img: f5,
    title: "Strategic Financial Partner",
    back: "M&A maze got you lost? Uncover hidden value & close deals faster with our accounting navigators. Expert due diligence, financial forecasting, tax optimization — chart your course to merger & acquisition success.",
  },
  {
    img: f6,
    title: "Financial Systems",
    back: "Dust off spreadsheets, unleash growth. AI scans your finances, finds hidden inefficiencies. Automate tasks, gain crystal insights, watch profits bloom. We partner with top tech, cutting endless demos. Tailor your system, dominate your industry. Lead the finance revolution supporting the Future of Finance.",
  },
  {
    img: f7,
    title: "Payroll",
    back: "Ditch the timesheet headaches and tax woes! Our smooth payroll system handles everything — from new hires to paychecks. Work smarter, not harder on paydays. Relax, hand off payroll to the pros, and watch your business fly.",
  },
  {
    img: f8,
    title: "Investor & Equity Management",
    back: "Invest boldly, not blindly. Our accounting & equity experts empower you with clarity, insights, and guidance to unlock maximum returns and conquer your financial goals. From bookkeeping brilliance to expert market navigation, we're your trusted co-pilot on the journey to investment mastery.",
  },
];

const NewServices = () => {
  // null = none revealed; otherwise the index of the hovered/tapped card
  const [active, setActive] = useState(null);

  return (
    <>
      <Helmet>
        <title>Finteam One - Services</title>
        <meta
          name="description"
          content="Finance as a Solution — end-to-end, AI-driven finance from FinTeam One: accounting & controllership, CFO services, analysis, tax, systems, payroll, and more."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/services" />
      </Helmet>

      <AnimatedOnScroll animationIn="fadeIn" style={{ width: "100%" }}>
        <div className="services-intro">
          <span className="services-intro-eyebrow">Finance as a Solution</span>
          <h1>End-to-end finance, reimagined.</h1>
          <p>
            We don't just do the books. FinTeam One delivers finance as a single,
            AI-driven solution — strategic partnership, financial systems, investor
            management, CFO services, analysis, tax &amp; compliance, accounting,
            bookkeeping &amp; controllership, and payroll — working as one.
          </p>
          <p className="services-intro-hint">Hover a service to see how we deliver it.</p>
        </div>
      </AnimatedOnScroll>

      <div className="boxesss">
        {services.map((s, i) => (
          <div
            key={s.title}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setActive(active === i ? null : i)}
          >
            <ReactCardFlip isFlipped={active === i} flipDirection="vertical">
              <div className="service-paper">
                <div>
                  <img className="service-img" src={s.img} alt={s.title} />
                </div>
                <p className="service-heading">
                  {s.title}
                  <span
                    style={{
                      display: "block",
                      width: "50%",
                      marginTop: "0.5rem",
                      height: "0.3rem",
                      backgroundColor: "#134d65",
                    }}
                  ></span>
                </p>
              </div>
              <div className="back-side">
                <p>{s.back}</p>
              </div>
            </ReactCardFlip>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewServices;
