import React from "react";
import { Title, TitleSm } from "@/components/common/Title";
import Link from "next/link";

const Section = ({ title, children }) => (
  <>
    <TitleSm title={title} className="section-title" />
    <div className="desc-section">{children}</div>
  </>
);

const Index = () => {
  return (
    <>
      <div className="container">
        <br />
        <Title title={"Successful Stories"} />

        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Design Technology Company:</h2>
            <br />
            <p className="blogsDescription2">
              A world leader in innovative and design technology company
              participated at #CapTech2023 and was successfully introduced to
              international firm for capital and business development
              opportunities.
            </p>
          </div>
        </div>
        <hr />
        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Fintech Company:</h2>
            <br />
            <p className="blogsDescription2">
              A cutting edge Fintech company operating AI-based models,
              participated in #CapTech2022 and was introduced to a government
              body resulting in match funding.
            </p>
          </div>
        </div>
        <hr />

        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Renewable Energy:</h2>
            <br />
            <p className="blogsDescription2">
              A large renewable energy company from the Middle East attended
              #CapTech2022. The company was looking for approved projects in
              solar power generation. The company was matched with approved
              projects in Queensland, South Australia and New South Wales. The
              amount of investment is above A$200 million.
            </p>
          </div>
        </div>
        <hr />
        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Mining and Exploration:</h2>
            <br />
            <p className="blogsDescription2">
              An international mining group participated in #CapTech2023 and
              sought investment opportunities in late-stage mining exploration
              projects in base metals, precious metals and critical minerals.
              Two exploration projects in copper and gold were introduced to the
              mining group resulting in MOUs worth over A$100 million.
            </p>
          </div>
        </div>
        <hr />
        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">
              Capital Raising for a Private Equity Fund:
            </h2>
            <br />
            <p className="blogsDescription2">
              Successful capital raising from high net worth investors for a
              private equity fund investing in high growth companies.
            </p>
          </div>
        </div>
        <hr />
        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Financing of a Movie Business:</h2>
            <br />
            <p className="blogsDescription2">
              A client successfully raised $250K equity to finance his new movie
              business through an introduction made.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
