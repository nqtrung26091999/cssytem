import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title?: string
  subtitle?: string
}

export default function AuthLayout({
  children,
  title = 'Welcome Back',
  subtitle = 'Please sign in to continue',
}: Props) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white">
            {title}
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </div>
  )
}