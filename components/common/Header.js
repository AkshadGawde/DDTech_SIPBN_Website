import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

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
        });
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
    });
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
            src="/images/sipbnLogo.png"
            alt="logo"
            height="60"
          />
        </Link>
        <nav className="container ">
          <nav ref={navRef} className={open ? "openMenu" : "closeMenu"}>
            <Link
              href="/"
              onClick={handleLinkClick}
              className={activeLink === "/" ? "activeLink" : ""}
            >
              Home
            </Link>
            <div className={`dropdown ${dropdownOpen.about ? "open" : ""}`}>
              <Link
                href="/about"
                onClick={handleLinkClick}
                onMouseEnter={() => toggleDropdown("about")}
                className={activeLink === "/about" ? "activeLink" : ""}
              >
                About
              </Link>
              <span
                className="dropdown-arrow"
                onClick={() => toggleDropdown("about")}
              >
                ▼
              </span>
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

            <div className={`dropdown ${dropdownOpen.captech ? "open" : ""}`}>
              <Link
                href="/captech"
                onClick={handleLinkClick}
                className={activeLink === "/captech" ? "activeLink" : ""}
              >
                #CapTech2024
              </Link>
              <span
                className="dropdown-arrow"
                onClick={() => toggleDropdown("captech")}
              >
                ▼
              </span>
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
                  <Link href="/captech2022" onClick={handleLinkClick}>
                    #CapTech2022 Highlights
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/IndiaDelegation"
              onClick={handleLinkClick}
              className={activeLink === "/IndiaDelegation" ? "activeLink" : ""}
            >
              India Delegation
            </Link>

            <Link
              href="/events"
              onClick={handleLinkClick}
              className={activeLink === "/events" ? "activeLink" : ""}
            >
              Events
            </Link>

            <div
              className={`dropdown ${
                dropdownOpen.globalPitching ? "open" : ""
              }`}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdiA6YPJaorTgxsvt-ZMMePCMLIbKnI3fS971sxMZeSaPewoQ/viewform"
                onClick={handleLinkClick}
                className={activeLink === "/glob" ? "activeLink" : ""}
              >
                Global Pitching
              </a>
              <span
                className="dropdown-arrow"
                onClick={() => toggleDropdown("globalPitching")}
              >
                ▼
              </span>
              {dropdownOpen.globalPitching && (
                <div className="dropdown-content">
                  <Link href="/companies" onClick={handleLinkClick}>
                    Presenting Companies
                  </Link>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdiA6YPJaorTgxsvt-ZMMePCMLIbKnI3fS971sxMZeSaPewoQ/viewform"
                    onClick={handleLinkClick}
                  >
                    Apply to pitch
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/success"
              onClick={handleLinkClick}
              className={activeLink === "/success" ? "activeLink" : ""}
            >
              Success Stories
            </Link>

            <div
              className={`dropdown ${dropdownOpen.contact ? "open" : ""}`}
              id="contactUs"
            >
              <Link
                href="/contact"
                onClick={handleLinkClick}
                style={{ marginBottom: "0px" }}
                className={activeLink === "/contact" ? "activeLink" : ""}
              >
                Contact Us
              </Link>
              <span
                className="dropdown-arrow"
                onClick={() => toggleDropdown("contact")}
              >
                ▼
              </span>
              {dropdownOpen.contact && (
                <div className="dropdown-content">
                  <Link
                    href="/blogs"
                    onClick={handleLinkClick}
                    style={{ marginBottom: "0px" }}
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>

            <a
              href="/ticket-purchase?eventId=iaEHed2PE5Te0BmBwku3"
              className="button-primary"
            >
              Buy Tickets
            </a>
          </nav>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </header>
    </div>
  );
};

export default Header;
