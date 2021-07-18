import React from 'react';

interface Props {
  classes?: any;
  image: any;
}

const SidebarImage = ({ classes, image }: Props) => {
  return (
    <div className={`h-96 w-full rounded-lg image mx-8 ${classes}`}>
      <img
        src={`./images/${image}`}
        alt='dushime'
        className='w-full h-full rounded-lg'
      />
    </div>
  );
};

export default SidebarImage;
