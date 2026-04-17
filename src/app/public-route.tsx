import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTES } from './routes'

interface Props {
  children: ReactNode
}

export default function PublicRoute({
  children,
}: Props) {
  const token =
    localStorage.getItem('token')

  if (token) {
    return (
      <Navigate
        to={ROUTES.DASHBOARD}
        replace
      />
    )
  }

  return children
}