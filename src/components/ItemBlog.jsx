import React from "react";
import resolveAsset from "../utils/assets";
import "../styles/ItemBlog.css";

function ItemBlog(props) {
    return (
        <div className={`item-blog-card`}>
            <div className="item-blog-top">
                <div className="item-blog-chips">
                    {props.categoria ? <span className="chip chip-muted">{props.categoria}</span> : null}
                    {Array.isArray(props.etiquetas) && props.etiquetas.slice(0, 2).map((tag) => (
                        <span key={tag} className="chip chip-muted">{tag}</span>
                    ))}
                </div>

                <h4 className="item-blog-title">{props.titulo}</h4>
                {props.resumen ? <p className="item-blog-desc">{props.resumen}</p> : null}
            </div>

            <div className="item-blog-media">
                {(() => {
                    const src = props.imagen || props.video;
                    if (!src) return null;
                    const resolved = resolveAsset(src);
                    const isMp4 = typeof src === "string" && src.toLowerCase().endsWith(".mp4");
                    return isMp4 ? (
                        <video
                            src={resolved}
                            className="item-blog-image"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            aria-label={props.titulo}
                        />
                    ) : (
                        <img src={resolved} alt={props.titulo} className="item-blog-image" />
                    );
                })()}
                <button className="item-blog-cta" disabled aria-label="Leer más">Leer más</button>
            </div>

            <div className="item-blog-meta">
                {props.fecha ? <span className="meta-date">{props.fecha}</span> : null}
                {props.lecturaMinutos ? <span className="meta-mins">{props.lecturaMinutos} min</span> : null}
            </div>
        </div>
    );
 }

export default ItemBlog;