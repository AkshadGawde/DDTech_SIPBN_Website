import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-4">
          <CompanyInfo />
          <CompanyLinks />
          {/* <ServiceLinks /> */}
          <SocialLinks />
          <NewsLetter />
        </div>
      </div>
    </footer>
  );
};

const CompanyInfo = () => (
  <div className="company-info">
    <img src="/images/sipbnLogo.png" alt="logo" height={"80px"} />
    <p>Questions? Reach us at:</p>
    <h3>info@sipbn.com.au</h3>
    <a
      href="https://forms.gle/GLbvrFiTyUjfmadF7"
      target="_blank"
      rel="noopener noreferrer"
      className="button-primary"
    >
      {" "}
      Apply for Membership
    </a>
  </div>
);

const CompanyLinks = () => (
  <ul className="footer-links">
    <h3>COMPANY</h3>

    <li>
      <Link href="/about">About Us</Link>
    </li>
    <li>
      <Link href="/captech">#CapTech 2024</Link>
    </li>
    <li>
      <Link href="/captech2023">#CapTech2023</Link>
    </li>
    <li>
      <Link href="/captech2022">#CapTech2022</Link>
    </li>
    <li>
      <Link href="/events">Events</Link>
    </li>
    <li>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdiA6YPJaorTgxsvt-ZMMePCMLIbKnI3fS971sxMZeSaPewoQ/viewform">
        Global Pitching
      </Link>
    </li>
    <li>
      <Link href="/contact">Contact Us</Link>
    </li>
  </ul>
);

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append("EMAIL", email);

    try {
      const response = await fetch(
        "https://sipbn.us6.list-manage.com/subscribe/post?u=a5985927d751cfeae7bafd594&id=cbc00a2d3d&f_id=0011b3e2f0",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      if (response) {
        toast.success("Subscription successful!");
        setEmail("");
        console.log(response);
      } else {
        toast.error("There was an issue with your subscription.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="newsletter-container">
      <Toaster />
      <h2>Subscribe to Our Newsletter</h2>
      <p>Get the latest updates and offers.</p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="EMAIL"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={submitting}
        />
        <button type="submit" disabled={submitting}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

// const ServiceLinks = () => (
//   <ul className="footer-links">
//     <h3>SERVICES</h3>
//     <li>
//       <Link href="/services/web-design">Web Design & Development</Link>
//     </li>
//     <li>
//       <Link href="/services/branding">Branding & Creative Services</Link>
//     </li>
//     <li>
//       <Link href="/services/digital-marketing">Digital Marketing</Link>
//     </li>
//     <li>
//       <Link href="/services/e-commerce">E-Commerce</Link>
//     </li>
//   </ul>
// );

const SocialLinks = () => (
  <div className="social-links">
    <h3>CONNECT</h3>
    <ul>
      <li>
        <Link
          href="https://www.facebook.com/share/FkeVvzovKpn77kQy/?mibextid=qi2Omg

"
          aria-label="Facebook"
        >
          <BsFacebook size={25} />
          <span>Facebook</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://www.instagram.com/captech_events?igsh=b3NqbWIxOGd6dDU0
"
          aria-label="Instagram"
        >
          <AiFillInstagram size={25} />
          <span>Instagram</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/company/sydney-investors-professionals-and-business-networking-group-sipbn/
"
          aria-label="LinkedIn"
        >
          <AiFillLinkedin size={25} />
          <span>Linkedin</span>
        </Link>
      </li>
      <Link
        href="https://youtube.com/@sipbn?si=qtTIuexllZ9Sv8f7"
        aria-label="Youtube"
      >
        <AiFillYoutube size={25} />
        <span>Youtube </span>
      </Link>
      <li></li>
    </ul>
  </div>
);

export default Footer;
