'use client'

import { useLang } from '@/lib/i18n/provider'
import { Reveal, SectionLabel } from './reveal'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Rua+Avanhandava+Bela+Vista+Sao+Paulo'

type HouseContact = {
  name: string
  address: string
  phoneDisplay: string
  phoneTel: string
}

const HOUSES: HouseContact[] = [
  {
    name: 'Trattoria Famiglia Mancini',
    address: 'Rua Avanhandava, 81 — Bela Vista, São Paulo · SP',
    phoneDisplay: '+55 11 3256-4320',
    phoneTel: '+551132564320',
  },
  {
    name: 'Il Ristorante Walter Mancini',
    address: 'Rua Avanhandava, 126 — Bela Vista, São Paulo · SP',
    phoneDisplay: '+55 11 3258-8510',
    phoneTel: '+551132588510',
  },
  {
    name: 'Pizzaria Famiglia Mancini',
    address: 'Rua Avanhandava, 37 — Bela Vista, São Paulo · SP',
    phoneDisplay: '+55 11 3231-0033',
    phoneTel: '+551132310033',
  },
]

const RESERVAS_EMAIL = 'reservas@famigliamancini.com.br'
const RESERVAS_PHONE_DISPLAY = '+55 11 3255-6599'
const RESERVAS_PHONE_TEL = '+551132556599'

export function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="relative bg-espresso py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel className="text-beige">{t.contact.label}</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-serif text-5xl leading-[0.95] md:text-7xl">
                {t.contact.title}
              </h2>
            </Reveal>

            <div className="mt-12 space-y-10">
              {HOUSES.map((house, i) => (
                <Reveal key={house.name} delay={120 + i * 40}>
                  <div className="border-l border-cream/20 pl-5">
                    <p className="font-serif text-xl italic text-beige md:text-2xl">
                      {house.name}
                    </p>
                    <p className="mt-2 text-sm font-light text-cream/70">
                      {house.address}
                    </p>
                    <a
                      href={`tel:${house.phoneTel}`}
                      className="link-underline mt-1 inline-block text-sm font-light text-cream/80"
                    >
                      {house.phoneDisplay}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <div className="mt-10 border-t border-cream/15 pt-8">
                <p className="eyebrow text-cream/50">{t.contact.phoneLabel}</p>
                <a
                  href={`mailto:${RESERVAS_EMAIL}`}
                  className="link-underline mt-2 inline-block font-serif text-xl italic text-cream md:text-2xl"
                >
                  {RESERVAS_EMAIL}
                </a>
                <p className="mt-2 text-sm font-light text-cream/70">
                  {RESERVAS_PHONE_DISPLAY}
                </p>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8">
                <p className="eyebrow text-cream/50">{t.contact.hoursLabel}</p>
                <p className="mt-2 text-lg font-light text-cream/80">{t.contact.hours}</p>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`tel:${RESERVAS_PHONE_TEL}`}
                  className="group inline-flex items-center gap-2 bg-rosso px-6 py-3.5 text-[0.72rem] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-rosso-bright"
                >
                  {t.contact.call}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-cream/40 px-6 py-3.5 text-[0.72rem] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-cream hover:text-espresso"
                >
                  {t.contact.directions}
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">↗</span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] w-full overflow-hidden border border-cream/15"
                aria-label={t.contact.directions}
              >
                <iframe
                  title="Mapa — Rua Avanhandava, Bela Vista, São Paulo"
                  src="https://www.google.com/maps?q=Rua+Avanhandava+Bela+Vista+Sao+Paulo&output=embed"
                  className="pointer-events-none h-full w-full grayscale transition-all duration-700 group-hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <span className="absolute inset-0 bg-espresso/20 transition-colors duration-500 group-hover:bg-transparent" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
