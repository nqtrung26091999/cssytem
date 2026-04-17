import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  Input,
  Card,
} from '@/components/ui'

import {
  loginApi,
} from '../services/auth.service'

import useAuth from '../hooks/useAuth'

export default function LoginPage() {
  const navigate = useNavigate()

  const { login } = useAuth()

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    try {
      setLoading(true)

      const data =
        await loginApi({
          email,
          password,
        })

      login(
        data.token,
        data.user
      )

      navigate('/dashboard')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md space-y-4">
        <h1 className="text-3xl font-bold text-white">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <Button
            type="submit"
            variant='primary'
            loading={loading}
            fullWidth
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  )
}