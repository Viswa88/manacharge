import { Lightbulb, ClipboardList, PlugZap, Wrench, Briefcase } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const items = [
  {
    icon: Lightbulb,
    title: 'EV Awareness',
    desc: 'Educating villages on the benefits of clean electric mobility.',
  },
  {
    icon: ClipboardList,
    title: 'Village Surveys',
    desc: 'Mapping real transportation and charging needs across rural India.',
  },
  {
    icon: PlugZap,
    title: 'Charging Infrastructure',
    desc: 'Deploying accessible, solar-powered charging networks.',
  },
  {
    icon: Wrench,
    title: 'EV Service Support',
    desc: 'Establishing reliable local technician support systems.',
  },
  {
    icon: Briefcase,
    title: 'Local Employment',
    desc: 'Training rural youth and creating sustainable green jobs.',
  },
]

export function Mission() {
  return (
    <section id="mission" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Mission
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Building a Rural EV Ecosystem
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We are powering every village through five core pillars of clean,
            future-ready mobility.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i}>
              <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
