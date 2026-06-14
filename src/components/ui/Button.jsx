/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

export const Button = ({
  children,
  variant = 'primary', // primary | secondary | outline | ghost
  size = 'md', // sm | md | lg
  isLoading = false,
  isDisabled = false,
  leftIcon,
  rightIcon,
  class: className = '',
  ...props
}) => {
  const baseClasses = 'btn inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none'
  
  const variants = {
    primary: 'btn-primary bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  }

  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-8 text-lg',
  }

  // Construct final class string (using standard classes from existing CSS where possible)
  // If the existing CSS uses pure '.btn' and '.btn-primary', those are included.
  const finalClass = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`.trim()

  return (
    <button 
      class={finalClass} 
      disabled={isDisabled || isLoading}
      aria-disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span class="mr-2 inline-flex">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span class="ml-2 inline-flex">{rightIcon}</span>}
    </button>
  )
}
