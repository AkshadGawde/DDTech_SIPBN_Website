import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const router = useRouter();
  const navRef = useRef(null);

  useEffect(() => {
    setActiveLink(router.pathname);

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [router.pathname]);

  const handleLinkClick = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  const handleDropdownHover = (state) => {
    setDropdownOpen(state);
  };

  return (
    <header>
      <Link href="/">
        <img
          className="sipLogo"
          src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719265063/SIPBN/acssi7dnvshtv6u9igie.png"
          alt="logo"
          height={"60px"}
        />
      </Link>
      <div className="container">
        <nav ref={navRef} className={open ? "openMenu" : "closeMenu"}>
          <Link
            href="/"
            onClick={handleLinkClick}
            className={activeLink === "/" ? "activeLink" : ""}
          >
            Home
          </Link>

          <div
            className="dropdown"
            onMouseEnter={() => handleDropdownHover(true)}
            onMouseLeave={() => handleDropdownHover(false)}
          >
            <Link
              href="/agency"
              onClick={handleLinkClick}
              className={activeLink === "/agency" ? "activeLink" : ""}
            >
              About
            </Link>

            {dropdownOpen && (
              <div className="dropdown-content">
                <Link href="/advisory_board" onClick={handleLinkClick}>
                  Advisory Board
                </Link>
                <Link href="/executive_board" onClick={handleLinkClick}>
                  Executive Board
                </Link>
                <Link href="/committees" onClick={handleLinkClick}>
                  Committees
                </Link>
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => handleDropdownHover(true)}
            onMouseLeave={() => handleDropdownHover(false)}
          >
            <Link
              href="/team"
              onClick={handleLinkClick}
              className={activeLink === "/team" ? "activeLink" : ""}
            >
              #CapTech2024
            </Link>

            {dropdownOpen && (
              <div className="dropdown-content">
                <Link href="/patrons" onClick={handleLinkClick}>
                   Patrons
                </Link>
                <Link href="/speakers" onClick={handleLinkClick}>
                   Panelists and Speakers
                </Link>
                <Link href="/captech2023" onClick={handleLinkClick}>
                  #CapTech2023 Highlights
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/showcase"
            onClick={handleLinkClick}
            className={activeLink === "/showcase" ? "activeLink" : ""}
          >
            Events
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdiA6YPJaorTgxsvt-ZMMePCMLIbKnI3fS971sxMZeSaPewoQ/viewform"
            onClick={handleLinkClick}
            className={activeLink === "/showcase" ? "activeLink" : ""}
          >
            Global Pitching
          </a>
          <Link
            href="#"
            onClick={handleLinkClick}
            className={activeLink === "/showcase" ? "activeLink" : ""}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className={activeLink === "/contact" ? "activeLink" : ""}
          >
            Contact Us
          </Link>
          <button className="button-primary">Apply for Membership</button>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
