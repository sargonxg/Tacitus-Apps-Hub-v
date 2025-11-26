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
    id: 'concordia-engine',
    name: 'Concordia Engine',
    tag: 'Resolution Engine',
    description:
      "[IN DEVELOPMENT] Core conflict-intelligence engine for boards, teams, and institutions. Quantifies the resolution deficit, surfaces leverage points, and plots a structured path to common ground.",
    href: 'https://tacitus.me/resolution-engine', // placeholder route for now
    accentClass: 'app-card--resolution'
  },
  {
    id: 'prism',
    name: 'Prism Lab · Polarization v2.5',
    tag: 'Polarization & Campaigns',
    description:
      'Dynamic explorer of polarization cases, audiences, and narratives. Map moral frames, backlash risk, and paths to cross-tribal agreement.',
    href: 'https://tacitusme-prism-lab-build-11-23-2025-724361567200.us-west1.run.app',
    accentClass: 'app-card--prism'
  },
  {
    id: 'graph',
    name: 'Ontology & Conflict Graph v3.2 5',
    tag: 'Graph-Native Ontology',
    description:
      'Interactive conflict graph and ontology engine. Trace influence, constraints, veto players, and bridge actors across complex systems.',
    href: 'https://conflict-ontology-graph-engine-v5-tacitus-724361567200.us-west1.run.app',
    accentClass: 'app-card--graph'
  },
  {
    id: 'tribevibes',
    name: '27TribeVibes | Sentinel v1.2',
    tag: 'Epistemic Tribes Research',
    description:
      'Stress-test policies, products and narratives against 27 clustered political–epistemic tribes by ◳. Anticipate resonance, backlash, and coalition paths before you go live.',
    href: 'https://tribevibes-by-tacitus-me-v1-6-724361567200.us-west1.run.app', // TODO: update to real URL when ready
    accentClass: 'app-card--tribevibes'
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
  return (
    <div className="app-root">
      <div className="background-orbit background-orbit--hub"></div>

      <header className="hub-header glass-panel">
        <div className="logo">
          TACITUS<span className="logo-mark">◳</span>
          <span className="logo-cursor">_</span>
        </div>
        <div className="hub-header-right">
          <span className="hub-badge">APPS HUB</span>
          <button className="signout-button" onClick={onSignOut}>
            Sign out
          </button>
        </div>
      </header>

      <main className="hub-main">
        <section className="hub-hero glass-panel">
          <h1 className="hub-title">TACITUS◳ Apps Hub</h1>
          <p className="hub-subtitle">
            Your portal into our conflict intelligence and resolution
            technologies. We are actively building and testing new tools — this
            is where they ship first. For thoughts or early-access feedback,
            reach us at{' '}
            <a
              href="mailto:hello@tacitus.me"
              className="hub-link"
            >
              hello@tacitus.me
            </a>
            .
          </p>
          <div className="hub-meta">
            <span className="hub-pill">Conflict intelligence</span>
            <span className="hub-pill">Resolution technologies</span>
            <span className="hub-pill">Experimental builds</span>
          </div>
        </section>

        {/* Core products grid */}
        <section className="hub-grid">
          {coreApps.map(app => (
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

        {/* Ecosystem / magazine below the four main products */}
        <section className="hub-ecosystem">
          <h3 className="hub-section-title">Ecosystem</h3>
          <div className="hub-grid hub-grid--ecosystem">
            {ecosystemApps.map(app => (
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
          </div>
        </section>

        <footer className="hub-footer">
          <span>TACITUS◳ — clarity in conflict.</span>
          <span className="hub-footer-dot">•</span>
          <span>
            Concordia Discors Magazine — exploring polarization, liberty, and
            conscience.
          </span>
  {/* FOOTER */}
        <footer className="hub-footer">
          <span>TACITUS◳ — clarity in conflict.</span>
          <span className="hub-footer-dot">•</span>
          <span>
            Concordia Discors Magazine — exploring polarization, liberty, and conscience.
          </span>
          <span className="hub-footer-dot">•</span>
          <span className="hub-privacy">
            Your authentication email is stored securely in Supabase and used only to manage
            your access to Tacitus◳. You may request deletion or export of your data at{' '}
            <a href="mailto:hello@tacitus.me">hello@tacitus.me</a>.
          </span>
        </footer>
      </main>
    </div>
  )
}
