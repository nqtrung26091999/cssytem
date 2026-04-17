import clsx from 'clsx'
import type { ReactNode } from 'react'

interface Props {
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export default function Section({
  title,
  description,
  children,
  className,
}: Props) {
  return (
    <section
      className={clsx(
        'rounded-2xl bg-slate-900 p-6',
        className
      )}
    >
      {(title || description) && (
        <div className="mb-5">
          {title && (
            <h2 className="text-xl font-semibold text-white">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-1 text-sm text-slate-400">
              {description}
            </p>
          )}
        </div>
      )}

      {children}
    </section>
  )
}