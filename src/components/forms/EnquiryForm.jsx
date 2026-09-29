import { useState } from 'react'
import { isValidEmail, isValidPhone, submitEnquiry } from '../../utils/api'
import { enquiryInterests } from '../../data/company'

const empty = {
  name: '',
  phone: '',
  email: '',
  location: '',
  interest: 'Interior Doors',
  message: '',
}

export function EnquiryForm({ defaultInterest = 'Interior Doors', onSuccess, compact = false }) {
  const [values, setValues] = useState({ ...empty, interest: defaultInterest })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function validate() {
    const next = {}
    if (values.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!isValidPhone(values.phone)) next.phone = 'Enter a valid phone number.'
    if (!isValidEmail(values.email)) next.email = 'Enter a valid email address.'
    if (values.location.trim().length < 2) next.location = 'Please enter your location.'
    if (!values.interest) next.interest = 'Select what you are interested in.'
    if (values.message.trim().length < 10) next.message = 'Please add a short message (10+ characters).'
    return next
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

  const fieldClass =
    'w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-ink'

  if (status === 'success') {
    return (
      <div className="border border-line bg-surface px-6 py-10 text-center">
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
            className={fieldClass}
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            autoComplete="name"
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input
            className={fieldClass}
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91"
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" error={errors.email}>
          <input
            className={fieldClass}
            type="email"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            autoComplete="email"
            placeholder="you@email.com"
          />
        </Field>
        <Field label="Location" error={errors.location}>
          <input
            className={fieldClass}
            value={values.location}
            onChange={(e) => update('location', e.target.value)}
            placeholder="City / district"
          />
        </Field>
      </div>
      <Field label="Interested In" error={errors.interest}>
        <select
          className={`${fieldClass} appearance-none`}
          value={values.interest}
          onChange={(e) => update('interest', e.target.value)}
        >
          {enquiryInterests.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" error={errors.message}>
        <textarea
          className={`${fieldClass} min-h-32 resize-y`}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell us about the space, quantity or finish you have in mind."
        />
      </Field>
      {status === 'error' ? (
        <p className="text-sm text-accent">Something went wrong. Please try again.</p>
      ) : null}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center border border-ink bg-ink px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:border-accent hover:bg-accent disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-muted">{label}</span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-accent">{error}</span> : null}
    </label>
  )
}
