import { ClipboardCheck, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

// Replace with your real Google Form embed URL.
const GOOGLE_FORM_URL = 'https://forms.gle/2jEN891MBYcY7MMb6'

export function Survey() {
  return (
    <section id="survey" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            EV Readiness Survey
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Take the Village EV Survey
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Help us understand the charging, service, and transportation
            challenges in your village.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="glass mt-12 flex flex-col items-center rounded-3xl p-8 text-center sm:p-12">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ClipboardCheck className="size-8" />
            </div>
            <h3 className="mt-6 font-heading text-xl font-bold">
              Village EV Readiness Form
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Takes about 3 minutes. Your responses directly shape where we build
              charging and service infrastructure next.
            </p>

            {/* Google Form placeholder embed */}
            <div className="mt-8 w-full overflow-hidden rounded-2xl border border-border bg-background">
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 p-6 text-muted-foreground">
                <ClipboardCheck className="size-10 opacity-40" />
                <p className="text-sm font-medium">Google Form Embed Placeholder</p>
                <p className="text-xs">
                  {'Paste your Google Form <iframe> here in survey.tsx'}
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="mt-8 rounded-full">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                Start Survey
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
