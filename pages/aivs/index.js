import React from "react";
import { Title, TitleSm } from "@/components/common/Title";
import Link from "next/link";
import { Card } from "@/components/common/Card";
import { blogCards } from "@/assets/data/dummydata";

const Section = ({ title, children }) => (
  <>
    <TitleSm title={title} className="section-title" />
    <div className="desc-section">{children}</div>
  </>
);

const Aivs = () => {
  return (
    <>
      <div className="container">
        <br />
        <Title
          title={
            "Net Zero Emissions vs. AI's Rising Energy Consumption: A Complex Balance"
          }
        />

        <img src="/blogimages/ZeroEmission.png" className="blogImg" />

        <div className="blogsContainer">
          <p className="blogsDescription2">
            Net Zero Emissions is one of the terms that have gained popularity
            in the modern world as people face the realities of climate change.
            At the same time, the advancement in Artificial Intelligence (AI) is
            equally at a very fast pace not only changing industries and
            economies but offering very high levels of efficiency and
            capability. However, a significant challenge emerges at the
            intersection of these two trends: the concerns around energy
            consumption by AI and how this new technology can help us get to
            net-zero emissions.
          </p>
        </div>

        <TitleSm title={"Understanding Net Zero Emissions"} />

        <div className="blogsContainer">
          <div>
            <br />
            <p className="blogsDescription2">
              Net Zero Emissions means that the quantity of greenhouse gases
              emitted into the atmosphere equals to the amount that is actively
              being taken out of the atmosphere. Net zero means that the
              organisation’s emission of greenhouse gases is matched by the
              equivalent amount of gas removed or offset. This can be done in
              various ways such as opting for or promoting the use of renewable
              energy sources like solar, wind, or hydro power, planting trees,
              implementing the technique of carbon capture and storage or
              enhancement of efficiency in the use of energy.
              <br />
              <br />
              Now more than ever, Australia is promoting its 'net-zero' vision,
              with the federal government aiming for net-zero emissions by 2050.
              Numerous Australian states and territories, as well as leading
              firms, are planning to achieve this goal even sooner, with targets
              set for 2030-2050. These commitments are driving significant
              investments in cleaner energy technologies, policies, and
              innovative methodologies for reducing carbon emissions. The
              nation's dedication to transitioning to a sustainable future is
              fostering advancements in renewable energy sectors such as solar,
              wind, and hydrogen power.
            </p>
          </div>
        </div>

        <TitleSm title={"The Double-Edged Sword of AI"} />

        <div className="blogsContainer">
          <div>
            <br />
            <p className="blogsDescription2">
              AI is transforming the fields from healthcare to finance,
              improving efficiency, finding new opportunities, and boosting the
              economy. However, the processing complexity of training and
              deploying state-of-the-art AI models is significant and
              increasing. The servers as well as the necessary infrastructure
              for capturing and processing AI are placed in data centres that
              are turning into large power consumers.
              <br /> <br />A study held recently revealed that training a single
              neural network AI model can cause as much carbon emission as five
              cars in their entire lifespan. This trend means that as AI is
              inserted into more and more applications its energy use will rise.
              The dichotomy here is stark: while it can assist in detecting
              opportunities in using energy and enhancing the performance in
              several areas, it has energy needs, which affect the sustainable
              development plans.
            </p>
          </div>
        </div>

        <hr />

        <img
          src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1721738869/homePage/qd6zfzecifbulukav97j.png"
          className="blogImg"
        />
        <img
          src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1721738869/homePage/xmxhpoun1okaaxlpvdx3.png"
          alt=""
          className="blogImg"
        />

        <hr />

        <TitleSm title={"The Energy Dillema"} />

        <div className="blogsContainer">
          <div>
            <p className="blogsDescription2">
              Balancing the benefits of AI with the need to reduce carbon
              emissions requires a multifaceted approach:Balancing the benefits
              of AI with the need to reduce carbon emissions requires a
              multifaceted approach:
              <br />
              <br />
              <b>1. Energy Efficiency in AI Development:</b> AI technology has
              patent dangers yet progress in both the hardware and software
              foundation used by the technology can help to lessen the energy
              consumption levels. Researchers are looking for other superior
              methods while technological industries are investing into specific
              co-processors that can operate artificial intelligence jobs at a
              high level of efficiency and with less power consumption.
              <br /> <br />
              <b>2. Green Data Centers:</b> The migration of data centres to
              renewables is a very important step. Some of the major IT
              companies including Google and Microsoft have signalled that they
              are going to bring 100% of energy into their data centre from
              renewable sources and reduce their energy consumption per dollar
              earned.
              <br /> <br />
              <b>3. Carbon Offsetting:</b> AI developers and companies can
              invest in carbon offset projects to balance their emissions. This
              includes supporting reforestation, renewable energy projects, and
              other initiatives that reduce or capture carbon dioxide.
              <br />
              <br />
              <b>4. Policy and Regulation:</b> The governing bodies have the
              responsibility of regulation and formulation of policies that
              promote efficient utilisation of clean energy and efficient
              technologies. This means that the industry behaviour can be
              directed towards sustainability by granting bonuses for
              investments in green technologies as well as fines in case of
              oversized carbon footprints.
              <br />
              <br />
              <b>5. Innovative Cooling Solutions:</b> AI systems generate
              significant heat, requiring energy-intensive cooling systems.
              Innovations in cooling technologies, such as liquid cooling and
              immersion cooling, can reduce the energy required to keep data
              centres operational.
            </p>
          </div>
        </div>
        <hr />

        <TitleSm title={"AI as a Tool for Achieving Net Zero "} />

        <div className="blogsContainer">
          <div>
            <p className="blogsDescription2">
              Despite its energy challenges, AI holds immense potential to aid
              in the fight against climate change:Despite its energy challenges,
              AI holds immense potential to aid in the fight against climate
              change:
              <br />
              <br />
              <b>- Optimising Renewable Energy:</b> AI can enhance the
              efficiency and reliability of renewable energy sources. Machine
              learning algorithms can predict energy production from solar and
              wind farms, optimising their integration into the power grid.
              <br />
              <br />
              <b>- Smart Grids and Energy Storage:</b> AI can manage energy
              distribution more effectively, balancing supply and demand in
              smart grids. It can also optimise the use of battery storage
              systems, crucial for stabilising renewable energy supplies.
              <br />
              <br />
              <b>- Climate Modeling and Research:</b> AI-driven models can
              provide more accurate climate predictions, helping policymakers
              and scientists develop effective strategies to combat climate
              change.
              <br />
              <br />
              <b>- Energy Efficiency in Buildings and Transportation:</b> AI can
              optimize heating, cooling, and lighting in buildings, reducing
              energy consumption. In transportation, AI can enhance the
              efficiency of electric vehicles and logistics systems,
              contributing to lower emissions.
            </p>
          </div>
        </div>

        <hr />

        <TitleSm title={"Summary"} />

        {/* <div className="blogsContainer">
          <div>
            <p className="blogsDescription2">
            Net zero emissions and artificial intelligence can be considered as the two most important trends defining the future environment. On the one hand, the increasing energy demand of AI solutions presents itself as a challenge, on the other – it provides marvellous instruments to shape the era of a sustainable, low-energy economy. Technology development, energy efficiency, and the use of renewable energy, for example, are the possibilities of utilising the AI capabilities while moving to pro-climate progress. The course to the future sustainability remains in the harmonious relation between the development of technology or the annexation of innovative techniques, products or services to human lives and environmental conservation.
            <br/><br/>
            Reference:<a href="https://www.technologyreview.com/2019/06/06/239031/training-a-single-ai-model-can-emit-as-much-carbon-as-five-cars-in-their-lifetimes/" className="blogLink"> https://www.technologyreview.com/2019/06/06/239031/training-a-single-ai-model-can-emit-as-much-carbon-as-five-cars-in-their-lifetimes/</a>
            </p>
          </div>
        </div> */}

        <div className="blogsContainer">
          <div>
            <p className="blogsDescription">
              Net zero emissions and artificial intelligence can be considered
              as the two most important trends defining the future environment.
              On the one hand, the increasing energy demand of AI solutions
              presents itself as a challenge, on the other – it provides
              marvellous instruments to shape the era of a sustainable,
              low-energy economy. Technology development, energy efficiency, and
              the use of renewable energy, for example, are the possibilities of
              utilising the AI capabilities while moving to pro-climate
              progress. The course to the future sustainability remains in the
              harmonious relation between the development of technology or the
              annexation of innovative techniques, products or services to human
              lives and environmental conservation.
            </p>
            <br />
            <br />
            <a
              href="https://www.technologyreview.com/2019/06/06/239031/training-a-single-ai-model-can-emit-as-much-carbon-as-five-cars-in-their-lifetimes/"
              className="blogLink"
            >
              Reference
            </a>
          </div>
        </div>

        <hr />

        <div className="blogsContainer">
          <div>
            <p className="blogsDescription2">
              Whether you're searching for insights on funding opportunities,
              strategies to achieve equity in your venture or tips for
              successful business matchmaking, you'll find everything you need
              to stay informed and motivated at sipbn.com.au. SIPBN provides you
              with support and knowledge on private capital, access to pitching
              sessions, and investment strategies. Own events are designed to
              educate, entertain, and empower you on your investment journey.
              Join and connect with a vibrant community of like-minded
              individuals, and thought leaders and be empowered to unlock the
              potential to elevate your business to new heights.
              <br />
              <br />
              #SIPBN #DebtFunding #VentureCapital #DealMaking #CapTech2024
              #Funding #Equity #PrivateCapital #PitchingSessions #Investment
            </p>
          </div>
        </div>

        <TitleSm title={"AI as a Tool for Achieving Net Zero "} />

        <div className="blogsContainer">
          <div>
            <p className="blogsDescription2">
              Despite its energy challenges, AI holds immense potential to aid
              in the fight against climate change:Despite its energy challenges,
              AI holds immense potential to aid in the fight against climate
              change:
              <br />
              <br />
              <b>- Optimising Renewable Energy:</b> AI can enhance the
              efficiency and reliability of renewable energy sources. Machine
              learning algorithms can predict energy production from solar and
              wind farms, optimising their integration into the power grid.
              <br />
              <br />
              <b>- Smart Grids and Energy Storage:</b> AI can manage energy
              distribution more effectively, balancing supply and demand in
              smart grids. It can also optimise the use of battery storage
              systems, crucial for stabilising renewable energy supplies.
              <br />
              <br />
              <b>- Climate Modeling and Research:</b> AI-driven models can
              provide more accurate climate predictions, helping policymakers
              and scientists develop effective strategies to combat climate
              change.
              <br />
              <br />
              <b>- Energy Efficiency in Buildings and Transportation:</b> AI can
              optimize heating, cooling, and lighting in buildings, reducing
              energy consumption. In transportation, AI can enhance the
              efficiency of electric vehicles and logistics systems,
              contributing to lower emissions.
            </p>
          </div>
        </div>

        <div className="blogsAuthor">
          <p style={{ marginBottom: "10px" }}>-Parth Maheshwari</p>
        </div>
      </div>
    </>
  );
};

export default Aivs;
