import * as React from 'react';
import { SpinnerGapIcon } from '@phosphor-icons/react';
import cn from '@/utils/cn';

const Button = React.forwardRef(
  ({ type, variant, children, className, disabled, loading = false, ...props }, ref) => {
    const buttonVariants = {
      primary: 'button-primary',
      secondary: 'button-secondary',
      success: 'button-success',
      danger: 'button-danger'
    };

    const pickedVariant = buttonVariants[variant];
    const classNames = cn(
      'button hover:cursor-pointer transition-all duration-300',
      pickedVariant,
      className
    );

    return (
      <button
        ref={ref}
        type={type || 'button'}
        className={classNames}
        disabled={disabled || loading}
        {...props}>
        {loading ? <SpinnerGapIcon className="animate-spin" /> : children}
      </button>
    );
  }
);

export default Button;
