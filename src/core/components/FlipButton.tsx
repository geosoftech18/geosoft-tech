import React from 'react';

const FlipButton: React.FC<button.flip> = ({
  className = '',
  disabled = false,
  loading = false,
  onClick,
  size = 'default',
  type = 'primary',
  rounded = 'rounded',
  animate = 'default',
  variant = 'flip',
  icon,
  default_text,
  hover_text,
  icon_border = true,
  btnType = 'button',
  ...props
}) => {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      data-size={size}
      data-type={type}
      data-loading={loading}
      data-rounded={rounded}
      data-animate={animate}
      data-variant={variant}
      data-icon_border={icon_border}
      type={btnType}
      {...props}
    >
      <div>
        <p>{default_text}</p>
        <p>{hover_text}</p>
      </div>
      {icon}
    </button>
  );
};

export default FlipButton;
