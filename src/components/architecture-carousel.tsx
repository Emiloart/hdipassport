"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck, Fingerprint, Network, ScanFace, ShieldCheck } from "lucide-react";

const layers = [
  { title: "Identity layer", detail: "Identity anchor, keys and resolution", Icon: Fingerprint },
  { title: "Credential layer", detail: "Issuer-backed, verifiable claims", Icon: BadgeCheck },
  { title: "Trust and authorization", detail: "Accreditation, templates and consent", Icon: ShieldCheck },
  { title: "Verification layer", detail: "Proof validation and scoped disclosure", Icon: ScanFace },
  { title: "Applications and federation", detail: "Wallets, verifiers and jurisdictions", Icon: Network },
];

export default function ArchitectureCarousel() {
  const viewport = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const element = viewport.current;
    if (!element) return;
    const slide = element.querySelector<HTMLElement>(".architecture-slide");
    const distance = slide ? slide.offsetWidth + 16 : element.clientWidth * 0.82;
    element.scrollBy({ left: direction * distance, behavior: "smooth" });
  }

  return (
    <div className="architecture-carousel">
      <div className="architecture-carousel-top">
        <p className="architecture-crosscutting">Privacy, security and governance operate across every layer.</p>
        <div className="architecture-controls" aria-label="Architecture carousel controls">
          <button className="button button-outline architecture-control" type="button" aria-label="Previous architecture layer" onClick={() => move(-1)}><ArrowLeft size={17} /></button>
          <button className="button button-outline architecture-control" type="button" aria-label="Next architecture layer" onClick={() => move(1)}><ArrowRight size={17} /></button>
        </div>
      </div>
      <div className="architecture-carousel-viewport" ref={viewport} aria-label="HDIP architecture layers" tabIndex={0}>
        {layers.map(({ title, detail, Icon }) => (
          <article className="architecture-slide" key={title}>
            <div className="architecture-slide-icon"><Icon size={23} /></div>
            <h3>{title}</h3>
            <p>{detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
