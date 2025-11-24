import React, { useState } from 'react'
import { supabase } from '../supabaseClient'

export const Auth: React.FC = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>(
    'idle'
  )
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage(null)

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true
      }
    })

    if (error) {
      console.error(error)
      setErrorMessage(error.message)
      setStatus('error')
    } else {
      setStatus('sent')
    }
  }

  return (
    <div className="app-root">
      <div className="background-orbit"></div>
      <div className="auth-card glass-panel">
        <div className="logo">
          TACITUS<span className="logo-mark">◳</span>
          <span className="logo-cursor">_</span>
        </div>
        <h1 className="auth-title">Apps Hub Access</h1>
        <p className="auth-subtitle">
          One sign-in unlocks all <strong>TACITUS◳</strong> resources.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-label">
            Work email
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@organization.org"
              className="auth-input"
            />
          </label>

          <button
            type="submit"
            className="auth-button"
            disabled={status === 'loading' || status === 'sent'}
          >
            {status === 'loading'
              ? 'Sending secure link…'
              : status === 'sent'
              ? 'Link sent – check your inbox'
              : 'Send sign-in link'}
          </button>
        </form>

        {status === 'sent' && (
          <p className="auth-message auth-message--success">
            We’ve emailed you a secure sign-in link. Open it on this device to
            access the hub.
          </p>
        )}

        {status === 'error' && errorMessage && (
          <p className="auth-message auth-message--error">
            {errorMessage}
            <br />
            Check that your Supabase <em>Site URL</em> matches this domain in
            your project auth settings.
          </p>
        )}

        <p className="auth-footer">
          Built on Supabase auth · Tacitus conflict intelligence stack
        </p>
      </div>
    </div>
  )
}
