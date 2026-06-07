import { ArrowRight, Hash, Volume2, Bell, Zap, Shield } from 'lucide-react';

const EMBED_MSGS = [
  {
    id: 1,
    embedColor: '',
    embedClass: '',
    title: 'Voice Alert',
    desc: 'Alex joined General VC',
    sub: '4 members now in channel',
    icon: '🔊',
    agoClass: 'anim-fade-in d2',
  },
  {
    id: 2,
    embedColor: '',
    embedClass: 'dc-embed-green',
    title: 'Presence Alert',
    desc: 'Jordan came online',
    sub: 'Now playing Valorant',
    icon: '🟢',
    agoClass: 'anim-fade-in d3',
  },
  {
    id: 3,
    embedColor: '',
    embedClass: 'dc-embed-idle',
    title: 'Profile Alert',
    desc: 'Morgan changed their avatar',
    sub: 'Profile updated just now',
    icon: '👤',
    agoClass: 'anim-fade-in d4',
  },
];

function DiscordWindowMockup() {
  return (
    <div className="dc-window anim-float" style={{ width: '100%', maxWidth: 560, height: 380, display: 'flex', flexDirection: 'column' }}>
      {/* Title bar */}
      <div className="dc-titlebar">
        <div className="dc-dot" style={{ background: '#ff5f56' }} />
        <div className="dc-dot" style={{ background: '#ffbd2e' }} />
        <div className="dc-dot" style={{ background: '#27c93f' }} />
        <span style={{ color: '#4e5058', fontSize: '.75rem', marginLeft: 8 }}>Discord</span>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Sidebar */}
        <div className="dc-sidebar" style={{ width: 200 }}>
          <div className="dc-server-name" style={{ fontSize: '.85rem' }}>
            Stalk Alerts
          </div>
          <div className="dc-channels">
            <div className="dc-category">Text Channels</div>
            <div className="dc-channel active">
              <Hash size={14} style={{ flexShrink: 0 }} /> stalk-alerts
            </div>
            <div className="dc-channel">
              <Hash size={14} style={{ flexShrink: 0 }} /> vc-logs
            </div>
            <div className="dc-channel">
              <Bell size={14} style={{ flexShrink: 0 }} /> dm-alerts
            </div>
            <div className="dc-category">Voice</div>
            <div className="dc-channel">
              <Volume2 size={14} style={{ flexShrink: 0 }} /> General
            </div>
          </div>
        </div>

        {/* Chat */}
        <div className="dc-chat">
          <div className="dc-chat-header">
            <Hash size={16} style={{ color: '#80848e' }} />
            <span style={{ fontWeight: 700, fontSize: '.9375rem' }}>stalk-alerts</span>
            <div
              className="ml-auto flex items-center gap-1.5 px-2 py-0.5 rounded"
              style={{ background: 'rgba(35,165,90,.12)', border: '1px solid rgba(35,165,90,.25)' }}
            >
              <div className="status-dot status-online" style={{ width: 6, height: 6 }} />
              <span style={{ fontSize: '.7rem', fontWeight: 700, color: '#23a55a' }}>LIVE</span>
            </div>
          </div>

          <div className="dc-messages">
            {EMBED_MSGS.map(m => (
              <div key={m.id} className={`dc-msg ${m.agoClass} op0`} style={{ paddingTop: 8 }}>
                <div
                  className="dc-avatar"
                  style={{ background: 'linear-gradient(135deg,#ffd000,#ff9f00)', marginTop: 0 }}
                >
                  <span style={{ fontSize: '.75rem', fontWeight: 900, color: '#000' }}>S</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="dc-msg-header">
                    <span className="dc-msg-user">Stalk</span>
                    <span className="dc-bot-tag">APP</span>
                    <span className="dc-msg-time">Today</span>
                  </div>
                  <div className={`dc-embed ${m.embedClass}`}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Zap size={11} style={{ color: '#ffd000' }} />
                      <span className="dc-embed-title" style={{ fontSize: '.78rem' }}>{m.title}</span>
                    </div>
                    <div className="dc-embed-desc">{m.desc}</div>
                    <div className="dc-embed-sub">{m.sub}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            <div className="dc-msg" style={{ paddingTop: 10, alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex', gap: 3, paddingLeft: 50 }}>
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className="typing-dot"
                    style={{ animation: `pulse 1.2s ${i * 0.2}s ease-in-out infinite` }}
                  />
                ))}
                <span style={{ fontSize: '.75rem', color: '#80848e', marginLeft: 6 }}>
                  Stalk is watching...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const STATS = [
  { n: '10K+', l: 'Users' },
  { n: '500K+', l: 'Alerts sent' },
  { n: '50+', l: 'Event types' },
  { n: '99.9%', l: 'Uptime' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ background: '#1e1f22' }}
    >
      {/* Background glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%', left: '-5%', width: '60%', height: '70%',
          background: 'radial-gradient(ellipse, rgba(255,208,0,0.06) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%', right: '-5%', width: '50%', height: '60%',
          background: 'radial-gradient(ellipse, rgba(88,101,242,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <div className="section-label anim-fade-up op0 mb-6">
              Discord Activity Intelligence
            </div>

            <h1 className="heading-xl text-white anim-fade-up op0 d1 mb-5">
              Watch Discord.<br />
              <span className="gradient-yellow">Catch everything.</span>
            </h1>

            <p
              className="text-lg leading-relaxed anim-fade-up op0 d2 mb-8"
              style={{ color: '#b5bac1', maxWidth: 460 }}
            >
              Stalk is a real-time Discord monitoring bot that fires custom alerts when specific users, voice channels, presence, profiles, or messages change — exactly how you want it.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10 anim-fade-up op0 d3">
              <a href="#" className="btn-yellow flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm">
                Add to Discord <ArrowRight size={14} />
              </a>
              <a href="#" className="btn-ghost flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm">
                <Shield size={14} /> View Commands
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 anim-fade-up op0 d4">
              {STATS.map(({ n, l }) => (
                <div key={l} className="flex flex-col">
                  <span
                    className="gradient-yellow font-black"
                    style={{ fontSize: 'clamp(1.1rem,2vw,1.5rem)', lineHeight: 1 }}
                  >{n}</span>
                  <span style={{ fontSize: '.75rem', color: '#80848e', marginTop: 3 }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Discord window */}
          <div className="hidden lg:flex justify-end anim-slide-in op0 d2">
            <div
              style={{
                filter: 'drop-shadow(0 0 60px rgba(255,208,0,0.12)) drop-shadow(0 32px 64px rgba(0,0,0,.5))',
                transform: 'perspective(1000px) rotateY(-4deg) rotateX(2deg)',
                width: '100%',
              }}
            >
              <DiscordWindowMockup />
            </div>
          </div>

          {/* Mobile Discord window */}
          <div className="lg:hidden anim-fade-up op0 d5">
            <DiscordWindowMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
