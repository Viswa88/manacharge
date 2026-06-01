import { Zap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <a href="#home" className="flex items-center gap-2 font-heading text-lg font-extrabold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="size-5" fill="currentColor" />
          </span>
          ManaCharge
        </a>
        <p className="text-sm font-medium text-muted-foreground">
          Powering Every Village
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ManaCharge. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
