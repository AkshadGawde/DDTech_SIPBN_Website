import React from 'react'; // Import React
import { Title, TitleSm } from "@/components/common/Title";

const Member = ({ member }) => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <Title title={member.name} className='title-bg' />
          </div>
          <div className='content flex'>
            <div className='left w-40 py'>
              <img src={member.image} alt={member.name} className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title={member.title} />
              <br/>
              <p className='mission-p'>
                {member.description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Member;
