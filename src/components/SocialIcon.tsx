/* eslint-disable @typescript-eslint/restrict-template-expressions */
interface Props {
  icon: string;
  classes?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const SocialIcon = ({ icon, classes, onClick }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
    >
      <img
        src={icon}
        className={`w-[2.5rem] h-[2.5rem] ${classes}`}
      />
    </button>
  );
};

export default SocialIcon;
