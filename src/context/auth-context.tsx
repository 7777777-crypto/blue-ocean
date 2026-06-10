"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type UserRole = "student" | "teacher" | "admin"

interface AuthUser {
  email: string
  name: string
  role: UserRole
}

interface AuthContextType {
  user: AuthUser | null
  isAuthenticated: boolean
  login: (email: string, password: string, role: UserRole) => Promise<void>
  register: (email: string, password: string, role: UserRole) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)

  const login = async (email: string, _password: string, role: UserRole) => {
    await new Promise((r) => setTimeout(r, 800))
    setUser({ email, name: email.split("@")[0], role })
  }

  const register = async (email: string, _password: string, role: UserRole) => {
    await new Promise((r) => setTimeout(r, 800))
    setUser({ email, name: email.split("@")[0], role })
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
