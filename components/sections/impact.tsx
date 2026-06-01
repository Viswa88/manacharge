'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, MessageSquare, Users, BatteryCharging } from 'lucide-react'

const stats = [
  { icon: MapPin, label: 'Villages Covered', value: 120 },
  { icon: MessageSquare, label: 'Survey Responses', value: 4500 },
  { icon: Users, label: 'EV Ambassadors', value: 85 },
  { icon: BatteryCharging, label: 'Future Charging Stations', value: 50 },
]

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const duration = 1600
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}
      <span className="text-primary">+</span>
    </span>
  )
}

export function Impact() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass flex flex-col items-center rounded-2xl p-8 text-center"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="size-6" />
              </div>
              <div className="mt-5 font-heading text-4xl font-extrabold tracking-tight">
                <Counter value={s.value} />
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
