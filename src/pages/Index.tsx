import React, { useState } from 'react';

import Home from '../components/markup/Home';
import Navbar from '../components/markup/Navbar';
import About from '../components/markup/About';
import Portfolio from '../components/markup/Portfolio';
import Contact from '../components/markup/Contact';
import Footer from '../components/markup/Footer';

const Index = () => {
  const [skills, setSkills] = useState([
    {
      id: 1,
      title: 'UI | UX',
      status: 'skills',
    },
    {
      id: 2,
      title: 'Mobile | Web | Desktop Application Development',
      status: 'skills',
    },
    {
      id: 3,
      title: 'DevOps',
      status: 'skills',
    },
  ]);
  const [experience, setExperience] = useState([
    {
      id: 1,
      position: 'Full-Stack Software Engineer',
      company: 'Andela Rwanda',
      duration: 'June/2020-June/2021',
    },
    {
      id: 2,
      position: 'Full-Stack Software Engineer',
      company: 'Data Systems',
      duration: 'Jan/2021-March/2021',
    },
    {
      id: 3,
      position: 'Full-Stack Software Engineer',
      company: 'Romalice Consultant Group',
      duration: 'March/2021-June/2021',
    },
    {
      id: 4,
      position: 'Full-Stack Software Engineer',
      company: 'GlobexCam Group',
      duration: 'July/2021-Present',
    },
  ]);
  const [education, setEducation] = useState([
    {
      id: 1,
      university: 'University of Rwanda',
      department: 'Computer && Software Engineering',
      duration: 'Sept/2014-June/2017',
    },
    {
      id: 2,
      university: 'University of Kigali',
      department: 'Computer Science',
      duration: 'Sept/2017-Dec/2021',
    },
    {
      id: 3,
      university: 'Coding With Mosh',
      department: 'Advanced React Native',
      duration: 'Dec/2020',
    },
    {
      id: 4,
      university: 'Udemy',
      department: 'Mastering Backend Web Development',
      duration: 'Jan/2021',
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'KIGC Ltd.',
      image: 'my-brand.png',
    },
    {
      id: 2,
      title: 'Portfolio.',
      image: 'dushime-.png',
    },
    {
      id: 3,
      title: 'Eco250.',
      image: 'eco.png',
    },
  ]);
  const [isActiveSkills, setIsActiveSkills] = useState(true);
  const [isActiveEducation, setIsActiveEducation] = useState(false);
  const [isActiveExperience, setIsActiveExperience] = useState(false);
  const handleOpenSkills = () => {
    setIsActiveSkills(true);
    setIsActiveEducation(false);
    setIsActiveExperience(false);
  };
  const handleOpenEducation = () => {
    setIsActiveSkills(false);
    setIsActiveEducation(true);
    setIsActiveExperience(false);
  };
  const handleOpenExperience = () => {
    setIsActiveSkills(false);
    setIsActiveEducation(false);
    setIsActiveExperience(true);
  };
  return (
    <>
      <Navbar />
      <Home />
      <About
        skills={skills}
        experience={experience}
        education={education}
        isActiveEducation={isActiveEducation}
        isActiveSkills={isActiveSkills}
        isActiveExperience={isActiveExperience}
        handleOpenSkills={handleOpenSkills}
        handleOpenEducation={handleOpenEducation}
        handleOpenExperience={handleOpenExperience}
      />
      <Portfolio projects={projects} />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
