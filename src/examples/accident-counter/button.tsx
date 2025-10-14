import type { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
}
export const Button = ({ children, variant = 'primary' }: ButtonProps) => {
  const colorVariants: Record<string, string> = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-violet-500 hover:bg-violet-600 text-white',
    ghost: 'border border-black/10 bg-white text-black hover:bg-black/5'
  }
  return (
    <button className={colorVariants[variant] + " rounded px-4 py-2 font-bold "}>
      {children}
    </button>
  );
};
