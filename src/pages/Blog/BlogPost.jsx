import { useParams, Navigate, Link } from "react-router-dom";
import posts from "../../json/articulos.json";
import resolveAsset from "../../utils/assets";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams();
  const numericId = Number(slug);
  const post = posts.blogs.find((p) => p.id === numericId || String(p.id) === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <article className="blog-post">
      <div className="blog-post-actions">
        <Link to="/blog" className="back-to-blog"> <FaArrowLeftLong /> Regresar</Link>
      </div>
      <h1>{post.titulo}</h1>
      <h4>Fecha de publicación: {post.fecha}</h4>
      {(() => {
        const src = post.imagen || post.video || post.coverUrl;
        if (!src) return null;
        const resolved = resolveAsset(src);
        const isMp4 = typeof src === "string" && src.toLowerCase().endsWith(".mp4");
        return isMp4 ? (
          <video
            src={resolved}
            className="blog-post-media"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={post.titulo}
          />
        ) : (
          <img src={resolved} alt={post.titulo} className="blog-post-media" />
        );
      })()}
      <div className="blog-post-content">{post.contenido}</div>
    </article>
  );
}
