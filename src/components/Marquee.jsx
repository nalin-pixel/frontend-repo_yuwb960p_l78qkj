import { useEffect, useRef } from 'react'

const logos = [
  { name: 'OpenAI', text: 'OpenAI' },
  { name: 'Twilio', text: 'Twilio' },
  { name: 'AWS', text: 'AWS' },
  { name: 'Azure', text: 'Azure' },
  { name: 'Google Cloud', text: 'Google Cloud' },
  { name: 'Stripe', text: 'Stripe' },
]

export default function Marquee() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onHover = () => (el.style.animationPlayState = 'paused')
    const onLeave = () => (el.style.animationPlayState = 'running')
    el.addEventListener('mouseenter', onHover)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mouseenter', onHover)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className="relative py-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent dark:via-white/5" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/60 p-4 backdrop-blur-xl dark:bg-black/40">
          <div
            ref={ref}
            className="flex animate-[marquee_25s_linear_infinite] gap-8 whitespace-nowrap"
            style={{
              ['--gap']: '2rem',
            }}
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                {logos.map((l) => (
                  <span key={l.name} className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {l.text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
