"use client"

import { ReactNode } from "react"
import { TopNav } from "./TopNav"
import { Sidebar } from "./Sidebar"

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 pt-20 pb-12 px-6 md:px-8 lg:px-12 min-h-screen">
          <div className="mx-auto w-full" style={{ maxWidth: "calc(var(--spacing-max-width) - 224px)" }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
