import { patronsdata } from "../assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import Link from "next/link";

function patrons() {
  return (
    <div className="container">
      <div className="heading-title">
        <TitleSm title="MEET OUR PATRONS" /> <br />
      </div>
      <Link href="/">
        <div className="grid-4 py">
          {patronsdata.map((item) => (
            <Card data={item} key={item.id} caption={item.post} path="/team" />
          ))}
        </div>
      </Link>
    </div>
  );
}

export default patrons;
