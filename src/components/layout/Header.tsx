import type { ReactNode } from 'react'

interface Props {
  title?: string
  right?: ReactNode
}

export default function Header({
  title = 'Dashboard',
  right,
}: Props) {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900 px-6 flex items-center justify-between">
      <h1 className="text-lg font-semibold text-white">
        {title}
      </h1>

      <div>{right}</div>
    </header>
  )
}