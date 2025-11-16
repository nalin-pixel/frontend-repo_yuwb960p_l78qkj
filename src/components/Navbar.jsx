import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#solutions', label: 'Solutions' },
    { href: '#work', label: 'Work' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/50 p-3 shadow-lg shadow-black/5 backdrop-blur-xl dark:bg-black/40">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400" />
            <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
              Basting Solutions
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-black"
            >
              Get a demo
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center rounded-lg p-2 text-slate-700 hover:bg-white/60 md:hidden dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/70 p-4 shadow-lg backdrop-blur-xl md:hidden dark:bg-black/50">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-slate-800 hover:bg-white/60 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm dark:bg-white dark:text-black"
              >
                Get a demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
