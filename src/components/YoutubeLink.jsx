import { useState } from "react";
import { getYouTubeId } from "../utils/youtube";
import "../styles/YoutubeLink.css";
import { FaYoutube } from "react-icons/fa";

export default function YouTubePreview({ url, title }) {
  const videoId = getYouTubeId(url);
  const [open, setOpen] = useState(false);

  if (!videoId) return null;

  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <>
      <button className="yt-card animated-on-scroll" onClick={() => setOpen(true)}>
        <img src={thumbnail} alt={title} className="yt-thumb" />
        <span className="yt-play">▶</span>
        {title && <span className="yt-title"><div className="ytb-icon"><FaYoutube /> </div>{title}</span>}
      </button>

      {open && (
        <div className="yt-overlay" onClick={() => setOpen(false)}>
          <div className="yt-modal" onClick={(e) => e.stopPropagation()}>
            <button className="yt-close" onClick={() => setOpen(false)}>✕</button>

            <div className="yt-video">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title || "YouTube video"}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
