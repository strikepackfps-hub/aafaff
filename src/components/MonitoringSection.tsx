import { Mic, MicOff, Video, Volume2, UserCheck, Activity, Bell, Eye } from 'lucide-react';

function Alert({ title, desc, color, time }: { title: string; desc: string; color: string; time: string }) {
  return (
    <div className="rounded-xl p-3.5" style={{ background: '#111110', border: '1px solid #1e1e1c' }}>
      <div className="flex items-center gap-2 mb-2.5">
        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#ffd000,#ff9f00)' }}>
          <Eye size={11} className="text-black" />
        </div>
        <span className="text-white text-xs font-semibold">stalk</span>
        <span className="text-xs font-bold px-1 py-0.5 rounded" style={{ background: '#5865f2', color: '#fff', fontSize: '9px' }}>BOT</span>
        <span className="text-xs ml-auto" style={{ color: '#3a3a38' }}>{time}</span>
      </div>
      <div className="pl-3 rounded-r-md py-1" style={{ borderLeft: `3px solid ${color}` }}>
        <p className="text-sm font-semibold text-white mb-0.5">{title}</p>
        <p className="text-xs" style={{ color: '#8b8b8b' }}>{desc}</p>
      </div>
    </div>
  );
}

function StatusRow({ name, status, sub }: { name: string; status: 'online' | 'idle' | 'dnd' | 'offline'; sub: string }) {
  const colors = { online: '#23a55a', idle: '#f0b232', dnd: '#f23f43', offline: '#80848e' };
  return (
    <div className="flex items-center gap-3 py-2.5 px-3 rounded-lg" style={{ background: '#0d0d0c' }}>
      <div className="relative flex-shrink-0">
        <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white" style={{ background: '#1e1e1c' }}>{name[0]}</div>
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2" style={{ background: colors[status], borderColor: '#0d0d0c' }} />
      </div>
      <div>
        <p className="text-xs font-semibold text-white">{name}</p>
        <p className="text-xs" style={{ color: '#555552' }}>{sub}</p>
      </div>
    </div>
  );
}

const voiceEvents = [
  { icon: Volume2, label: 'Joined', color: '#23a55a' },
  { icon: MicOff, label: 'Server muted', color: '#f23f43' },
  { icon: Video, label: 'Streaming', color: '#ffd000' },
  { icon: Mic, label: 'Unmuted', color: '#23a55a' },
  { icon: Activity, label: 'Camera on', color: '#f0b232' },
  { icon: Bell, label: 'Left', color: '#f23f43' },
];

export default function MonitoringSection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4"
          style={{ background: 'rgba(255,208,0,0.06)', border: '1px solid rgba(255,208,0,0.15)' }}>
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#ffd000' }}>Monitoring</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4" style={{ letterSpacing: '-0.03em' }}>
          Watch everything.{' '}<span className="gradient-text">Miss nothing.</span>
        </h2>
        <p className="text-base max-w-xl mx-auto" style={{ color: '#8b8b8b' }}>
          Stalk monitors every corner of Discord activity and fires real-time alerts the moment something happens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Voice — wide */}
        <div className="lg:col-span-2 rounded-2xl p-6 card-hover" style={{ background: '#0e0e0d', border: '1px solid #1e1e1c' }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,208,0,0.1)', border: '1px solid rgba(255,208,0,0.2)' }}>
              <Volume2 size={15} style={{ color: '#ffd000' }} />
            </div>
            <span className="text-sm font-bold text-white">Voice Activity</span>
          </div>
          <p className="text-sm mb-5" style={{ color: '#555552' }}>Track every voice channel event in real time across any server.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
            {voiceEvents.map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: '#141413', border: '1px solid #1e1e1c' }}>
                <Icon size={12} style={{ color }} />
                <span className="text-xs font-medium" style={{ color: '#8b8b8b' }}>{label}</span>
              </div>
            ))}
          </div>
          <Alert color="#ffd000" title="Alex joined General VC" desc="Currently 4 members — Sarah, Mike, Jordan also present" time="just now" />
        </div>

        {/* Presence */}
        <div className="rounded-2xl p-6 card-hover" style={{ background: '#0e0e0d', border: '1px solid #1e1e1c' }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(35,165,90,0.1)', border: '1px solid rgba(35,165,90,0.2)' }}>
              <Activity size={15} style={{ color: '#23a55a' }} />
            </div>
            <span className="text-sm font-bold text-white">Presence</span>
          </div>
          <p className="text-sm mb-4" style={{ color: '#555552' }}>Online, idle, DND, offline — every transition tracked.</p>
          <div className="flex flex-col gap-1.5">
            <StatusRow name="Jordan" status="online" sub="Playing Valorant" />
            <StatusRow name="Casey" status="idle" sub="Away" />
            <StatusRow name="Morgan" status="dnd" sub="Listening to Spotify" />
            <StatusRow name="Riley" status="offline" sub="Offline" />
          </div>
        </div>

        {/* Profile */}
        <div className="rounded-2xl p-6 card-hover" style={{ background: '#0e0e0d', border: '1px solid #1e1e1c' }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,208,0,0.1)', border: '1px solid rgba(255,208,0,0.2)' }}>
              <UserCheck size={15} style={{ color: '#ffd000' }} />
            </div>
            <span className="text-sm font-bold text-white">Profile Changes</span>
          </div>
          <p className="text-sm mb-4" style={{ color: '#555552' }}>Avatar, username, nickname, banner, roles, server boosts.</p>
          <Alert color="#ffd000" title="Username changed" desc="cooluser123 → xXgamer_eliteXx" time="2m ago" />
        </div>

        {/* Messages */}
        <div className="rounded-2xl p-6 card-hover" style={{ background: '#0e0e0d', border: '1px solid #1e1e1c' }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,159,0,0.1)', border: '1px solid rgba(255,159,0,0.2)' }}>
              <Bell size={15} style={{ color: '#ff9f00' }} />
            </div>
            <span className="text-sm font-bold text-white">Message Events</span>
          </div>
          <p className="text-sm mb-4" style={{ color: '#555552' }}>Sends, edits, deletes, pins, reactions, threads, keyword triggers.</p>
          <div className="flex flex-wrap gap-2">
            {['Send', 'Edit', 'Delete', 'Pin', 'React', 'Thread', 'Keyword', 'Typing'].map(t => (
              <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: '#141413', border: '1px solid #1e1e1c', color: '#8b8b8b' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Server */}
        <div className="rounded-2xl p-6 card-hover" style={{ background: '#0e0e0d', border: '1px solid #1e1e1c' }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(242,63,67,0.1)', border: '1px solid rgba(242,63,67,0.2)' }}>
              <Eye size={15} style={{ color: '#f23f43' }} />
            </div>
            <span className="text-sm font-bold text-white">Server Events</span>
          </div>
          <p className="text-sm mb-4" style={{ color: '#555552' }}>Joins, leaves, bans, unbans, timeouts, and member actions.</p>
          <Alert color="#f23f43" title="Member Joined" desc="Jake#0001 just joined your server" time="5m ago" />
        </div>

      </div>
    </section>
  );
}
