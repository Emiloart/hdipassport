import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound(){return <div className="not-found"><span className="eyebrow">404 / Not found</span><h1>This page isn't<br/><span>where you expected.</span></h1><p>The page may have moved, or the address may be incorrect.</p><Link href="/" className="button"><ArrowLeft size={16}/>Return home</Link></div>}
