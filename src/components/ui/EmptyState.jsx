/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

export const EmptyState = ({
  title,
  description,
  icon,
  action,
  class: className = '',
  ...props
}) => {
  return (
    <div 
      class={`flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center animate-in fade-in-50 ${className}`} 
      {...props}
    >
      {icon && (
        <div class="mx-auto flex max-w-[420px] items-center justify-center text-muted-foreground opacity-50 mb-4">
          {icon}
        </div>
      )}
      
      <h3 class="mt-4 text-lg font-semibold">{title}</h3>
      
      {description && (
        <p class="mb-4 mt-2 text-sm text-muted-foreground max-w-[400px]">
          {description}
        </p>
      )}
      
      {action && (
        <div class="mt-4">
          {action}
        </div>
      )}
    </div>
  )
}
