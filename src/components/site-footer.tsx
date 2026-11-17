import Link from "next/link";
import Image from "next/image";

import { footerGroups } from "@/lib/site";

export function SiteFooter(){
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand brand-footer" aria-label="HDIP home">
            <span className="brand-mark"><Image src="/hdip-mark.svg" alt="" width={44} height={34}/></span>
            <span className="brand-word">HDIP<span className="brand-period">.</span></span>
          </Link>
          <p>Identity infrastructure built around the person.</p>
          <Link href="/resources/vision" className="footer-vision">The thinking behind HDIP</Link>
        </div>
        <div className="footer-groups">
          {footerGroups.map(group=>(
            <div className="footer-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(([label,href])=>(
                <Link href={href} key={href+label}>{label}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} HDIP.</span>
      </div>
    </footer>
  );
}
