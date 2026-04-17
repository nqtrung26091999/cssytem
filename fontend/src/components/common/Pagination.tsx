import clsx from 'clsx'

interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
  siblingCount = 1,
}: PaginationProps) {
  if (totalPages <= 1) return null

  const createPages = () => {
    const pages: (number | string)[] = []

    const start = Math.max(
      1,
      page - siblingCount
    )

    const end = Math.min(
      totalPages,
      page + siblingCount
    )

    if (start > 1) {
      pages.push(1)

      if (start > 2) {
        pages.push('...')
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push('...')
      }

      pages.push(totalPages)
    }

    return pages
  }

  const pages = createPages()

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      <button
        onClick={() =>
          onPageChange(page - 1)
        }
        disabled={page === 1}
        className="px-3 py-2 rounded-xl bg-slate-800 text-white disabled:opacity-40"
      >
        Prev
      </button>

      {pages.map((item, index) =>
        item === '...' ? (
          <span
            key={index}
            className="px-2 text-slate-400"
          >
            ...
          </span>
        ) : (
          <button
            key={item}
            onClick={() =>
              onPageChange(Number(item))
            }
            className={clsx(
              'min-w-[40px] px-3 py-2 rounded-xl transition',
              page === item
                ? 'bg-cyan-500 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            )}
          >
            {item}
          </button>
        )
      )}

      <button
        onClick={() =>
          onPageChange(page + 1)
        }
        disabled={page === totalPages}
        className="px-3 py-2 rounded-xl bg-slate-800 text-white disabled:opacity-40"
      >
        Next
      </button>
    </div>
  )
}