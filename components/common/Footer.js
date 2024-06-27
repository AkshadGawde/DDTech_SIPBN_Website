import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

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
    <img
      src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719265063/SIPBN/acssi7dnvshtv6u9igie.png"
      alt="logo"
      height={"60px"}
    />
    <p>
      Questions? <br /> Reach us at:
    </p>
    <h3>info@sipbn.com.au</h3>
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
      <Link href="/showcase">#CapTech 2024</Link>
    </li>
    <li>
      <Link href="/services">#CapTech2023</Link>
    </li>
    <li>
      <Link href="/showcase">Events</Link>
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
