import {
  patronsdata,
  memberdata,
  moderatordata,
} from "../assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import team from "@/pages/team";
import React from "react";

const Team = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="MEET OUR PATRONS" /> <br />
            <br />
            <Title
              title="A team of smart & passionate individuals"
              className="title-bg"
            />
          </div>
          <div className="grid-4 py">
            {patronsdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>

          <div className="heading-title">
            <TitleSm title="World Class Speakers" /> <br />
            <br />
            <Title
              title="A team of smart & passionate speakers"
              className="title-bg"
            />
          </div>
          <div className="grid-4 py">
            {memberdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>

          <div className="heading-title">
            <TitleSm title="Our Exemplary Moderators" /> <br />
            <br />
            <Title
              title="A team of smart & passionate moderators"
              className="title-bg"
            />
          </div>
          <div className="grid-4 py">
            {moderatordata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
