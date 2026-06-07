const LINKS: Record<string, string[]> = {
  Bot:       ['Add to Discord', 'Commands', 'Changelog'],
  Community: ['Support Server', 'Documentation', 'Status'],
  Legal:     ['Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: '#17181b',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '56px 24px 32px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div
                style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: 'linear-gradient(135deg,#ffd000,#ff9f00)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.8rem',
                }}
              >👀</div>
              <span style={{ fontWeight: 900, fontSize: '1rem', letterSpacing: '-.02em' }}>
                <span style={{ color: '#ffd000' }}>s</span>
                <span style={{ color: '#f2f3f5' }}>talk</span>
              </span>
            </div>
            <p style={{ fontSize: '.8rem', color: '#4e5058', lineHeight: 1.6 }}>
              Discord's premier activity intelligence bot.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, items]) => (
            <div key={section}>
              <h4
                style={{
                  fontSize: '.68rem', fontWeight: 700, letterSpacing: '.07em',
                  textTransform: 'uppercase', color: '#4e5058', marginBottom: 14,
                }}
              >{section}</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{ fontSize: '.82rem', color: '#80848e', transition: 'color .15s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#f2f3f5')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#80848e')}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between',
            gap: 12, paddingTop: 20,
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <p style={{ fontSize: '.75rem', color: '#4e5058' }}>
            &copy; 2026 stalk.bot — All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#23a55a',
                boxShadow: '0 0 6px rgba(35,165,90,0.8)',
              }}
            />
            <span style={{ fontSize: '.73rem', color: '#4e5058' }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
