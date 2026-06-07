import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section
      style={{
        padding: '96px 24px',
        background: 'linear-gradient(180deg, #1e1f22 0%, #1a1b1e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(255,208,0,0.07) 0%, transparent 60%)',
        }}
      />
      {/* Top accent line */}
      <div
        style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          height: 1, width: 500,
          background: 'linear-gradient(90deg, transparent, rgba(255,208,0,.3), transparent)',
        }}
      />

      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Bot avatar */}
        <div
          style={{
            width: 72, height: 72,
            borderRadius: 20,
            background: 'linear-gradient(135deg,#ffd000,#ff9f00)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 28px',
            fontSize: '2rem',
            boxShadow: '0 0 40px rgba(255,208,0,0.25)',
          }}
        >
          👀
        </div>

        <h2 className="heading-lg mb-4">
          Start stalking{' '}
          <span className="gradient-yellow">today.</span>
        </h2>

        <p style={{ color: '#b5bac1', fontSize: '1.05rem', marginBottom: 36, lineHeight: 1.6 }}>
          Join thousands of users who never miss a moment on Discord. Free to get started, no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="btn-yellow flex items-center justify-center gap-2 rounded-xl text-sm"
            style={{ padding: '12px 28px', width: '100%', maxWidth: 260 }}
          >
            Add to Discord — it's free
            <ArrowRight size={14} />
          </a>
          <a
            href="#"
            className="btn-ghost flex items-center justify-center rounded-xl text-sm"
            style={{ padding: '12px 28px', width: '100%', maxWidth: 220 }}
          >
            Join Support Server
          </a>
        </div>

        {/* Discord server count trust line */}
        <div
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            marginTop: 28,
          }}
        >
          <div className="flex" style={{ gap: -6 }}>
            {['#5865f2','#23a55a','#f0b232','#f23f43','#ff9f00'].map((c, i) => (
              <div
                key={i}
                style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: c,
                  border: '2px solid #1a1b1e',
                  marginLeft: i === 0 ? 0 : -8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.6rem', fontWeight: 800, color: '#fff',
                }}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <span style={{ fontSize: '.8rem', color: '#80848e' }}>
            Trusted by <strong style={{ color: '#b5bac1' }}>10,000+</strong> Discord users
          </span>
        </div>
      </div>
    </section>
  );
}
