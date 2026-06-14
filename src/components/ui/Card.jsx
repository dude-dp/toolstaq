/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

export const Card = ({ class: className = '', children, ...props }) => {
  return (
    <div class={`sidebar-card rounded-xl border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardHeader = ({ class: className = '', children, ...props }) => {
  return (
    <div class={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardTitle = ({ class: className = '', children, ...props }) => {
  return (
    <h3 class={`font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  )
}

export const CardDescription = ({ class: className = '', children, ...props }) => {
  return (
    <p class={`text-sm text-muted-foreground ${className}`} {...props}>
      {children}
    </p>
  )
}

export const CardContent = ({ class: className = '', children, ...props }) => {
  return (
    <div class={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardFooter = ({ class: className = '', children, ...props }) => {
  return (
    <div class={`flex items-center p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}
