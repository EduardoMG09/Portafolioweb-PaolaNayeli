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
                {props.imagen ? (
                    <img src={resolveAsset(props.imagen)} alt={props.titulo} className="item-blog-image" />
                ) : null}
                <button className="item-blog-cta" aria-label="Leer más">Leer más</button>
            </div>

            <div className="item-blog-meta">
                {props.fecha ? <span className="meta-date">{props.fecha}</span> : null}
                {props.lecturaMinutos ? <span className="meta-mins">{props.lecturaMinutos} min</span> : null}
            </div>
        </div>
    );
 }

export default ItemBlog;