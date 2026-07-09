import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import articles from "../data/articles";
import "./Stats.css";

// ponytail: this page is unauthenticated — anyone with the URL can see view counts.
// It's not linked in the nav. Add a login/gate before treating it as private.

const titleFor = (slug) => {
  const a = articles.find((x) => x.slug === slug);
  return a ? a.title : slug;
};

const Stats = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ status: "loading", ranked: [] });

  useEffect(() => {
    fetch("/api/track/stats")
      .then((r) => {
        if (!r.ok) throw new Error("bad response");
        return r.json();
      })
      .then((data) =>
        setState({ status: "ok", ranked: data.ranked || [] })
      )
      .catch(() => setState({ status: "error", ranked: [] }));
  }, []);

  const total = state.ranked.reduce((sum, r) => sum + r.views, 0);
  const max = Math.max(1, ...state.ranked.map((r) => r.views));

  return (
    <>
      <Helmet>
        <title>Finteam - Article Stats</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="stats-container">
        <div className="stats-back" onClick={() => navigate("/resources")}>
          ← All resources
        </div>
        <h1 className="stats-title">Article interest</h1>
        <p className="stats-sub">
          Views recorded on your site, ranked by interest.
        </p>

        {state.status === "loading" && (
          <p className="stats-msg">Loading…</p>
        )}

        {state.status === "error" && (
          <p className="stats-msg">
            Couldn't reach the tracking backend. Make sure the Express server
            (Backend/server.js) is running.
          </p>
        )}

        {state.status === "ok" && state.ranked.length === 0 && (
          <p className="stats-msg">No article views recorded yet.</p>
        )}

        {state.status === "ok" && state.ranked.length > 0 && (
          <>
            <p className="stats-total">{total} total views</p>
            <div className="stats-list">
              {state.ranked.map((r) => (
                <div className="stats-row" key={r.slug}>
                  <div className="stats-row-head">
                    <span className="stats-row-title">{titleFor(r.slug)}</span>
                    <span className="stats-row-count">{r.views}</span>
                  </div>
                  <div className="stats-bar-track">
                    <div
                      className="stats-bar-fill"
                      style={{ width: `${(r.views / max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Stats;
