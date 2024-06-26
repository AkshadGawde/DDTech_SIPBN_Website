import Link from "next/link";
import { useRouter } from "next/router";

const Nav = ({ activeLink }) => {
  return (
    <nav>
      <Link href="/" className={activeLink === "/" ? "activeLink" : ""}>
        Home
      </Link>
      <Link
        href="/agency"
        className={activeLink === "/agency" ? "activeLink" : ""}
      >
        About Us
      </Link>
      <Link href="/team" className={activeLink === "/team" ? "activeLink" : ""}>
        CapTech 2024
      </Link>
      <Link
        href="/services"
        className={activeLink === "/services" ? "activeLink" : ""}
      >
        CapTech 2023
      </Link>
      <Link
        href="/showcase"
        className={activeLink === "/showcase" ? "activeLink" : ""}
      >
        Events
      </Link>
      <Link
        href="/contact"
        className={activeLink === "/contact" ? "activeLink" : ""}
      >
        Contact Us
      </Link>
      <button className="button-primary">Apply for Membership</button>
    </nav>
  );
};

export default Nav;
