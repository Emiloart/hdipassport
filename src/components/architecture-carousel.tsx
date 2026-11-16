"use client";

import { useCallback, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Fingerprint,
  Network,
  ScanFace,
  ShieldCheck,
} from "lucide-react";

const layers = [
  {
    title: "Identity layer",
    detail: "Identity anchor, keys and resolution",
    description: "Establishes the identity reference and the key relationships used to resolve and protect it.",
    Icon: Fingerprint,
  },
  {
    title: "Credential layer",
    detail: "Issuer-backed, verifiable claims",
    description: "Structures claims as credentials that can be issued, held and presented for verification.",
    Icon: BadgeCheck,
  },
  {
    title: "Trust and authorization",
    detail: "Accreditation, templates and consent",
    description: "Defines who may participate, what a request is allowed to ask for and how consent is applied.",
    Icon: ShieldCheck,
  },
  {
    title: "Verification layer",
    detail: "Proof validation and scoped disclosure",
    description: "Checks presented evidence against the relevant requirements while limiting disclosure to the requested scope.",
    Icon: ScanFace,
  },
  {
    title: "Applications and federation",
    detail: "Wallets, verifiers and jurisdictions",
    description: "Connects holders, institutions and jurisdictional systems through interoperable applications.",
    Icon: Network,
  },
];

export default function ArchitectureCarousel() {
  const viewport = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    const element = viewport.current;
    const slides = element?.querySelectorAll<HTMLElement>(".architecture-slide");
    if (!element || !slides?.length) return;

    const boundedIndex = Math.max(0, Math.min(index, slides.length - 1));
    const target = slides[boundedIndex];
    element.scrollTo({
      left: target.offsetLeft - slides[0].offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
    setActiveIndex(boundedIndex);
  }, []);

  const handleScroll = useCallback(() => {
    const element = viewport.current;
    const slides = element?.querySelectorAll<HTMLElement>(".architecture-slide");
    if (!element || !slides?.length) return;

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;
    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - slides[0].offsetLeft - element.scrollLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });
    setActiveIndex(nearestIndex);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(layers.length - 1);
    }
  }, [activeIndex, goTo]);

  return (
    <div className="architecture-carousel" role="region" aria-roledescription="carousel" aria-label="HDIP architecture layers">
      <div className="architecture-carousel-top">
        <p className="architecture-crosscutting">
          <span className="architecture-crosscutting-mark" aria-hidden="true" />
          Privacy, security and governance operate across every layer.
        </p>
        <div className="architecture-carousel-navigation">
          <span className="architecture-carousel-count" aria-live="polite">
            <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
            <span>/ {String(layers.length).padStart(2, "0")}</span>
          </span>
          <div className="architecture-controls" aria-label="Architecture carousel controls">
            <button
              className="architecture-control"
              type="button"
              aria-label="Previous architecture layer"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
            >
              <ArrowLeft size={17} />
            </button>
            <button
              className="architecture-control"
              type="button"
              aria-label="Next architecture layer"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === layers.length - 1}
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>

      <div
        className="architecture-carousel-viewport"
        ref={viewport}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Browse the five architecture layers"
      >
        {layers.map(({ title, detail, description, Icon }, index) => (
          <article
            className="architecture-slide"
            key={title}
            role="group"
            aria-roledescription="slide"
            aria-label={`Layer ${index + 1} of ${layers.length}: ${title}`}
          >
            <div className="architecture-slide-header">
              <div className="architecture-slide-icon"><Icon size={22} strokeWidth={1.7} /></div>
              <span className="architecture-slide-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="architecture-slide-copy">
              <h3>{title}</h3>
              <p className="architecture-slide-detail">{detail}</p>
              <p className="architecture-slide-description">{description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="architecture-carousel-bottom">
        <div className="architecture-carousel-progress" aria-hidden="true">
          <span style={{ width: `${((activeIndex + 1) / layers.length) * 100}%` }} />
        </div>
        <div className="architecture-carousel-dots" role="group" aria-label="Choose an architecture layer">
          {layers.map((layer, index) => (
            <button
              key={layer.title}
              type="button"
              className={`architecture-carousel-dot${activeIndex === index ? " is-active" : ""}`}
              aria-label={`Go to ${layer.title}`}
              aria-current={activeIndex === index ? "step" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
