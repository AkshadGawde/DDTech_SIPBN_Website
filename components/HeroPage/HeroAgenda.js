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
                  <h2>Welcome with opening remarks</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">8:15am - 8:45am</h3>
                </td>
                <td>
                  <h2>Keynote</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">8:50am to 9:25am</h3>
                </td>
                <td>
                  <h2>
                    The State of the Economy and the Emerging Opportunities
                  </h2>
                  <h2>
                    <a href="/team/44">
                      {" Speakers : "}
                      <h5>Jacqueline Steel</h5>
                    </a>

                    <a href="/team/14">
                      {" "}
                      <h5>Stephen Walters</h5>
                    </a>
                    <a href="/team/29">
                      {" "}
                      <h5>Paul Nicolaou</h5>
                    </a>
                    <a href="/team/3">
                      {" "}
                      <h5>Dr Joseph Rizk AM</h5>
                    </a>
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">9:25am - 10:00am</h3>
                </td>
                <td>
                  <h2>What is happening in the Capital Markets?</h2>
                  <h2>
                    <a href="/team/35">
                      {" Speakers : "}
                      <h5>Giovanni Laudicina</h5>
                    </a>

                    <a href="/team/31">
                      {" "}
                      <h5>Nicole Kidd</h5>
                    </a>
                    <a href="/team/26">
                      {" "}
                      <h5>Michael Masterson</h5>
                    </a>
                    <a href="">
                      {" "}
                      <h5>Michael Tobin</h5>
                    </a>
                    <a href="/team/25">
                      <h5>Giovanni Amodeo</h5>
                    </a>
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">10:00am - 10:30am</h3>
                </td>
                <td>
                  <h2>Morning tea</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">10:30am - 11:05am</h3>
                </td>
                <td>
                  <h2>
                    The Disruption and the Investment Opportunities in the
                    Healthcare Sector
                  </h2>
                  <h2>
                    <a href="/team/13">
                      {" Speakers : "}
                      <h5>Dr George Margelis</h5>
                    </a>

                    <a href="/team/19">
                      {" "}
                      <h5>Anuraj Gambhir</h5>
                    </a>
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">11:10am - 11:45am</h3>
                </td>
                <td>
                  <h2>
                    Emerging trends and Opportunities in the Education Sector
                  </h2>
                  <h2>
                    <a href="/team/43">
                      {" Speakers : "}
                      <h5>Veena Sahajwalla</h5>
                    </a>

                    <a href="/team/17">
                      {" "}
                      <h5>The Hon Mark Coure MP</h5>
                    </a>
                    <a href="/team/30">
                      {" "}
                      <h5>Mark McCrindle</h5>
                    </a>
                    <a href="/team/41">
                      {" "}
                      <h5>Jenny Junkeer</h5>
                    </a>
                    <a href="/team/42">
                      {" "}
                      <h5>Jillian Kilby</h5>
                    </a>
                    <a href="/team/9">
                      {" "}
                      <h5>Dr Jim Taggart OAM</h5>
                    </a>
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">11:50am - 12:30pm</h3>
                </td>
                <td>
                  <h2>State of play in the Real Estate Sector</h2>
                  <h2>
                    <a href="/team/6">
                      {" Speakers : "}
                      <h5>Stephan Bali MP</h5>
                    </a>

                    <a href="/team/34">
                      {" "}
                      <h5>Lyall Gorman</h5>
                    </a>
                    <a href="/team/16">
                      {" "}
                      <h5>Besa Deda</h5>
                    </a>
                    <a href="/team/38">
                      {" "}
                      <h5>Tom Forrest</h5>
                    </a>
                    <a href="/team/28">
                      {" "}
                      <h5>Jua Cilliers</h5>
                    </a>
                    <a href="/team/20">
                      {" "}
                      <h5>Ozge Fettahlioglu</h5>
                    </a>
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">12:30pm - 1:30pm</h3>
                </td>
                <td>
                  <h2>Lunch and Networking break</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">1:30pm - 2:05pm</h3>
                </td>
                <td>
                  <h2>
                    Business Opportunities and Challenges in the Renewable
                    Energy Space
                  </h2>
                  <h2>
                    <a href="/team/33">
                      {" Speakers : "}
                      <h5>Claire Elkin</h5>
                    </a>

                    <a href="/team/12">
                      {" "}
                      <h5>Sarah Fairhurst</h5>
                    </a>
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">2:10pm - 2:45pm</h3>
                </td>
                <td>
                  <h2>Economic benefits of Generative AI</h2>
                  <h2>
                    <a href="/team/21">
                      {" Speakers : "}
                      <h5>Craig Scroggie</h5>
                    </a>

                    <a href="/team/8">
                      {" "}
                      <h5>The Hon David Elliott</h5>
                    </a>
                    <a href="/team/24">
                      {" "}
                      <h5>Lee Hickin</h5>
                    </a>
                    <a href="/team/23">
                      {" "}
                      <h5>Stela Solar</h5>
                    </a>
                    <a href="/team/15">
                      {" "}
                      <h5>Michael Kollo</h5>
                    </a>
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">2:50pm - 3:25pm</h3>
                </td>
                <td>
                  <h2>The Business of Sport and Entertainment</h2>
                  <h2>
                    <a href="/team/2">
                      {" Speakers : "}
                      <h5>Roderick H. McGeoch AO, LLB</h5>
                    </a>

                    <a href="">
                      {" "}
                      <h5>John Knox</h5>
                    </a>
                    <a href="/team/40">
                      {" "}
                      <h5>Patrick Delany</h5>
                    </a>
                    <a href="/team/32">
                      {" "}
                      <h5>Stephanie Brantz</h5>
                    </a>
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">3:30pm - 4:00pm</h3>
                </td>
                <td>
                  <h2>Afternoon Tea and Networking break</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">4:00pm</h3>
                </td>
                <td>
                  <h2>Global Business Pitching Session</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">5:00pm</h3>
                </td>
                <td>
                  <h2>Closing remarks</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="dateMonth">5:00pm</h3>
                </td>
                <td>
                  <h2>Post event drinks</h2>
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
