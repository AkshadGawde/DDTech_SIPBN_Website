import { Title, TitleSm } from "@/components/common/Title";

const Undefined = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <Title title="The Hon Victor Dominello" className="title-bg" />
          </div>
          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="https://res.cloudinary.com/dueoon8xe/image/upload/v1721983854/Speakers%20-%20Sipbn/m3ukoq5lvsd8iu5psugc.png"
                alt="Img-1"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Former NSW Government Minister" />
              <br />
              <p className="misson-p">
                {" "}
                Victor is a seasoned government leader, having served as a
                Minister in NSW for 12 years, and is best known for his role as
                Minister for Customer Service and Digital Government.
                <br />
                He is considered a pioneer of digital government in Australia,
                and his achievements have been admired, studied and modelled by
                other governments around the world.
                <br />
                Since retiring from politics in 2023, Victor has been appointed
                to Accenture’s Global Luminaries Program to champion the cause
                of digital government around the world.
                <br />
                Victor is the inaugural Chair of the Commonwealth Government’s
                Digital Identity Expert Panel.
                <br />
                Victor is also the inaugural Chair of the Commonwealth
                Government’s Independent Advisory Panel for MyGov and Services
                Australia.
                <br />
                In addition, Victor is a Professor at UNSW and Director of the
                Trustworthy Digital Society Hub, a joint initiative of UNSW and
                UTS.
                <br />
                Victor is a board member of the Tech Council of Australia and
                Adviser to the br/ain and Mind Institute based at the University
                of Sydney.
                <br />
                In 2023 Victor launched ServiceGen, a firm that provides advice
                to governments and complex organisations with a mission of
                profoundly reimagining services for the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Undefined;
