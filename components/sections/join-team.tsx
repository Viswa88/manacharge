import { Check, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const benefits = [
  'Flexible schedule',
  'Work from your hometown',
  'Earn based on contribution',
  'Certificate of participation',
  'Support rural development',
]

export function JoinTeam() {
  return (
    <section id="join-team" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass grid items-center gap-10 overflow-hidden rounded-3xl p-8 sm:p-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Join The EV Survey Team
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Become an EV Survey Ambassador
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Use your phone. Work during weekends. Visit your village. Help
              build the future of clean mobility.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="rounded-full">
                <a href="tel:8095958166">
                  <Phone className="size-4" />
                  Call Now: 8095958166
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <ul className="grid gap-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 rounded-xl bg-background/60 p-4 text-sm font-medium"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-4" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
