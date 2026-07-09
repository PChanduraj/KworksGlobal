import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getArticle } from "../data/articles";
import { trackArticleView } from "../utils/track";
import VideoEmbed from "./VideoEmbed";
import icon from "../image/finteam-icon.png";
import "./Article.css";

const Article = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = getArticle(slug);

  useEffect(() => {
    if (article) trackArticleView(article.slug, article.title);
  }, [article]);

  if (!article) {
    return (
      <div className="article-container">
        <p className="article-notfound">
          Article not found.{" "}
          <span onClick={() => navigate("/resources")}>Back to Resources</span>
        </p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Finteam - ${article.title}`}</title>
        <meta name="description" content={article.excerpt} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`/resources/${article.slug}`} />
      </Helmet>

      <div className="article-hero">
        <img className="article-hero-icon" src={icon} alt="" aria-hidden="true" />
        <div className="article-hero-inner">
          <div
            className="article-back article-back--light"
            onClick={() => navigate("/resources")}
          >
            ← All resources
          </div>
          {article.category && (
            <span className="article-eyebrow">{article.category}</span>
          )}
          <h1 className="article-hero-title">{article.title}</h1>
          <p className="article-hero-meta">
            {article.author} · {article.date} · {article.readingTime}
          </p>
        </div>
      </div>

      <div className="article-container">
        {article.video && (
          <div className="article-video">
            <VideoEmbed url={article.video} />
          </div>
        )}

        <article className="article-body">
          {article.body.map((block, i) =>
            block.h ? <h2 key={i}>{block.h}</h2> : <p key={i}>{block.p}</p>
          )}
        </article>

        <div className="article-cta">
          <p>Want this kind of clarity for your finance function?</p>
          <div
            className="article-cta-btn"
            onClick={() => navigate("/contact-us")}
          >
            Talk to us
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
