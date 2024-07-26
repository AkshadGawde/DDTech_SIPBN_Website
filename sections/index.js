import Hero from "./Hero";
import Events from "./Events";
import Team from "./Team";
import Contact from "./Contact";
import Advisory_board from "./Advisory_board";
import Executive_board from "./Executive_board";
import Committees from "./Committees";
import Patrons from "./Patrons";
import Speakers from "./Speakers";
import Captech2023 from "./Captech2023";
import { Toaster } from "react-hot-toast";

// Ensure the Toaster is rendered in your main component
const MainComponent = () => {
  return (
    <>
     <Toaster
  position="top-center"
  reverseOrder={true}
/>
     
      <Hero />
      <Team />
      <Events />
      <Contact />
      <Advisory_board />
      <Executive_board />
      <Committees />
      <Patrons />
      <Speakers />
      <Captech2023 />
    </>
  );
};

export {
  MainComponent,
  Hero,
  Team,
  Events,
  Contact,
  Advisory_board,
  Executive_board,
  Committees,
  Patrons,
  Speakers,
  Captech2023,
};
