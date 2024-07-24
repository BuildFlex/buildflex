import React, { cloneElement, ReactElement } from 'react';

type ButtonSize = 'large' | 'medium' | 'small' | 'extra-small';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
type IconPosition = 'left' | 'right';

interface ButtonProps {
  size: ButtonSize;
  variant: ButtonVariant;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: ReactElement;
  iconPosition?: IconPosition;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  disabled = false,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  icon,
  iconPosition = 'left',
}) => {
  const iconSize = getIconSize(size);

  const renderIcon = () => {
    if (!icon) return null;
    return cloneElement(icon, { size: iconSize });
  };

  return (
    <button
      className={`${getBaseClasses()} ${getSizeClasses(size)} ${getVariantClasses(variant)}`}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {iconPosition === 'left' && (
        <span className="inline-flex items-center justify-center">
          {renderIcon()}
        </span>
      )}
      {children}
      {iconPosition === 'right' && (
        <span className="inline-flex items-center justify-center">
          {renderIcon()}
        </span>
      )}
    </button>
  );
};

const getBaseClasses = () =>
  'font-lato font-medium rounded-lg transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 border';

const getSizeClasses = (size: ButtonSize): string => {
  const sizeClasses: Record<ButtonSize, string> = {
    large: 'px-6 py-3 text-base',
    medium: 'px-5 py-2 text-base',
    small: 'px-4 py-1.5 text-sm',
    'extra-small': 'px-3 py-1 text-sm',
  };
  return sizeClasses[size];
};

const getVariantClasses = (variant: ButtonVariant): string => {
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-primary-600 border-transparent text-white hover:bg-primary-300 disabled:bg-gray-100 disabled:text-neutral-dark-300',
    secondary:
      'bg-primary-100 border-transparent text-primary-600 hover:bg-neutral-dark-100 disabled:bg-neutral-dark-100 disabled:text-primary-300',
    tertiary:
      'border-gray-300 bg-neutral-TERTIARY text-neutral-dark-400 hover:bg-neutral-50 disabled:bg-neutral-dark-100 disabled:text-neutral-200',
    danger:
      'bg-danger-400 border-transparent text-white hover:bg-red-600 disabled:bg-danger-100 disabled:text-neutral-TERTIARY',
  };
  return variantClasses[variant];
};

const getIconSize = (size: ButtonSize): number => {
  const iconSizes: Record<ButtonSize, number> = {
    large: 24,
    medium: 20,
    small: 16,
    'extra-small': 14,
  };
  return iconSizes[size];
};

export default Button;
