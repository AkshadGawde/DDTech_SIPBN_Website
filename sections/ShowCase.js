import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const ShowCase = () => {
  return (
    <>
      <section>
        <div className="container ">
          <br />
          <Title title={"Upcoming Events"} />
          <div class="event-container">
            <div class="eventCard">
              <a href="https://events.humanitix.com/economic-update-opportunities-and-challenges">
                <img
                  className="eventImg"
                  src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719326603/homePage/tvndvw12ujvsbg0dmvaq.png"
                  alt="Event 1 Image"
                />
              </a>
              <h2 class="event-title">June 2024</h2>
              <p class="event-description">
                Economic Update - Opportunities and Challenges
              </p>
            </div>
            <div class="eventCard">
              <img
                className="eventImg"
                src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719354679/homePage/pjzjnljv4l1wxl2vfhad.png"
                alt="Event 2 Image"
              />
              <h2 class="event-title">August 2024</h2>
              <p class="event-description"> Presentation & Pitching Session.</p>
            </div>
            <div class="eventCard">
              <img
                className="eventImg"
                src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719354679/homePage/pjzjnljv4l1wxl2vfhad.png"
                alt="Event 3 Image"
              />
              <h2 class="event-title">October 2024</h2>
              <p class="event-description">Presentation & Pitching Session</p>
            </div>
            <div class="eventCard">
              <a href="https://www.eventbrite.com.au/e/#CapTech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307">
                <img
                  className="eventImg"
                  src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719326603/homePage/qo7dq9u1cfptxijtlsly.png"
                  alt="Event 1 Image"
                />
              </a>
              <h2 class="event-title">25 Nov 2024 – 27 Nov 2024</h2>
              <p class="event-description">#CapTech2024</p>
            </div>
            <div class="eventCard">
              <img
                className="eventImg"
                src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719354679/homePage/pjzjnljv4l1wxl2vfhad.png"
                alt="Event 5 Image"
              />
              <h2 class="event-title">December 2024</h2>
              <p class="event-description">Christmas Party</p>
            </div>
          </div>

          <Title title={"Past Events"} />
          <div class="event-container">
            <div class="eventCard">
              <a href="https://www.eventbrite.com.au/e/#CapTech2024-global-pitching-presenting-session-tickets-765412678927">
                <img
                  className="eventImg"
                  src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719355161/homePage/eqqseipvvxs11lsk1fj0.png"
                  alt="Event 1 Image"
                />
              </a>
              <h2 class="event-title">February 2024</h2>
              <p class="event-description">Pitching Session #CapTech2024</p>
            </div>
            <div class="eventCard">
              <a href="https://www.eventbrite.com.au/e/global-pitching-session-preliminary-round-#CapTech2023-tickets-694439807157">
                <img
                  className="eventImg"
                  src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719355161/homePage/rdvah2y9vbzr1zyjft5s.png"
                  alt="Event 2 Image"
                />
              </a>
              <h2 class="event-title">September 2023</h2>
              <p class="event-description">
                {" "}
                Global Pitching Session – Preliminary Round #CapTech2023
              </p>
            </div>
            <div class="eventCard">
              <a href="https://www.eventbrite.com.au/e/#CapTech2023-festival-where-business-growth-meets-capital-24-27-oct-23-tickets-482131798187">
                <img
                  className="eventImg"
                  src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719355161/homePage/qwjduvdedvvujnmiuken.png"
                  alt="Event 3 Image"
                />
              </a>
              <h2 class="event-title">October 2023</h2>
              <p class="event-description">
                #CapTech2023 Welcome Drinks at NSW Parliament House
              </p>
            </div>
            <div class="eventCard">
              <a href="https://www.eventbrite.com.au/e/#CapTech2023-festival-where-business-growth-meets-capital-24-27-oct-23-tickets-482131798187">
                <img
                  className="eventImg"
                  src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719355164/homePage/ciaphwytaryiiadqpy2h.png"
                  alt="Event 1 Image"
                />
              </a>
              <h2 class="event-title">October 2023</h2>
              <p class="event-description">#CapTech2023</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
