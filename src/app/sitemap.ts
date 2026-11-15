import type { MetadataRoute } from "next";
import { pages } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap(){const base="https://hdipassport.com";const now=new Date();return [{url:base,lastModified:now,changeFrequency:"weekly",priority:1},{url:base+"/how-it-works",lastModified:now,changeFrequency:"monthly",priority:.9},{url:base+"/get-started",lastModified:now,changeFrequency:"monthly",priority:.8},...Object.keys(pages).map(path=>({url:base+"/"+path,lastModified:now,changeFrequency:"monthly" as const,priority:path.split("/").length===1?.8:.65}))]}
