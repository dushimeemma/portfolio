import React from 'react';

import LongParagraph from '../LongParagraph';
import NavTextItem from '../NavTextItem';
import Paragraph from '../Paragraph';
import SidebarImage from '../SidebarImage';

interface Props {
  skills: any;
  education?: any;
  experience?: any;
  isActiveSkills: boolean;
  isActiveExperience: boolean;
  isActiveEducation: boolean;
  handleOpenSkills: any;
  handleOpenEducation: any;
  handleOpenExperience: any;
}

const About = ({
  skills,
  education,
  experience,
  isActiveSkills,
  isActiveEducation,
  isActiveExperience,
  handleOpenSkills,
  handleOpenEducation,
  handleOpenExperience,
}: Props) => {
  return (
    <div
      className='min-h-screen w-full flex flex-row justify-around items-center flex-column z-10'
      id='section-about'
    >
      <SidebarImage image='dushime-.png' classes='visible-nav-item' />
      <div className='w-full h-full flex flex-col justify-center items-start mx-8'>
        <Paragraph classes='capitalize text-5xl'>About me</Paragraph>
        <LongParagraph>
          I am a full-stack software engineer with over 1 year of experience,
          passionate about identifying, analyzing and defining problems and
          working with others to develop efficient solutions. I love to work in
          environments where I am constantly challenged to produce excellent
          outputs and to be creative in solving problems.
        </LongParagraph>
        <div className='w-full flex flex-row justify-start items-center'>
          <NavTextItem
            onClick={handleOpenSkills}
            classes={`${
              isActiveSkills && 'border-b-2 border-red-400 text-red-400'
            }`}
          >
            Skills
          </NavTextItem>
          <NavTextItem
            onClick={handleOpenExperience}
            classes={`${
              isActiveExperience && 'border-b-2 border-red-400 text-red-400'
            }`}
          >
            Experience
          </NavTextItem>
          <NavTextItem
            onClick={handleOpenEducation}
            classes={`${
              isActiveEducation && 'border-b-2 border-red-400 text-red-400'
            }`}
          >
            Education &#38;&#38; Certificate
          </NavTextItem>
        </div>
        <div className='w-full flex flex-col justify-center items-start'>
          {isActiveSkills && (
            <ul className='text-white my-8 mx-4'>
              {skills.map((skill: any, index: number) => (
                <li key={index} className='p-1'>
                  &bull; {skill.title}
                </li>
              ))}
            </ul>
          )}
          {isActiveExperience && (
            <ul className='text-white my-8 mx-4'>
              {experience.map((exp: any, index: number) => (
                <li key={index} className='p-1'>
                  <b>
                    &bull; {exp.position} | {exp.company}
                  </b>
                  <br />
                  {exp.duration}
                </li>
              ))}
            </ul>
          )}
          {isActiveEducation && (
            <ul className='text-white my-8 mx-4'>
              {education.map((ed: any, index: number) => (
                <li key={index} className='p-1'>
                  <b>
                    &bull; {ed.university} | {ed.department}
                  </b>
                  <br />
                  {ed.duration}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
