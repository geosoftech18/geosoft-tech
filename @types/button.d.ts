declare namespace button {
  interface index
    extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
    variant?: 'primary' | 'secondary' | 'danger' | 'link' | 'dark';
    size?: 'large' | 'default' | 'small';
    disabled?: boolean;
    loading?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    className?: HTMLElement['className'];
    rounded?: 'rounded' | 'rounded-sm' | 'rounded-md' | 'rounded-full';
    animate?: 'default' | 'rect-to-circ';
  }
  interface flip
    extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
    variant?: 'flip';
    type?: 'primary' | 'secondary' | 'danger' | 'link' | 'dark';
    size?: 'large' | 'default' | 'small';
    disabled?: boolean;
    loading?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    className?: HTMLElement['className'];
    rounded?: 'rounded' | 'rounded-sm' | 'rounded-md' | 'rounded-full';
    animate?: 'default' | 'rect-to-circ';
    icon?: React.ReactElement;
    icon_border?: boolean;
    default_text: string;
    hover_text: string;
    btnType?: 'button' | 'reset' | 'submit';
  }
}
