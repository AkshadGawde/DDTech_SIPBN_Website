import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    about: false,
    captech: false,
    contact: false,
    globalPitching: false,
  });

  const router = useRouter();
  const navRef = useRef(null);

  useEffect(() => {
    setActiveLink(router.pathname);

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
        setDropdownOpen({
          about: false,
          captech: false,
          contact: false,
          globalPitching: false,
        }); // Reset contact dropdown state
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [router.pathname]);

  const handleLinkClick = () => {
    setOpen(false);
    setDropdownOpen({
      about: false,
      captech: false,
      contact: false,
      globalPitching: false,
    }); // Reset contact dropdown state
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div>
      <div className="marquee-holder"></div>
      <header>
        <Link href="/">
          <img
            className="sipLogo"
            src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719933691/SIPBN/ll3eflx5ib4bnsjmpn8z.png "
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
            <div className="dropdown">
              <Link
                href="/agency"
                onClick={handleLinkClick}
                className={activeLink === "/agency" ? "activeLink" : ""}
              >
                About
              </Link>
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => toggleDropdown("about")}
              />

              {dropdownOpen.about && (
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
            <div className="dropdown">
              <Link
                href="/captech"
                onClick={handleLinkClick}
                className={activeLink === "/captech" ? "activeLink" : ""}
              >
                #CapTech2024
              </Link>
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => toggleDropdown("captech")}
              />

              {dropdownOpen.captech && (
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
              className={activeLink === "/glob" ? "activeLink" : ""}
            >
              Global Pitching
            </a>

            <Link
              href="/success"
              onClick={handleLinkClick}
              className={activeLink === "/success" ? "activeLink" : ""}
            >
              Success Stories
            </Link>
            <div className="dropdown">
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className={activeLink === "/contact" ? "activeLink" : ""}
              >
                Contact Us
              </Link>
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => toggleDropdown("contact")}
              />

              {dropdownOpen.contact && (
                <div className="dropdown-content">
                  <Link href="/blogs" onClick={handleLinkClick}>
                    Blog
                  </Link>
                </div>
              )}
            </div>
            <a
              href="https://forms.gle/GLbvrFiTyUjfmadF7"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              {" "}
              Apply for Membership
            </a>
          </nav>
        </div>
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </header>
    </div>
  );
};

export default Header;
