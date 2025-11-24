import React from 'react'

type AppDescriptor = {
  id: string
  name: string
  tag: string
  description: string
  href: string
  accentClass: string
}

// Core Tacitus apps – to add a new one, just append to this array.
const coreApps: AppDescriptor[] = [
  {
    id: 'resolution',
    name: 'Resolution Engine',
    tag: 'Conflict Intelligence',
    description:
      'Email-native analysis for boards, teams, and institutions. Turn narrative asymmetry into structured evidence and common ground.',
    href: 'https://tacitus.me/resolution-engine', // TODO: update to your real URL
    accentClass: 'app-card--resolution'
  },
  {
    id: 'prism',
    name: 'Prism Lab · Polarization',
    tag: 'Polarization & Campaigns',
    description:
      'Dynamic explorer of polarization cases, audiences, and narratives. Map moral frames, backlash risk, and paths to cross-tribal agreement.',
    href: 'https://tacitus.me/polarization', // TODO: update
    accentClass: 'app-card--prism'
  },
  {
    id: 'graph',
    name: 'Ontology / Conflict Graph',
    tag: 'Graph-Native Ontology',
    description:
      'Interactive conflict graph and ontology engine. Trace influence, constraints, veto players, and bridge actors across complex systems.',
    href: 'https://tacitus.me/conflict-graph', // TODO: update
    accentClass: 'app-card--graph'
  }
]

// Ecosystem / external apps – Concordia Discors, future labs, etc.
const ecosystemApps: AppDescriptor[] = [
  {
    id: 'concordia',
    name: 'Concordia Discors Magazine',
    tag: 'Essays & Ideas',
    description:
      'Long-form explorations of polarization, liberty, conscience, and pluralism. Sister project to Tacitus, focused on narrative, meaning, and intellectual life.',
    href: 'https://concordiadiscors.org',
    accentClass: 'app-card--concordia'
  }
]

type AppHubProps = {
  onSignOut: () => void
}

export const AppHub: React.FC<AppHubProps> = ({ onSignOut }) => {
  const allApps = [...coreApps, ...ecosystemApps]

  return (
    <div className="app-root">
      <div className="background-orbit background-orbit--hub"></div>

      <header className="hub-header glass-panel">
        <div className="logo">
          TACITUS<span className="logo-mark">◳</span>
          <span className="logo-cursor">_</span>
        </div>
        <div className="hub-header-right">
          <span className="hub-badge">Apps Hub</span>
          <button className="signout-button" onClick={onSignOut}>
            Sign out
          </button>
        </div>
      </header>

      <main className="hub-main">
        <section className="hub-hero glass-panel">
          <h1 className="hub-title">Conflict Intelligence, One Door.</h1>
          <p className="hub-subtitle">
            Auth once with Supabase, then move seamlessly between the{' '}
            <strong>Resolution Engine</strong>,{' '}
            <strong>Prism Lab Polarization</strong>,{' '}
            <strong>Ontology / Conflict Graph</strong>, and our sister project{' '}
            <strong>Concordia Discors Magazine</strong>.
          </p>
          <div className="hub-meta">
            <span className="hub-pill">Email-native</span>
            <span className="hub-pill">Multi-agent</span>
            <span className="hub-pill">Graph-aware</span>
          </div>
        </section>

        <section className="hub-grid">
          {allApps.map(app => (
            <a
              key={app.id}
              href={app.href}
              className={`app-card glass-panel ${app.accentClass}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="app-card-header">
                <span className="app-tag">{app.tag}</span>
              </div>
              <h2 className="app-name">{app.name}</h2>
              <p className="app-description">{app.description}</p>
              <div className="app-footer">
                <span className="app-link-label">Open</span>
                <span className="app-link-arrow">↗</span>
              </div>
            </a>
          ))}
        </section>

        <footer className="hub-footer">
          <span>TACITUS◳ — clarity in conflict.</span>
          <span className="hub-footer-dot">•</span>
          <span>
            Concordia Discors Magazine — exploring polarization, liberty, and
            conscience.
          </span>
        </footer>
      </main>
    </div>
  )
}
