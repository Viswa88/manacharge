import { Lightbulb, PlugZap, Wrench, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const cards = [
  {
    icon: Lightbulb,
    title: 'EV Awareness',
    desc: 'Helping villagers understand EV benefits and the shift to clean energy.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: PlugZap,
    title: 'Charging Infrastructure',
    desc: 'Building accessible charging networks reaching every corner.',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Wrench,
    title: 'EV Service Support',
    desc: 'Creating dependable local technician support for every owner.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: GraduationCap,
    title: 'Employment Generation',
    desc: 'Training youth and creating meaningful jobs in rural India.',
    color: 'bg-primary/10 text-primary',
  },
]

export function Why() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Why ManaCharge?
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            A Complete Rural EV Support System
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i}>
              <div className="glass flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5">
                <div className={`flex size-12 items-center justify-center rounded-xl ${card.color}`}>
                  <card.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
