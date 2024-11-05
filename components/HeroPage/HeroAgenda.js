import React from "react";
import { Title } from "../common/Title";

function HeroAgenda() {
  return (
    <div className="agendaContent">
      <Title title=" 2024 Agenda" />
      <hr style={{ width: "35%" }} />

      {/* First agenda item */}
      <div className="agendaBox2">
        <div className="agendaTable">
          <div className="dateHolder">
            <h2 className="dateMonth">25th November, 2024 </h2>
          </div>
        </div>
        <div className="agendaTable">
          <table>
            <tbody>
              <tr>
                <td>
                  <h3 className="dateMonth">5:30pm - 8:30pm</h3>
                </td>
                <td>
                  <h2>Welcome drinks at NSW Parliament House</h2>
                  <p className="agendaPara">
                    Kick off the event with a warm welcome and networking
                    session over drinks.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Second agenda item */}
      <div className="agendaBox2">
        <div className="agendaTable">
          <div className="dateHolder">
            <h2 className="dateMonth">26th November, 2024</h2>
          </div>
        </div>
        <div className="agendaTable">
          <table>
            <tbody>
              {/* Agenda items for 26th November */}
              <tr>
                <td>
                  <h3 className="dateMonth">8:00 - 8:15am</h3>
                </td>
                <td>
                  <h3>Welcome with opening remarks</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">8:15am - 8:45am</h3>
                </td>
                <td>
                  <h3>Keynote</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">8:50am to 9:25am</h3>
                </td>
                <td>
                  <h3>
                    The State of the Economy and the Emerging Opportunities
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">9:25am - 10:00am</h3>
                </td>
                <td>
                  <h3>What is happening in the Capital Markets?</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">10:00am - 10:30am</h3>
                </td>
                <td>
                  <h3>Morning tea</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">10:30am - 11:05am</h3>
                </td>
                <td>
                  <h3>
                    The Disruption and the Investment Opportunities in the
                    Healthcare Sector
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">11:10am - 11:45am</h3>
                </td>
                <td>
                  <h3>
                    Emerging trends and Opportunities in the Education Sector
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">11:50am - 12:30pm</h3>
                </td>
                <td>
                  <h3>State of play in the Real Estate Sector</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">12:30pm - 1:30pm</h3>
                </td>
                <td>
                  <h3>Lunch and Networking break</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">1:30pm - 2:05pm</h3>
                </td>
                <td>
                  <h3>
                    Business Opportunities and Challenges in the Renewable
                    Energy Space
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">2:10pm - 2:45pm</h3>
                </td>
                <td>
                  <h3>Economic benefits of Generative AI</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">2:50pm - 3:25pm</h3>
                </td>
                <td>
                  <h3>The Business of Sport and Entertainment</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">3:30pm - 4:00pm</h3>
                </td>
                <td>
                  <h3>Afternoon Tea and Networking break</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">4:00pm</h3>
                </td>
                <td>
                  <h3>Global Business Pitching Session</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">5:00pm</h3>
                </td>
                <td>
                  <h3>Closing remarks</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">5:00pm</h3>
                </td>
                <td>
                  <h3>Post event drinks</h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Third agenda item */}
      <div className="agendaBox2">
        <div className="agendaTable">
          <div className="dateHolder">
            <h2 className="dateMonth">27th November, 2024 </h2>
          </div>
        </div>
        <div className="agendaTable">
          <table>
            <tbody>
              <tr>
                <td>
                  <h3 className="dateMonth">6:30pm - 9:30pm</h3>
                </td>
                <td>
                  <h2>Private Dinner with guest speaker</h2>
                  <p className="agendaPara">
                    Join us for an exclusive dinner with an industry leader as
                    the guest speaker.
                  </p>
                </td>
              </tr>
              {/* <tr>
                <td>
                  <h3 className="dateMonth">9:00am - 5:00pm</h3>
                </td>
                <td>
                  <h2>Business Matching sessions</h2>
                  <p className="agendaPara">
                    Connect one-on-one with business leaders and potential
                    partners in personalized sessions.
                  </p>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="agendaBox2">
        <div className="agendaTable">
          <div className="dateHolder">
            <h2 className="dateMonth">27th & 28th November </h2>
            <h2 className="dateMonth">2024 </h2>
          </div>
        </div>
        <div className="agendaTable">
          <table>
            <tbody>
              <tr>
                <td>
                  <h3 className="dateMonth">9:00am - 5:00pm</h3>
                </td>
                <td>
                  <h2>Business Matching sessions</h2>
                  <p className="agendaPara">
                    Connect one-on-one with business leaders and potential
                    partners in personalized sessions.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HeroAgenda;
