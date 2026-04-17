import {
  createBrowserRouter,
} from 'react-router-dom'

import ProtectedRoute from './protected-route'
import PublicRoute from './public-route'
import { ROUTES } from './routes'

import HomePage from '@/pages/Home'
import LoginPage from '@/features/auth/pages/LoginPage'
import DashboardPage from '@/pages/Dashboard'
import NotFoundPage from '@/pages/NotFound'

export const router =
  createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <HomePage />,
    },

    {
      path: ROUTES.LOGIN,
      element: (
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      ),
    },

    {
      path: ROUTES.DASHBOARD,
      element: (
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      ),
    },

    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])