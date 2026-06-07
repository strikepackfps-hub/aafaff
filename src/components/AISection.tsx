import { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle, Hash } from 'lucide-react';

const EXAMPLES = [
  {
    user: 'Notify me when John starts playing Roblox and has been online for more than an hour.',
    rules: ['Presence: John online', 'Activity: Roblox', 'Duration: 60+ min'],
  },
  {
    user: 'Alert me when anyone with Moderator role joins VC and the channel has 5+ people.',
    rules: ['Role: Moderator', 'Event: joined voice', 'Members: ≥ 5'],
  },
  {
    user: 'Tell me when my whole friend group is online at the same time.',
    rules: ['Group: all members', 'Status: online', 'Condition: simultaneous'],
  },
];

export default function AISection() {
  const [active, setActive] = useState(0);
  const ex = EXAMPLES[active];

  return (
    <section
      style={{
        padding: '96px 24px',
        background: 'linear-gradient(180deg, #1e1f22 0%, #22242a 50%, #1e1f22 100%)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="section-label mb-5">
              <Sparkles size={12} /> AI-Powered
            </div>
            <h2 className="heading-lg mb-5">
              Create alerts in{' '}
              <span className="gradient-yellow">plain English.</span>
            </h2>
            <p style={{ color: '#b5bac1', lineHeight: 1.65, marginBottom: 28, fontSize: '1rem' }}>
              Skip the command syntax. Just describe what you want and Stalk's AI converts your plain-English request into precise, multi-condition alert rules — instantly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {[
                'Multi-condition rules from a single sentence',
                'Understands time windows and durations',
                'Suggests related alert variations',
                'Edit or chain rules with follow-up messages',
              ].map(p => (
                <div key={p} className="flex items-center gap-3">
                  <CheckCircle size={14} style={{ color: '#ffd000', flexShrink: 0 }} />
                  <span style={{ fontSize: '.9rem', color: '#b5bac1' }}>{p}</span>
                </div>
              ))}
            </div>
            <a href="#" className="btn-yellow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm">
              Try it free <ArrowRight size={13} />
            </a>
          </div>

          {/* Right — Discord DM window */}
          <div>
            <div
              className="dc-window"
              style={{ display: 'flex', flexDirection: 'column', height: 420 }}
            >
              {/* Title bar */}
              <div className="dc-titlebar">
                <div className="dc-dot" style={{ background: '#ff5f56' }} />
                <div className="dc-dot" style={{ background: '#ffbd2e' }} />
                <div className="dc-dot" style={{ background: '#27c93f' }} />
                <span style={{ color: '#4e5058', fontSize: '.73rem', marginLeft: 10 }}>
                  Direct Messages — Stalk
                </span>
              </div>

              {/* DM header */}
              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 16px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  background: '#2b2d31',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'linear-gradient(135deg,#ffd000,#ff9f00)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 900, fontSize: '.75rem', color: '#000',
                    flexShrink: 0,
                  }}
                >S</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontWeight: 700, fontSize: '.9rem', color: '#f2f3f5' }}>Stalk</span>
                    <span className="dc-bot-tag">APP</span>
                  </div>
                  <span style={{ fontSize: '.7rem', color: '#23a55a' }}>● Online</span>
                </div>
              </div>

              {/* Messages area */}
              <div className="dc-messages" style={{ padding: '12px 0' }}>

                {/* Bot intro */}
                <div className="dc-msg" style={{ paddingTop: 6 }}>
                  <div className="dc-avatar" style={{ background: 'linear-gradient(135deg,#ffd000,#ff9f00)', color: '#000' }}>S</div>
                  <div style={{ flex: 1 }}>
                    <div className="dc-msg-header">
                      <span className="dc-msg-user">Stalk</span>
                      <span className="dc-bot-tag">APP</span>
                    </div>
                    <p style={{ fontSize: '.9rem', color: '#dbdee1', lineHeight: 1.45 }}>
                      Hey! Tell me what you want to be notified about in plain English, and I'll create the alert for you.
                    </p>
                  </div>
                </div>

                {/* Example selector */}
                <div style={{ padding: '8px 16px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {EXAMPLES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      style={{
                        fontSize: '.72rem', fontWeight: 600, padding: '3px 10px',
                        borderRadius: 99, cursor: 'pointer',
                        background: active === i ? 'rgba(255,208,0,0.12)' : 'rgba(255,255,255,0.05)',
                        border: active === i ? '1px solid rgba(255,208,0,0.3)' : '1px solid rgba(255,255,255,0.08)',
                        color: active === i ? '#ffd000' : '#80848e',
                        transition: 'all .15s',
                      }}
                    >
                      Example {i + 1}
                    </button>
                  ))}
                </div>

                {/* User message */}
                <div key={`user-${active}`} className="dc-msg anim-fade-in" style={{ paddingTop: 6 }}>
                  <div className="dc-avatar" style={{ background: '#5865f2', color: '#fff' }}>Y</div>
                  <div style={{ flex: 1 }}>
                    <div className="dc-msg-header">
                      <span className="dc-msg-user">You</span>
                    </div>
                    <p style={{ fontSize: '.9rem', color: '#dbdee1', lineHeight: 1.45 }}>{ex.user}</p>
                  </div>
                </div>

                {/* Bot response */}
                <div key={`bot-${active}`} className="dc-msg anim-fade-in" style={{ paddingTop: 4 }}>
                  <div className="dc-avatar" style={{ background: 'linear-gradient(135deg,#ffd000,#ff9f00)', color: '#000' }}>S</div>
                  <div style={{ flex: 1 }}>
                    <div className="dc-msg-header">
                      <span className="dc-msg-user">Stalk</span>
                      <span className="dc-bot-tag">APP</span>
                    </div>
                    <p style={{ fontSize: '.875rem', color: '#dbdee1', marginBottom: 6 }}>
                      Got it! I created the following alert rules:
                    </p>
                    <div className="dc-embed">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Sparkles size={11} style={{ color: '#ffd000' }} />
                        <span className="dc-embed-title">Alert Created</span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {ex.rules.map(r => (
                          <span
                            key={r}
                            style={{
                              fontSize: '.72rem', fontWeight: 600, padding: '3px 9px',
                              borderRadius: 4,
                              background: 'rgba(255,208,0,0.08)',
                              border: '1px solid rgba(255,208,0,0.2)',
                              color: '#e8c860',
                            }}
                          >{r}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Input bar */}
              <div
                style={{
                  padding: '0 12px 12px',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    background: '#383a40',
                    borderRadius: 8,
                    padding: '10px 14px',
                    fontSize: '.875rem',
                    color: '#6d6f78',
                  }}
                >
                  Message @Stalk...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
