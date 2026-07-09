import React from "react";
import "./VideoEmbed.css";

// Renders a responsive player for a YouTube / Vimeo / direct video URL.
// Drop a URL into an article's `video` field (or use <VideoEmbed url="..."/> anywhere).
const toEmbed = (url) => {
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
  );
  if (yt) return { type: "iframe", src: `https://www.youtube.com/embed/${yt[1]}` };

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return { type: "iframe", src: `https://player.vimeo.com/video/${vimeo[1]}` };

  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) return { type: "file", src: url };

  // Unknown host — fall back to an iframe and let the provider handle it.
  return { type: "iframe", src: url };
};

const VideoEmbed = ({ url }) => {
  if (!url) return null;
  const { type, src } = toEmbed(url);
  return (
    <div className="video-embed">
      {type === "file" ? (
        <video src={src} controls playsInline />
      ) : (
        <iframe
          src={src}
          title="FinTeam One video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoEmbed;
