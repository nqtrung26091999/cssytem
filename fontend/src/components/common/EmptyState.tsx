import { Button } from '@/components/ui'
import type { ReactNode } from 'react'

interface Props {
  title: string
  description?: string
  icon?: ReactNode
  actionText?: string
  onAction?: () => void
}

export default function EmptyState({
  title,
  description,
  icon,
  actionText,
  onAction,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
      {icon && (
        <div className="mb-4 flex justify-center text-slate-400">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      {description && (
        <p className="mt-2 text-sm text-slate-400">
          {description}
        </p>
      )}

      {actionText && onAction && (
        <div className="mt-5">
          <Button
            variant="primary"
            onClick={onAction}
          >
            {actionText}
          </Button>
        </div>
      )}
    </div>
  )
}