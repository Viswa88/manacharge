'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 size-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-32 -right-24 size-72 rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold text-muted-foreground"
          >
            <span className="size-2 rounded-full bg-primary" />
            Building India&apos;s Largest Village EV Support Network
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Mana<span className="text-primary">Charge</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 font-heading text-xl font-bold text-secondary sm:text-2xl"
          >
            Powering Every Village
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            Building India&apos;s Rural EV Ecosystem through Charging
            Infrastructure, EV Service Support, Solar Energy, and Local
            Employment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
              <a href="#survey">
                Take EV Survey
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-full sm:w-auto"
            >
              <a href="#join-team">
                <Users className="size-4" />
                Join Survey Team
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass overflow-hidden rounded-3xl p-2 shadow-2xl shadow-foreground/10">
            <Image
              src="/hero-village-ev.png"
              alt="Electric bikes at a solar-powered charging station in an Indian village with a service engineer helping a customer"
              width={720}
              height={720}
              priority
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
