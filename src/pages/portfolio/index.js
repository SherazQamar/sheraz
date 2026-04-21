import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track which project section is in view while scrolling
  useEffect(() => {
    const observers = [];
    dataportfolio.forEach((_, i) => {
      const el = sectionRefs.current[i];
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i);
            el.classList.add("po_section_visible");
          }
        },
        { threshold: 0.4, rootMargin: "0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <HelmetProvider>
      <div className="portfolio-wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Container className="portfolio-header">
          <h1 className="display-4 mb-4"> Portfolio </h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Container>

        <div className="po_sections">
          {dataportfolio.map((data, i) => {
            const isImageLeft = i % 2 === 0; // odd projects: image left, details right

            return (
              <section
                key={i}
                ref={(el) => (sectionRefs.current[i] = el)}
                className={`po_section ${i === activeIndex ? "po_section_active" : ""}`}
              >
                <div className={`po_section_inner ${isImageLeft ? "po_image_left" : "po_image_right"}`}>
                  <div className="po_section_image">
                    <a href={data.link} target="_blank" rel="noopener noreferrer">
                      <img src={data.img} alt={data.description} />
                    </a>
                  </div>
                  <div className="po_section_details">
                    <h3 className="po_project_title">{(data.description.split(/ — | - /)[0] || data.description).trim()}</h3>
                    <p className="po_project_desc">{data.description}</p>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="po_project_link"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </HelmetProvider>
  );
};
