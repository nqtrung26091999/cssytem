import type { LabelHTMLAttributes, ReactNode } from 'react'

interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

export default function Label({
  children,
  ...props
}: LabelProps) {
  return (
    <label
      className="text-sm font-medium text-slate-300"
      {...props}
    >
      {children}
    </label>
  )
}