import { Hero } from "@/sections";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SIPBN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Sydney Investors, Professionals and Business Networking Group Incorporated (SIPBN)" />
        <meta name="keywords" content="Innovation, Summit, Technology, Leadership, Collaboration, Networking, Future-focused, Funding, Equity, Business match making, Policy, Thought leadership, Venture, Debt Funding, Transformation, Private Equity, Empowerment, Pitching sessions, Advancement, Private Capital, dealmaking" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="SIPBN" />
        <meta property="og:description" content="Sydney Investors, Professionals and Business Networking Group Incorporated (SIPBN)" />
        <meta property="og:url" content="https://sipbn.com.au/" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/p/AF1QipMdzWweOhF8941oxkqrc6p0SBT2Sp4XOK-SlXwY=s1360-w1360-h1020" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SIPBN" />
        <meta name="twitter:description" content="Sydney Investors, Professionals and Business Networking Group Incorporated (SIPBN)" />
        <meta name="twitter:image" content="https://lh3.googleusercontent.com/p/AF1QipMdzWweOhF8941oxkqrc6p0SBT2Sp4XOK-SlXwY=s1360-w1360-h1020" />
       
      </Head>
      
      <Hero />
    </>
  );
}
