import type { Metadata,Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata:Metadata={
metadataBase:new URL("https://hdipassport.com"),
title:{default:"HDIP | Identity infrastructure built around the person",template:"%s | HDIP"},
description:"A hybrid decentralized identity passport and trust infrastructure platform. One identity, reusable credentials and purpose-bound verification.",
applicationName:"HDIP",authors:[{name:"Emiloart",url:"https://github.com/Emiloart"}],creator:"Emiloart",publisher:"Emiloart",
openGraph:{type:"website",siteName:"HDIP",title:"HDIP | Identity infrastructure built around the person",description:"One identity. Reusable credentials. Purpose-bound verification.",url:"https://hdipassport.com"},
twitter:{card:"summary_large_image",title:"HDIP | Identity infrastructure built around the person",description:"One identity. Reusable credentials. Purpose-bound verification."},
robots:{index:true,follow:true}
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#071a24",colorScheme:"light"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader/><main id="main-content">{children}</main><SiteFooter/></body></html>}
