import type { ReactNode } from 'react'

interface Props {
  title: string
  subtitle?: string
  action?: ReactNode
}

export default function PageTitle({
  title,
  subtitle,
  action,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-1 text-sm text-slate-400">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  )
}