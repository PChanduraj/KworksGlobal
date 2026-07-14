import React, { useState } from "react";
import "animate.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Helmet } from "react-helmet";
import icon from "../image/finteam-icon.png";
import "./Resources.css";
import "./Careers.css";

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

// FinTeam One's real core values — The 5P Way (from HR Corporate Culture doc).
const values = [
  {
    emoji: "🔥",
    title: "Passion",
    tagline: "Problems Are Possibilities",
    desc: 'We see every challenge as a chance to innovate. Where others say "no," we find 100 ways to yes.',
  },
  {
    emoji: "👥",
    title: "People",
    tagline: "Powered by Growth",
    desc: "We adapt faster than change itself. Learning isn't a goal — it's how we operate every single day.",
  },
  {
    emoji: "🚀",
    title: "Performance",
    tagline: "Peace-of-Mind Numbers",
    desc: "We deliver clarity you can trust. Our clients sleep better, dream bigger, and make confident decisions.",
  },
  {
    emoji: "🤝",
    title: "Partnership",
    tagline: "Pressure Reveals Precision",
    desc: "When stakes are high, we stay composed. Collaboration and creative problem-solving turn obstacles into outcomes.",
  },
  {
    emoji: "🌟",
    title: "Possibilities",
    tagline: "Playing for Unicorns",
    desc: "We're not here for incremental wins. We're building big, backing the underdog, and rewriting what's possible for SMBs.",
  },
];

const Careers = () => {
  const [applyingFor, setApplyingFor] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", linkedin: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const openApply = (role) => {
    setApplyingFor(role);
    setStatus("idle");
    setTimeout(() => {
      document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role: applyingFor }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("done");
      setForm({ name: "", email: "", phone: "", linkedin: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  const field = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <Helmet>
        <title>Finteam One - Careers</title>
        <meta
          name="description"
          content="Join FinTeam One. Explore open roles in accounting, finance, and advisory on our remote-first, AI-driven team."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/careers" />
      </Helmet>

      {/* Bold hero */}
      <div className="careers-hero">
        <img className="careers-hero-icon" src={icon} alt="" aria-hidden="true" />
        <div className="careers-hero-inner">
          <span className="careers-eyebrow">Careers at FinTeam One</span>
          <h1>Feel empowered to be bold.</h1>
          <p>
            We're a disruptor in finance — a global team building the future of
            the industry, where cutting-edge AI is leveraged in everything we do.
            If that's what drives you, this is where you belong.
          </p>
        </div>
      </div>

      <div className="resources-container">
        {/* Core values */}
        <AnimatedOnScroll animationIn="bounceInRight" style={{ width: "100%" }}>
          <p className="resources-title">
            The 5P Way
            <br />
            <span>The values behind how we work, who we hire, and how we serve.</span>
          </p>
        </AnimatedOnScroll>
        <div className="careers-values">
          {values.map((v) => (
            <AnimatedOnScroll animationIn="bounceInUp" key={v.title}>
              <div className="value-card">
                <span className="value-emoji" aria-hidden="true">{v.emoji}</span>
                <h4>{v.title}</h4>
                <span className="value-tagline">{v.tagline}</span>
                <p>{v.desc}</p>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>

        {/* Open roles */}
        <p className="resources-title careers-roles-title">
          Open roles
          <br />
          <span>Build the future of finance with a remote-first team.</span>
        </p>
        <div className="resources-grid resources-grid--3">
          {openings.map((job) => (
            <AnimatedOnScroll animationIn="bounceInUp" key={job.title}>
              <div className="resource-card resource-card--media">
                <div className="resource-thumb">
                  <img className="resource-thumb-icon" src={icon} alt="" aria-hidden="true" />
                  <span className="resource-thumb-cat">Open Role</span>
                </div>
                <div className="resource-card-body">
                  <h3>{job.title}</h3>
                  <p className="resource-meta">{job.type}</p>
                  <p>{job.desc}</p>
                  <div className="resource-btn" onClick={() => openApply(job.title)}>
                    Apply now
                  </div>
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>

        {/* Application form */}
        {applyingFor && (
          <div className="apply-block" id="apply-form">
            {status === "done" ? (
              <div className="apply-done">
                <h3>We're excited you're considering us! 🎉</h3>
                <p>
                  Thanks for applying for <strong>{applyingFor}</strong>. We've
                  received your application and someone from our team will reach
                  out to you soon.
                </p>
              </div>
            ) : (
              <>
                <h3>Apply for {applyingFor}</h3>
                <p className="apply-intro">
                  We're excited you're considering us. Tell us a bit about
                  yourself and we'll have someone reach out.
                </p>
                <form onSubmit={submit} className="apply-form">
                  <input placeholder="Full name" value={form.name} onChange={field("name")} required />
                  <input type="email" placeholder="Email" value={form.email} onChange={field("email")} required />
                  <input placeholder="Phone (optional)" value={form.phone} onChange={field("phone")} />
                  <input placeholder="LinkedIn or resume link" value={form.linkedin} onChange={field("linkedin")} />
                  <textarea placeholder="Why FinTeam One? (optional)" rows="4" value={form.message} onChange={field("message")} />
                  <button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Submit application"}
                  </button>
                  {status === "error" && (
                    <p className="apply-error">
                      Something went wrong. Please try again, or email us at info@finteam.one.
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Careers;
