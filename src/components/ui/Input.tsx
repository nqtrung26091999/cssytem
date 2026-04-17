import clsx from 'clsx'
import type { InputHTMLAttributes } from 'react'

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export default function Input({
  className,
  error,
  ...props
}: InputProps) {
  return (
    <div className="space-y-1">
      <input
        className={clsx(
          'w-full rounded-xl border bg-slate-900 text-white px-4 py-2.5 outline-none transition',
          error
            ? 'border-red-500'
            : 'border-slate-700 focus:border-cyan-500',
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}