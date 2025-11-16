import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_30%,rgba(99,102,241,0.18)_0%,rgba(255,255,255,0)_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/70 p-8 text-center backdrop-blur-2xl dark:bg-black/40">
          <motion.h3
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold sm:text-3xl"
          >
            Ready to build your AI voice agent?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-3 max-w-xl text-slate-700 dark:text-slate-300"
          >
            Tell us about your use case and we’ll design, deploy, and iterate an agent that moves your KPIs.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            <input placeholder="Name" className="rounded-xl border border-white/20 bg-white/70 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900/10 dark:bg-white/10 dark:text-white" />
            <input placeholder="Work email" className="rounded-xl border border-white/20 bg-white/70 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900/10 dark:bg-white/10 dark:text-white" />
            <button className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-black">Request a demo</button>
          </motion.form>

          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">By submitting, you agree to our privacy policy.</p>
        </div>
      </div>
    </section>
  )
}
