import { Users, Clock, BarChart3, BellOff, Globe, Layers, Timer, Cpu, Shield, Zap } from 'lucide-react';

const FEATURES = [
  { icon: Users,    title: 'Friend Groups',         desc: 'Bundle friends together and alert when specific combos come online or hop in VC.', color: '#ffd000' },
  { icon: Clock,    title: 'Quiet Hours',            desc: 'Schedule silence windows. Sleep uninterrupted, wake up to a full replay log.', color: '#23a55a' },
  { icon: BarChart3,title: 'Alert Analytics',        desc: 'History logs, activity frequency charts, and trend graphs across all tracked users.', color: '#ff9f00' },
  { icon: BellOff,  title: 'Snooze Alerts',          desc: 'Temporarily pause any alert. It resumes automatically when the snooze expires.', color: '#f23f43' },
  { icon: Globe,    title: 'Cross-Server',           desc: 'Monitor users across one, many, or all mutual servers in a single setup.', color: '#5865f2' },
  { icon: Layers,   title: 'Alert Templates',        desc: 'Save configs as templates. Share them or apply complex setups with one command.', color: '#ffd000' },
  { icon: Timer,    title: 'Duration Conditions',    desc: 'Only fire after someone has been in a state for a set amount of time.', color: '#23a55a' },
  { icon: Cpu,      title: 'Prediction Engine',      desc: 'Learns user patterns from history and predicts when they\'re likely to come online.', color: '#ff9f00' },
  { icon: Shield,   title: 'Alert Permissions',      desc: 'Control exactly who in a server can view, edit, or receive different alert types.', color: '#f23f43' },
  { icon: Zap,      title: 'Instant Delivery',       desc: 'Sub-second alert delivery through optimized Discord gateway connections.', color: '#5865f2' },
];

export default function FeatureGrid() {
  return (
    <section style={{ padding: '96px 24px', background: '#1e1f22' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">Full Feature Set</div>
          <h2 className="heading-lg mb-4">
            Built for power users.{' '}
            <span className="gradient-yellow">Every edge case covered.</span>
          </h2>
          <p style={{ color: '#b5bac1', maxWidth: 500, margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
            Stalk is purpose-built for precision alerting — every feature exists to help you monitor smarter with zero noise.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 12,
          }}
        >
          {FEATURES.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="card" style={{ padding: '20px' }}>
              <div
                style={{
                  width: 36, height: 36,
                  borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 14,
                  background: `${color}14`,
                  border: `1px solid ${color}22`,
                }}
              >
                <Icon size={16} style={{ color }} />
              </div>
              <h3 style={{ fontSize: '.875rem', fontWeight: 700, color: '#f2f3f5', marginBottom: 6 }}>{title}</h3>
              <p style={{ fontSize: '.78rem', color: '#80848e', lineHeight: 1.55 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
