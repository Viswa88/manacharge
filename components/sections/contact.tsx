import { Phone, Mail, Globe } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const items = [
  { icon: Phone, label: 'Phone', value: '8095958166', href: 'tel:8095958166' },
  { icon: Mail, label: 'Email', value: 'info@manacharge.in', href: 'mailto:info@manacharge.in' },
  { icon: Globe, label: 'Domain', value: 'www.manacharge.in', href: 'https://www.manacharge.in' },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Let&apos;s Power Your Village Together
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i}>
              <a
                href={item.href}
                target={item.label === 'Domain' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="glass group flex h-full flex-col items-center rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="size-6" />
                </div>
                <span className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </span>
                <span className="mt-1 font-heading font-bold break-all">{item.value}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
