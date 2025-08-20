import React from 'react';

type Props = {
  title: string;
};

const Chip = ({ title }: Props) => {
  return (
    <div className="my-3 w-1/2 rounded-full bg-gray-200  px-3 py-2 text-base">
      {title}
    </div>
  );
};

export default Chip;
