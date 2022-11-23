/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

const Icon = ({ imageUrl, width, height }: Props) => {
  return (
    <Image
      src={imageUrl}
      width={width !== undefined ? width : 51.96}
      height={height !== undefined ? height : 41.28}
    />
  );
};

interface Props {
  imageUrl: string;
  width?: number;
  height?: number;
}

export default Icon;
