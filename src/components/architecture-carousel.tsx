import {
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
  return (
    <div className="architecture-carousel architecture-overview-list">
      <div className="architecture-carousel-viewport" role="list" aria-label="HDIP architecture layers">
        {layers.map(({ title, detail, description, Icon }) => (
          <article className="architecture-slide" key={title} role="listitem">
            <div className="architecture-slide-header">
              <div className="architecture-slide-icon"><Icon size={22} strokeWidth={1.7} /></div>
            </div>
            <div className="architecture-slide-copy">
              <h3>{title}</h3>
              <p className="architecture-slide-detail">{detail}</p>
              <p className="architecture-slide-description">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
