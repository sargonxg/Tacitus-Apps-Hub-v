import React, { useEffect, useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from './supabaseClient'
import { Auth } from './components/Auth'
import { AppHub } from './components/AppHub'

const App: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        console.error('Error getting session:', error.message)
      }
      setSession(data.session ?? null)
      setLoading(false)
    }

    init()

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="app-root app-root--center">
        <div className="loader-orb"></div>
        <p className="loader-text">Booting TACITUS◳ Apps Hub…</p>
      </div>
    )
  }

  if (!session) {
    return <Auth />
  }

  return <AppHub onSignOut={() => supabase.auth.signOut()} />
}

export default App
