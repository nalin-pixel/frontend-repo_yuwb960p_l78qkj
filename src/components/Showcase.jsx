import { motion } from 'framer-motion'

const caseStudies = [
  {
    company: 'SaaS Support',
    result: 'Deflected 62% of calls and cut median wait to 0s',
    details: 'Voice agent trained on help center + product telemetry',
  },
  {
    company: 'Healthcare Intake',
    result: 'Automated HIPAA-compliant intake for 40+ clinics',
    details: 'Insurance verification, scheduling, and reminders',
  },
  {
    company: 'Fintech Collections',
    result: 'Recovered 23% more with empathetic outbound agents',
    details: 'Payments, disputes, and PCI-compliant redaction',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(14,165,233,0.12)_0%,rgba(255,255,255,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Results that speak
        </motion.h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/60 p-6 backdrop-blur-xl dark:bg-black/40"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{c.company}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{c.details}</p>
                <p className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{c.result}</p>
              </div>
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-400/25 via-blue-500/25 to-fuchsia-500/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
