const items = [
  'Voice Activity', 'Presence Tracking', 'Profile Changes', 'AI-Powered Alerts',
  'Message Events', 'Friend Groups', 'Quiet Hours', 'Alert History',
  'Role Changes', 'Spotify Activity', 'Server Boosts', 'Typing Indicators',
  'Thread Activity', 'Cross-Server', 'Custom Schedules', 'Snooze Alerts',
];

function Strip({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', padding: '6px 0' }}>
      <div className={`flex gap-3 w-max ${reverse ? 'anim-marquee-r' : 'anim-marquee'}`}>
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 flex-shrink-0"
            style={{
              padding: '6px 14px',
              borderRadius: 99,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#ffd000',
                boxShadow: '0 0 6px rgba(255,208,0,0.8)',
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: '.75rem', fontWeight: 500, color: '#80848e' }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      style={{
        position: 'relative',
        padding: '20px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(43,45,49,0.5)',
      }}
    >
      <div
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 10, pointerEvents: 'none',
          background: 'linear-gradient(90deg,#1e1f22,transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 10, pointerEvents: 'none',
          background: 'linear-gradient(270deg,#1e1f22,transparent)',
        }}
      />
      <Strip />
      <Strip reverse />
    </div>
  );
}
