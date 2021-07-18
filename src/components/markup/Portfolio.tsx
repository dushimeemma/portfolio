import React from 'react';

import Button from '../Button';
import Paragraph from '../Paragraph';

interface Props {
  projects: any;
}

const Portfolio = ({ projects }: Props) => {
  return (
    <div className='min-h-screen w-full pt-32' id='section-portfolio'>
      <Paragraph classes='capitalize text-center text-5xl'>
        my latest projects
      </Paragraph>
      <Paragraph classes='capitalize text-center text-xs'>
        I have worked on many projects
      </Paragraph>
      <div className='flex flex-row justify-around items-center m-8 flex-column'>
        {projects.map((project: any, index: number) => (
          <div
            className='w-72 h-96 rounded shadow-lg flex flex-col justify-center items-center cursor-pointer bg-gray-900 my-8'
            key={index}
          >
            <img
              src={`./images/${project.image}`}
              alt={project.title}
              className='w-full h-full rounded static'
            />
            <div className='text-white z-10 absolute flex flex-col justify-center items-center'>
              <Paragraph>{project.title}</Paragraph>
              <Button>View Details</Button>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full flex flex-row justify-center items-center'>
        <Button classes='text-white w-48 bg-red-400 mb-3 py-3 border-0 border-red-400'>
          View More
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
