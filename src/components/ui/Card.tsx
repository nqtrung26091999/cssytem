import clsx from 'clsx'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        'bg-slate-900 rounded-2xl shadow-xl p-6',
        className
      )}
    >
      {children}
    </div>
  )
}