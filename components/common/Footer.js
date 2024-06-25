import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-4">
          <CompanyInfo />
          <CompanyLinks />
          {/* <ServiceLinks /> */}
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

const CompanyInfo = () => (
  <div className="company-info">
    <TitleLogo title="creative" caption="7" className="logo-background" />
    <p>
      Questions? Reach us <br /> Monday–Friday from 9 am to 6 pm
    </p>
    <h3>+1 001 234 5678</h3>
    <button className="button-primary">Apply for Membership</button>
  </div>
);

const CompanyLinks = () => (
  <ul className="footer-links">
    <h3>COMPANY</h3>

    <li>
      <Link href="/team">About Us</Link>
    </li>
    <li>
      <Link href="/showcase">CapTech 2024</Link>
    </li>
    <li>
      <Link href="/services">CapTech2023</Link>
    </li>
    <li>
      <Link href="/showcase">Events</Link>
    </li>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
  </ul>
);

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
  <ul className="social-links">
    <h3>CONNECT</h3>
    <li>
      <Link href="https://facebook.com" aria-label="Facebook">
        <BsFacebook size={25} />
      </Link>
    </li>
    <li>
      <Link href="https://behance.net" aria-label="Behance">
        <AiFillBehanceCircle size={25} />
      </Link>
    </li>
    <li>
      <Link href="https://instagram.com" aria-label="Instagram">
        <AiFillInstagram size={25} />
      </Link>
    </li>
    <li>
      <Link href="https://linkedin.com" aria-label="LinkedIn">
        <AiFillLinkedin size={25} />
      </Link>
    </li>
  </ul>
);

export default Footer;
