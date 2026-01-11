import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'default', 
  size = 'default', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const getVariantClass = () => {
    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
      outline: 'border border-gray-300 bg-white hover:bg-gray-50',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      ghost: 'hover:bg-gray-100',
      link: 'text-blue-600 underline-offset-4 hover:underline'
    };
    return variants[variant] || variants.default;
  };

  const getSizeClass = () => {
    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
      'icon-sm': 'h-8 w-8',
      'icon-lg': 'h-12 w-12'
    };
    return sizes[size] || sizes.default;
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${getVariantClass()} ${getSizeClass()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}