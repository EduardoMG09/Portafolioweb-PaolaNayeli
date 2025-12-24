import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FcIdea } from "react-icons/fc";
import { VscGraph } from "react-icons/vsc";
import { FiTarget } from "react-icons/fi";

import "./Blog.css";
import data from "../../json/articulos.json";
import ItemBlog from "../../components/ItemBlog.jsx";

gsap.registerPlugin(ScrollTrigger);

function Blog() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation for header (always visible, not scroll-triggered)
      gsap.from(containerRef.current?.querySelectorAll(".blog-header .blog-title, .blog-header .icon-wrapper"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Animate each card individually to avoid initial hiding of all
      gsap.utils.toArray(containerRef.current?.querySelectorAll(".item-blog-card")).forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
          immediateRender: false,
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="container-main" ref={containerRef}>
      <div className="blog-container" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="blog-header">
          <h2 className="blog-title">
            Descubre estrategias
            <span className="icon-wrapper icon-idea">
              <FcIdea />
            </span>
            probadas, casos
            <span className="icon-wrapper icon-blue">
              <VscGraph />
            </span>
            reales, y consejos
            <span className="icon-wrapper icon-coral">
              <FiTarget />
            </span>
            prácticos de más de 15 años en docencia
          </h2>
        </div>

        <div className="articles-container" ref={(el) => (sectionsRef.current[1] = el)}>
          <h3>Artículos</h3>
          <div className="articles">
                {data.blogs.map((post) => (
                    <ItemBlog
                        key={post.id}
                        titulo={post.titulo}
                        resumen={post.resumen}
                        fecha={post.fecha}
                        categoria={post.categoria}
                        imagen={post.imagen}
                        lecturaMinutos={post.lecturaMinutos}
                        />
                ))}
            </div>
        </div>
      </div>

    </div>
  );
}

export default Blog;
