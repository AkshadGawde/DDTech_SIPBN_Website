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
            <h2 className="dateMonth">26th November, 2024 </h2>
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
                  <h2>Global Summit - ICC Sydney</h2>
                  <p className="agendaPara">
                    An all-day summit featuring expert speakers from around the
                    globe on various business topics.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth"> 5:00pm - 7:30pm</h3>
                </td>
                <td>
                  <h2>Global Summit networking drinks</h2>
                  <p className="agendaPara">
                    End the day with a relaxing networking session and build
                    valuable connections.
                  </p>
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
