import React from "react"; // Import React
import { Title, TitleSm } from "@/components/common/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Member = ({ member }) => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <Title title={member.name} className="title-bg" />
          </div>
          <div
            className="content flex"
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            <div className="left" style={{ width: "40%", paddingTop: "1rem" }}>
              <img
                src={member.image}
                alt={member.name}
                className="round"
                style={{ width: "100%", height: "auto", borderRadius: "50%" }}
              />
              {member.link && (
                <div className="linkedin">
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              )}
            </div>

            <div className="right" style={{ width: "60%", marginLeft: "1rem" }}>
              <TitleSm title={member.title} />
              <p className="mission-p">
                {member.description.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Member;
