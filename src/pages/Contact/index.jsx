import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Seo } from '../../components/ui/Seo'
import { Container } from '../../components/ui/Container'
import { EnquiryForm } from '../../components/forms/EnquiryForm'
import { company } from '../../data/company'

const details = [
  { icon: Phone, label: 'Phone', value: company.phone, href: company.phoneHref },
  { icon: Mail, label: 'Email', value: company.email, href: company.emailHref },
  { icon: MapPin, label: 'Location', value: company.location.display },
  { icon: Clock, label: 'Working Hours', value: company.hours },
]

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact SANRO | Get a Quote"
        description="Enquire with SANRO Fibre Glass Industries for interior fibre doors, custom fibre solutions and waterproofing."
      />
      <section className="bg-surface pt-28 pb-16 lg:pt-32 lg:pb-20">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Contact</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Let’s build something better.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
            Tell us about the space, the quantity and the finish. We will come back with a clear next step.
          </p>
        </Container>
      </section>
      <section className="bg-white py-16 lg:py-24">
        <Container className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-2xl font-medium tracking-[-0.03em]">SANRO Fibre Glass Industries</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">{company.description}</p>
            <ul className="mt-10 space-y-6">
              {details.map((item) => {
                const Icon = item.icon
                const content = (
                  <>
                    <span className="mt-0.5 flex h-10 w-10 items-center justify-center border border-line">
                      <Icon size={16} strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-muted">{item.label}</span>
                      <span className="mt-1 block text-sm">{item.value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} className="flex items-start gap-4 hover:text-accent">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>
            <p className="mt-8 text-sm text-muted">{company.hoursNote}</p>
          </div>
          <div className="border border-line p-6 sm:p-10">
            <h2 className="text-xl font-medium tracking-[-0.02em]">Send an enquiry</h2>
            <p className="mt-2 mb-8 text-sm text-muted">All fields are required. We typically respond within one working day.</p>
            <EnquiryForm />
          </div>
        </Container>
      </section>
    </>
  )
}
