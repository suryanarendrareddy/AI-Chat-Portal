import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SidebarTrigger } from './ui/sidebar'
import { Link } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const { isAuthenticated, logout } = useAuth()

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleTheme = () => {
    const isDark = !darkMode
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  const user = {
    name: 'Surya',
    image: '/My Passport Photo.jpg',
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <img src="/favIcon.png" alt="logo" className="w-6 h-6" />
            <span className="text-primary">Ergosphere</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-muted transition"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 ring-1 ring-muted-foreground/10 hover:ring-2 transition">
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                onClick={logout}
                className="hover:shadow-md transition"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/login"
                className="hover:shadow-sm text-sm font-medium hover:text-primary transition"
              >
                Log In
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
