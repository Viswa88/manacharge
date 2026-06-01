import { Reveal } from '@/components/reveal'

const phases = [
  { phase: 'Phase 1', title: 'Village Surveys', desc: 'Mapping EV readiness across rural India.' },
  { phase: 'Phase 2', title: 'EV Support Network', desc: 'Building local service and awareness hubs.' },
  { phase: 'Phase 3', title: 'Solar Charging Stations', desc: 'Deploying clean, solar-powered charging.' },
  { phase: 'Phase 4', title: 'Village EV Service Engineers', desc: 'Training certified local technicians.' },
  { phase: 'Phase 5', title: 'India-wide Expansion', desc: 'Scaling the network across the nation.' },
]

export function Vision() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Future Vision
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Every Village EV Ready
          </h2>
        </Reveal>

        <div className="relative mt-14 pl-8 sm:pl-0">
          {/* vertical line */}
          <div className="absolute top-0 bottom-0 left-2 w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-8">
            {phases.map((p, i) => (
              <Reveal key={p.phase} delay={i}>
                <div
                  className={`relative sm:flex sm:items-center ${
                    i % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
                  }`}
                >
                  {/* dot */}
                  <span className="absolute -left-[1.65rem] top-2 flex size-4 items-center justify-center rounded-full border-2 border-background bg-primary sm:left-1/2 sm:-translate-x-1/2" />
                  <div className="glass w-full rounded-2xl p-6 sm:w-[calc(50%-2rem)]">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {p.phase}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
