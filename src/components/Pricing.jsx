import { motion } from 'framer-motion'

const plans = [
  { name: 'Launch', price: '$2,500', desc: 'One agent, up to 10k minutes/month, email support' },
  { name: 'Scale', price: '$6,500', desc: 'Multiple agents, 50k minutes/month, priority support' },
  { name: 'Enterprise', price: 'Let’s talk', desc: 'Custom SLAs, compliance, dedicated success' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(251,146,60,0.12)_0%,rgba(255,255,255,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Simple, usage-based pricing
        </motion.h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl dark:bg-black/40"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.name}</h3>
                <p className="mt-1 text-3xl font-extrabold text-slate-900 dark:text-white">{p.price}</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{p.desc}</p>
                <a href="#contact" className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-black">Get started</a>
              </div>
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-amber-400/25 via-violet-500/25 to-blue-500/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
