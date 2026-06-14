/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

export const Badge = ({
  children,
  variant = 'default', // default | success | warning | destructive | outline
  class: className = '',
  ...props
}) => {
  const baseClasses = 'tool-badge inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
  
  const variants = {
    default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
    success: 'border-transparent text-[#10b981] border-[rgba(16,185,129,0.2)] bg-[#10b981]/10',
    warning: 'border-transparent text-[#f59e0b] border-[rgba(245,158,11,0.2)] bg-[#f59e0b]/10',
    destructive: 'border-transparent text-red-500 border-red-500/20 bg-red-500/10',
    outline: 'text-foreground',
  }

  const finalClass = `${baseClasses} ${variants[variant]} ${className}`.trim()

  return (
    <div class={finalClass} {...props}>
      {children}
    </div>
  )
}
