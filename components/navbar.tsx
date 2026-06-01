'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Mission', href: '#mission' },
  { label: 'Survey', href: '#survey' },
  { label: 'Join Team', href: '#join-team' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6',
          scrolled ? 'glass shadow-lg shadow-foreground/5' : 'bg-transparent',
        )}
      >
        <a href="#home" className="flex items-center gap-2 font-heading text-lg font-extrabold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="size-5" fill="currentColor" />
          </span>
          ManaCharge
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden rounded-full sm:inline-flex" size="sm">
            <a href="#survey">Take Survey</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 md:hidden">
          <div className="glass flex flex-col gap-1 rounded-2xl p-3 shadow-lg">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-1 rounded-xl">
              <a href="#survey" onClick={() => setOpen(false)}>
                Take Survey
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
