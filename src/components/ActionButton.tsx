interface Props {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  classes?: string;
}
const ActionButton = ({ label, onClick, classes }: Props) => {
  return (
    <button
      className={`self-end mr-6 mb-6  px-3 py-2 flex items-center border-2  rounded-2xl border-white shadow-2xl shadow-white bg-primary text-white ${classes}`}
      type='button'
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ActionButton;
