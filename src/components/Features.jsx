import { motion } from 'framer-motion'
import { PhoneCall, Brain, Headset, Bot, ShieldCheck, Rocket } from 'lucide-react'

const items = [
  {
    icon: PhoneCall,
    title: 'AI Reception & Routing',
    desc: 'Answer, qualify, and route inbound calls to the right teammate with zero wait time.'
  },
  {
    icon: Bot,
    title: 'Outbound Agents',
    desc: 'Automate follow-ups, reminders, and lead qualification with voice that feels human.'
  },
  {
    icon: Brain,
    title: 'Knowledge-grounded',
    desc: 'Grounded on your docs, CRM, and product data to ensure accurate, on-brand responses.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    desc: 'SOC 2, HIPAA, and PCI-ready pipelines with redaction, logging, and human-in-the-loop.'
  },
  {
    icon: Headset,
    title: 'Omnichannel',
    desc: 'Phone, web widget, and in-app voice — a single agent that meets users wherever they are.'
  },
  {
    icon: Rocket,
    title: 'Go live in days',
    desc: 'From script to agent in production with fast iteration and tight analytics.'
  },
]

export default function Features() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(129,140,248,0.15)_0%,rgba(255,255,255,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          What we build
        </motion.h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur-xl dark:bg-black/40"
            >
              <div className="relative z-10">
                <div className="inline-flex rounded-xl bg-gradient-to-br from-purple-500/15 via-blue-500/15 to-amber-400/15 p-2">
                  <Icon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{desc}</p>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/25 via-blue-500/25 to-amber-400/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
