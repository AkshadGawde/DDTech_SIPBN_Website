import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Executive_board = () => {
  return (
    <>
      <div className="container">
        <br />
        <Title title={"Committees"} />
        <br />
        <TitleSm title={"Health and WellBeing"} />
        <div className="advisoryContainer">
          <div>
            <h2 className="advisoryTitle">Dean Kilby</h2>
            <p className="advisoryDescription">
              Educated in biochemistry and microbiology, Dean graduated with
              first class honours in biotechnology and undertook subsequent
              post-graduate training in molecular medicine. His scientific and
              clinical experience has since spanned the pharmaceutical industry,
              medical communication, and scientific consulting from metabolic
              disease to regenerative medicine – both in Australia and
              internationally.
              <br />
              <br />
              Further to this, Dean has extensive experience in transformational
              performance coaching and has been a leading trainer across the ANZ
              region for almost 15 years. He founded Simplr Health with a
              commitment to contribute the possibility of being well to big
              people with big lives.
            </p>
          </div>
          <img className="advisoryImg" src="/committees/Dean Kilby.png" />
        </div>

        <hr />

        <TitleSm title={"INTERIOR DESIGN AND RENOVATION"} />
        <div className="advisoryContainer">
          <div>
            <h2 className="advisoryTitle"> Ozge Fettahlioglu</h2>
            <p className="advisoryDescription">
              Ozge Fettahlioglu is an interior design enthusiast, dedicated
              renovation expert, and academic, teaching at prestigious Sydney
              universities. Her journey in the world of design is guided by a
              passion to elevate lives by elevating their surroundings. She
              believes in custom creations to get the best results, where homes
              truly sing the right song.
              <br />
              <br />
              Her forte lies in uncovering creative, personalised solutions for
              interior design, renovation or property sales challenges, ensuring
              that your dream design becomes a living reality while staying
              within budget.
              <br />
              <br />
              At the core of her design philosophy is a commitment to timeless
              elegance over fleeting trends. She ardently advocates for
              investing in quality, crafting interiors that stand the test of
              time and hold sentimental value, destined to be cherished by
              generations to come.
              <br />
              <br />
              She firmly believes that a home should be a mirror reflecting its
              inhabitants, echoing their personalities, lifestyles, and stories,
              rather than merely conforming to passing trends or glossy magazine
              covers. As an academic, she draws on scientifically researched
              design principles to curate environments that empower you and your
              family to flourish and create the future you desire.
              <br />
              <br />
              With a deep dedication to creating spaces that resonate with your
              senses and aspirations, she guides you on a transformative design
              journey. To make your dream home a reality, where every element
              harmoniously contributes to your unique living experience.
              <br />
              <br />
              Professional Memberships: Masterbuilders, Women Building
              Australia, WIDAC-Women in Design and Construction, Head of
              Interior Design and Renovation Committee SIPBN, Design Matters
              National.
            </p>
          </div>
          <img
            className="advisoryImg"
            src="/committees/Ozge Fettahlioglu.png"
          />
        </div>

        <hr />

        <TitleSm title={"RENEWABLE ENERGY"} />
        <div className="advisoryContainer">
          <div>
            <h2 className="advisoryTitle">Reza Khademlou</h2>
            <p className="advisoryDescription">
              Reza is an experienced technology consultant, a member of
              Engineers Australia (EA) and a certified PBA. With over seven
              years in the tech industry, he is particularly passionate about
              clean energy, with a focus on hydrogen, EV technologies, and
              energy storage solutions. Known for his entrepreneurial spirit, he
              is a well-connected figure in Australia’s startup ecosystem,
              providing mentorship and investment support to emerging
              businesses, both locally and internationally.
              <br />
              <br />
              In addition, Reza is involved in the Angel Investing scene. He
              concentrates on innovative technologies with high potential and is
              committed to ensuring that driven founders get the financial
              backing they need to bring their visions to life and transform the
              tech sector.
              <br />
              <br />
              He is also acting as the Vice President of Education for the
              University of Sydney’s Toastmasters, a global non-profit
              organisation. In this role, he engages with students and mentors
              them to aim for excellence, equipping them for the evolving
              landscape of business.
              <br />
              <br />
              Reza’s overarching mission is to help shape a future in which
              technology serves as a key enabler for unlocking human potential.
              He is dedicated to empowering positive change by encouraging
              innovation, refining operational processes, and cultivating
              collaborations that lead to enduring and significant impact for
              everyone involved.
            </p>
          </div>
          <img className="advisoryImg" src="/committees/Reza.png" />
        </div>
        <hr />

        <TitleSm title={"HEAD OF TECH INVESTMENT AND GROWTH"} />
        <div className="advisoryContainer">
          <div>
            <h2 className="advisoryTitle">Nikhil Nigam</h2>
            <p className="advisoryDescription">
              Nikhil Nigam embarked on his professional journey as a Computer
              Science Engineer, where his passion for technology first
              blossomed. Beginning as a software developer, he quickly gained
              recognition for his technical prowess and innovative
              problem-solving, crafting software solutions that not only met
              client needs but also anticipated technological advancements.
              <br />
              <br />
              Eager to combine his technical expertise with business strategy,
              Nikhil transitioned into sales, specializing in AI products within
              the APAC market. Over the years, he evolved from a technology
              specialist into a strategic sales leader, guiding organizations in
              embracing cutting-edge AI solutions. His deep understanding of
              technology, paired with sharp market insights, has consistently
              driven growth and delivered significant value to clients across
              diverse industries.
              <br />
              <br />
              Nikhil is deeply committed to the transformative potential of
              technology in business. He believes in the power of strategic
              relationships, fostered through purposeful networking, to unlock
              opportunities and inspire innovation. As a sales leader, Nikhil
              leverages his expansive network to connect people, ideas, and
              opportunities, enabling businesses to flourish in a rapidly
              evolving technological landscape. Today, he remains at the
              forefront of innovation, focused on driving growth and creating
              lasting impact across the APAC region.
            </p>
          </div>
          <img className="advisoryImg" src="/committees/Nikhil Nigam.png" />
        </div>
      </div>
    </>
  );
};

export default Executive_board;
