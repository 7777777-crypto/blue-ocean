"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth, type UserRole } from "@/context/auth-context"
import { useLang } from "@/context/language-context"
import { t } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Loader2, LogIn } from "lucide-react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<UserRole>("student")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()
  const { lang } = useLang()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) { setError(t("auth.fillAll", lang)); return }
    setLoading(true); setError("")
    try { await login(email, password, role); router.push("/dashboard") }
    catch { setError(t("auth.failed", lang)) }
    finally { setLoading(false) }
  }

  return (
    <Card className="glass-card border-blue-ocean-600/10">
      <CardContent className="pt-6 space-y-4">
        <div className="flex justify-center mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-ocean-500 to-blue-ocean-400 flex items-center justify-center">
            <LogIn className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex gap-2">
          {(["student", "teacher", "admin"] as UserRole[]).map((r) => (
            <button key={r} type="button" onClick={() => setRole(r)}
              className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
                role === r ? "bg-blue-ocean-500 text-white" : "bg-white/[0.04] text-blue-ocean-200/40"
              }`}
            >
              {r === "student" ? t("auth.student", lang) : r === "teacher" ? t("auth.teacher", lang) : t("auth.admin", lang)}
            </button>
          ))}
        </div>
        <div className="space-y-1.5">
          <Label className="text-blue-ocean-200/60 text-xs">{t("auth.email", lang)}</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ivan@example.com"
            className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-blue-ocean-200/20" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-blue-ocean-200/60 text-xs">{t("auth.password", lang)}</Label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
            className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-blue-ocean-200/20" />
        </div>
        {error && <p className="text-red-400 text-xs text-center">{error}</p>}
      </CardContent>
      <CardFooter className="pb-6 pt-2">
        <Button type="submit" className="w-full bg-blue-ocean-500 hover:bg-blue-ocean-400 text-white" disabled={loading} onClick={handleSubmit}>
          {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
          {t("auth.loginBtn", lang)}
        </Button>
      </CardFooter>
    </Card>
  )
}
