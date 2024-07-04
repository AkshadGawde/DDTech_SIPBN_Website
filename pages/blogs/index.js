import React from "react";
import { Title, TitleSm } from "@/components/common/Title";
import Link from "next/link";

const Section = ({ title, children }) => (
  <>
    <TitleSm title={title} className="section-title" />
    <div className="desc-section">{children}</div>
  </>
);

const Blog = () => {
  return (
    <section className="blog-section bg-top">
      <div className="container">
        <Title title="Special Edition: Federal Budget Highlights" />
        <p className="blog-description">
          In this special edition, we bring you comprehensive coverage of the
          recent Federal Budget and its significant measures that align with the
          interests of our members and partners. This budget introduces several
          initiatives to alleviate the cost of living pressures, boost economic
          growth, and foster innovation across various sectors. Here’s a
          detailed breakdown of what this means for you and our community.
        </p>

        <Section title="Key Highlights of the Federal Budget">
          <section
            title="Cost of Living Relief"
            points={[
              "Energy Bill Rebate: Households will benefit from a $300 rebate on energy bills.",
              "Rental Assistance: Enhanced rental assistance to ease financial burdens.",
            ]}
          />
          <Section
            title="Taxation and Superannuation"
            points={[
              "Stage 3 Tax Cuts: Effective July 1, 2024, taxpayers will save on taxes based on their marginal taxable income, increasing disposable incomes and stimulating consumer spending.",
              "Superannuation Contributions: From July 1, 2024, higher contributions to superannuation funds will be allowed, injecting additional funds into self-managed super funds and boosting investment activity.",
            ]}
          />
          <Section
            title="Manufacturing and Clean Energy Initiatives"
            points={[
              "Future Made in Australia Program: $23 billion allocated to encourage manufacturing and private sector investment to achieve net zero emissions.",
              "Critical Minerals: $7 billion Production Tax Incentive over eleven years to improve manufacturing and supply chain capabilities.",
              "Hydrogen Industry: $6.7 billion over ten years for a Hydrogen Production Tax Incentive, supporting a competitive hydrogen industry.",
              "Solar Panels and Batteries: $1.4 billion to incentivize production, presenting significant investment opportunities.",
            ]}
          />
          <Section
            title="Medical Research and Healthcare"
            points={[
              "Medical Research Funding: $1.4 billion investment into the Medical Research Future Fund to advance medical innovations.",
            ]}
          />
          <Section
            title="Workforce and Migration"
            points={[
              "Net Migration: Reduction from 528,000 in 2022-2023 to 260,000 in 2024-2025, with $218.4 million allocated for workforce and trade partnerships.",
              "Regional Development: 33,000 places allocated to regional visas to support regional growth.",
              "Temporary Skill Shortage Visa: Work experience requirement reduced from two years to one year, effective November 2024.",
            ]}
          />
          <Section
            title="Affordable Housing"
            points={[
              "Concessional Finance: $1.9 billion investment in concessional finance for community housing providers to boost affordable and social housing projects.",
            ]}
          />
          <Section
            title="Foreign Investment Transparency"
            points={[
              "Capital Gains Tax: Changes to the foreign resident capital gains tax framework to enhance transparency in foreign investment and tax rules.",
            ]}
          />
          <Section
            title="Support for Small Businesses"
            points={[
              "Asset Write-Off: Instant asset write-off for small businesses extended until June 30, 2025, allowing deductions for eligible assets up to $20,000.",
            ]}
          />
        </Section>

        <div className="section-footer">
          <p className="blog-description">
            <strong>SIPBN Inc.’s Commitment:</strong> At SIPBN Inc., we are
            dedicated to leveraging these budget measures to drive progress and
            create opportunities for our community. Our mission is to provide
            live opportunities and connections in Australia and overseas for our
            members, investors, founders, partners, and associates.
          </p>
          <p className="blog-description">
            <strong>Upcoming Events and Opportunities:</strong> Stay tuned for
            our upcoming Economic Update Event by SIPBN on 28th June 2024 at the
            Sydney Startup Hub. Join us as we delve into how these budget
            measures can benefit you and your business. Don’t miss this
            opportunity to connect with industry leaders and peers.
          </p>
          <p className="blog-description">
            <strong>Contact Us:</strong> For more information on how SIPBN Inc.
            can help you navigate these new opportunities, please visit our
            website or contact us directly.
          </p>
          <ul className="contact-info">
            <li>
              Website: <a href="https://www.sipbn.com.au">www.sipbn.com.au</a>
            </li>
            <li>
              Email: <a href="mailto:info@sipbn.com.au">info@sipbn.com.au</a>
            </li>
            <li>Phone: +61 2 9659 4339</li>
          </ul>
          <p className="blog-description">
            Thank you for being a valued member of SIPBN Inc. Together, we can
            harness these initiatives to foster a thriving and innovative
            future.
          </p>
          <p className="blog-description">
            <strong>Follow Us on Social Media:</strong>
            <br />
            <a href="https://au.linkedin.com/company/sydney-investors-professionals-and-business-networking-group-sipbn">
              LinkedIn
            </a>
            ,&nbsp;
            <a href="https://www.instagram.com/captech_events/">Instagram</a>
            ,&nbsp;
            <a href="https://www.facebook.com/SIPBNGroup/">Facebook</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
