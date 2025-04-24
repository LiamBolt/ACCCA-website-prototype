import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '@/utils/formatting';

/**
 * Button - A culturally-styled button component
 * 
 * Features brand colors, glassmorphism styling, and various sizes and variants
 */
const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  glassmorphic = true,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  loading = false,
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) => {
  // Base button styles
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant styles
  const variants = {
    primary: glassmorphic
      ? 'glass-morphism-green text-white hover:bg-forest-green-light/25 focus:ring-forest-green'
      : 'bg-forest-green text-white hover:bg-forest-green-light focus:ring-forest-green',
    secondary: glassmorphic
      ? 'glass-morphism-brown text-white hover:bg-saddle-brown-light/25 focus:ring-saddle-brown'
      : 'bg-saddle-brown text-white hover:bg-saddle-brown-light focus:ring-saddle-brown',
    outline: glassmorphic
      ? 'glass-morphism border-2 border-forest-green text-forest-green hover:bg-forest-green/10 focus:ring-forest-green'
      : 'bg-transparent border-2 border-forest-green text-forest-green hover:bg-forest-green/10 focus:ring-forest-green',
    ghost: 'bg-transparent text-forest-green hover:bg-forest-green/10 focus:ring-forest-green',
  };
  
  // Size styles
  const sizes = {
    xs: 'text-xs px-2.5 py-1.5 rounded',
    sm: 'text-sm px-3 py-2 rounded-md',
    md: 'text-base px-4 py-2 rounded-md',
    lg: 'text-lg px-6 py-3 rounded-lg',
    xl: 'text-xl px-8 py-4 rounded-xl',
  };
  
  // Loading and disabled states
  const stateStyles = loading
    ? 'cursor-wait opacity-80'
    : disabled
      ? 'cursor-not-allowed opacity-60'
      : 'cursor-pointer hover:shadow-lg active:translate-y-0.5';
  
  // Full width
  const widthStyles = fullWidth ? 'w-full' : '';
  
  // Loading spinner
  const LoadingSpinner = () => (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
  
  return (
    <button
      type={type}
      className={classNames(
        baseStyles,
        variants[variant],
        sizes[size],
        stateStyles,
        widthStyles,
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  glassmorphic: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

export default Button; 