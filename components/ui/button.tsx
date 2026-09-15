import * as React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'md' | 'lg';
};

export function Button({ variant = 'primary', size = 'md', className = '', ...rest }: Props) {
  const base =
    'btn-lift inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full font-sans font-semibold focus-visible:outline-none';
  const variants: Record<string, string> = {
    primary: 'bg-primary text-primary-foreground hover:opacity-95',
    secondary: 'bg-secondary text-secondary-foreground hover:opacity-95',
    accent: 'bg-accent text-accent-foreground hover:opacity-95',
  };
  const sizes: Record<string, string> = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };
  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest} />;
}
