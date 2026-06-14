/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

export const Input = ({
  id,
  label,
  error,
  helperText,
  class: className = '',
  ...props
}) => {
  const isInvalid = Boolean(error)
  const describedBy = [
    error ? `${id}-error` : null,
    helperText ? `${id}-description` : null
  ].filter(Boolean).join(' ') || undefined

  return (
    <div class="form-group w-full flex flex-col gap-1.5">
      {label && (
        <label class="form-label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for={id}>
          {label}
        </label>
      )}
      
      <input
        id={id}
        class={`search-input flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${isInvalid ? 'border-red-500 focus-visible:ring-red-500' : 'border-input'} ${className}`}
        aria-invalid={isInvalid ? "true" : undefined}
        aria-describedby={describedBy}
        {...props}
      />
      
      {error && (
        <p id={`${id}-error`} class="text-sm font-medium text-red-500" role="alert">
          {error}
        </p>
      )}
      
      {!error && helperText && (
        <p id={`${id}-description`} class="text-sm text-muted-foreground">
          {helperText}
        </p>
      )}
    </div>
  )
}
