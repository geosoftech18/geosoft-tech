import React from 'react';

const Button = React.forwardRef<HTMLButtonElement, button.index>(
  (
    {
      className = '',
      children,
      disabled = false,
      loading = false,
      onClick,
      size = 'default',
      variant = 'primary',
      rounded = 'rounded',
      animate = 'default',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={className}
        disabled={disabled}
        onClick={onClick}
        data-size={size}
        data-type={variant}
        data-loading={loading}
        data-rounded={rounded}
        data-animate={animate}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
