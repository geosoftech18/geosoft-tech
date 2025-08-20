import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface CheckboxButtonProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string | string[]) => void;
  selectedValues?: string[];
  selectedValue?: string;
  isSingleSelect?: boolean;
  className?: string;
}

const CheckboxButton: React.FC<CheckboxButtonProps> = ({
  id,
  label,
  value,
  onChange,
  className,
  selectedValues = [],
  selectedValue,
  isSingleSelect = false,
}) => {
  const isSelected = isSingleSelect
    ? selectedValue === value
    : selectedValues.includes(value);

  const handleChange = () => {
    if (isSingleSelect) {
      onChange(value);
    } else {
      const newSelectedValues = isSelected
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      onChange(newSelectedValues);
    }
  };

  return (
    <div className="flex w-full">
      <input
        type="checkbox"
        id={id}
        className="peer hidden"
        checked={isSelected}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className={twMerge(
          'cursor-pointer select-none border border-green px-6 py-3 font-bold text-black transition-colors duration-200 ease-in-out peer-checked:border-green peer-checked:text-green hover:text-green',
          className
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxButton;
