import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(123,97,255,0.25)_0%,rgba(255,255,255,0)_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/40 px-3 py-1 text-xs font-medium backdrop-blur-xl dark:bg-black/40"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Custom AI Voice Agents
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-balance bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl dark:from-white dark:via-slate-200 dark:to-white"
        >
          Basting Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 max-w-2xl text-lg text-slate-700 sm:text-xl dark:text-slate-300"
        >
          We build production-grade voice agents that answer, qualify, and close — on the phone and in your product.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-black"
          >
            Book a strategy call
          </a>
          <a
            href="#work"
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-slate-300/40 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white dark:border-white/20 dark:bg-black/40 dark:text-white"
          >
            See our work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pointer-events-none mt-16 grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {["24/7", "PCI-DSS", "HIPAA", "SOC 2"].map((t) => (
            <div key={t} className="rounded-xl border border-white/20 bg-white/40 p-3 text-center text-xs font-semibold tracking-wide backdrop-blur-xl dark:bg-black/40">
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
