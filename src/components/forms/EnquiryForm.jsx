import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { isValidEmail, isValidPhone, submitEnquiry } from '../../utils/api'
import { enquiryInterests } from '../../data/company'
import { usePresence } from '../../hooks/usePresence'

const empty = {
  name: '',
  phone: '',
  email: '',
  location: '',
  interest: 'Interior Doors',
  message: '',
}

function fieldError(field, value) {
  const text = String(value ?? '').trim()
  if (field === 'name') {
    if (text.length < 2) return 'Please enter your name.'
    if (!/^[A-Za-z][A-Za-z .'-]*$/.test(text)) return 'Name can use letters only.'
  }
  if (field === 'phone' && !isValidPhone(text)) return 'Enter a valid 10-digit mobile number.'
  if (field === 'email' && text && !isValidEmail(text)) return 'Enter a valid email address.'
  if (field === 'location' && text.length < 2) return 'Please enter your city or district.'
  if (field === 'interest' && !text) return 'Select what you are interested in.'
  if (field === 'message' && text.length < 10) return 'Please add a short message (10+ characters).'
  return ''
}

export function EnquiryForm({ defaultInterest = 'Interior Doors', onSuccess, compact = false }) {
  const [values, setValues] = useState({ ...empty, interest: defaultInterest })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!touched[field] && !current[field]) return current
      const message = fieldError(field, value)
      return { ...current, [field]: message || undefined }
    })
  }

  function touch(field) {
    setTouched((current) => ({ ...current, [field]: true }))
    const message = fieldError(field, values[field])
    setErrors((current) => ({ ...current, [field]: message || undefined }))
  }

  function validate() {
    return Object.keys(values).reduce((next, field) => {
      const message = fieldError(field, values[field])
      if (message) next[field] = message
      return next
    }, {})
  }

  async function onSubmit(event) {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) return
    setStatus('submitting')
    try {
      await submitEnquiry(values)
      setStatus('success')
      setValues({ ...empty, interest: defaultInterest })
      onSuccess?.()
    } catch {
      setStatus('error')
    }
  }

  function inputClass(field) {
    const base =
      'w-full rounded-control border-0 bg-surface px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/70 focus:outline-none'
    return errors[field] ? `${base} shadow-[0_0_0_2px_#ff5700]` : `${base} shadow-card`
  }

  if (status === 'success') {
    return (
      <div className="rounded-card bg-surface px-6 py-10 text-center shadow-card">
        <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent">Enquiry received</p>
        <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">Thank you.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">
          We have received your enquiry and will be in touch shortly. For urgent requests, call us during working hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className={compact ? 'space-y-4' : 'space-y-5'}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            className={inputClass('name')}
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            onBlur={() => touch('name')}
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            maxLength={60}
            required
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input
            className={inputClass('phone')}
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            onBlur={() => touch('phone')}
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 79029 14120"
            aria-invalid={Boolean(errors.phone)}
            maxLength={16}
            required
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email (optional)" error={errors.email}>
          <input
            className={inputClass('email')}
            type="email"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            onBlur={() => touch('email')}
            autoComplete="email"
            placeholder="you@email.com"
            aria-invalid={Boolean(errors.email)}
            maxLength={80}
          />
        </Field>
        <Field label="Location" error={errors.location}>
          <input
            className={inputClass('location')}
            value={values.location}
            onChange={(e) => update('location', e.target.value)}
            onBlur={() => touch('location')}
            placeholder="City / district"
            aria-invalid={Boolean(errors.location)}
            maxLength={80}
            required
          />
        </Field>
      </div>
      <Field label="Interested In" error={errors.interest}>
        <InterestSelect
          value={values.interest}
          options={enquiryInterests}
          className={inputClass('interest')}
          invalid={Boolean(errors.interest)}
          onChange={(item) => update('interest', item)}
          onBlur={() => touch('interest')}
        />
      </Field>
      <Field label="Message" error={errors.message}>
        <textarea
          className={`${inputClass('message')} min-h-32 resize-y`}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          onBlur={() => touch('message')}
          placeholder="Tell us about the space, quantity or finish you have in mind."
          aria-invalid={Boolean(errors.message)}
          maxLength={1000}
          required
        />
      </Field>
      {status === 'error' ? (
        <p className="text-sm text-accent">Something went wrong. Please try again.</p>
      ) : null}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-control border border-ink bg-ink px-6 py-3.5 text-[13px] font-medium tracking-normal text-white shadow-float transition-colors hover:border-accent hover:bg-accent disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
        <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
      </button>
    </form>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-muted">{label}</span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-accent">{error}</span> : null}
    </div>
  )
}

function InterestSelect({ value, options, onChange, onBlur, className }) {
  const [open, setOpen] = useState(false)
  const { mounted, active } = usePresence(open, 180)
  const rootRef = useRef(null)

  useEffect(() => {
    function onPointerDown(event) {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  return (
    <div ref={rootRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className={`${className} flex items-center justify-between text-left`}
      >
        <span>{value}</span>
        <ChevronDown size={16} className={`shrink-0 text-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {mounted ? (
        <ul
          role="listbox"
          aria-label="Interested in"
          className={`mt-2 origin-top rounded-control bg-white p-1.5 shadow-float transition-[opacity,transform] duration-200 ease-out ${
            active ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: active ? 'translateY(0) scale(1)' : 'translateY(6px) scale(0.98)' }}
        >
          {options.map((item) => {
            const selected = item === value
            return (
              <li key={item}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(item)
                    setOpen(false)
                    onBlur?.()
                  }}
                  className={`w-full rounded-[0.45rem] px-3 py-2.5 text-left text-sm ${
                    selected ? 'bg-ink text-white' : 'text-ink hover:bg-surface'
                  }`}
                >
                  {item}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
