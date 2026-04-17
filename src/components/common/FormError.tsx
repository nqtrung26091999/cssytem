import type { ReactNode } from 'react'

interface Props {
  message?: string
  children?: ReactNode
}

export default function FormError({
  message,
  children,
}: Props) {
  if (!message && !children) return null

  return (
    <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
      {message || children}
    </div>
  )
}