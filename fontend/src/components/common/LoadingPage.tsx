import { Spinner } from '@/components/ui'

interface Props {
  text?: string
}

export default function LoadingPage({
  text = 'Loading...',
}: Props) {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4 text-slate-300">
      <Spinner />
      <p>{text}</p>
    </div>
  )
}