import { useState } from 'react';
import { Hash, Volume2, Bell, User, Zap, MessageSquare } from 'lucide-react';

const TABS = [
  { id: 'voice',    label: 'Voice Activity',   icon: Volume2 },
  { id: 'presence', label: 'Presence',          icon: Bell },
  { id: 'profile',  label: 'Profile Changes',   icon: User },
  { id: 'messages', label: 'Message Events',    icon: MessageSquare },
];

type MsgType = { avatar: string; name: string; isBot: boolean; text?: string; embeds?: EmbedType[]; };
type EmbedType = { cls: string; title: string; desc: string; sub?: string; fields?: { k: string; v: string }[] };

const TAB_CONTENT: Record<string, { channel: string; messages: MsgType[] }> = {
  voice: {
    channel: 'vc-logs',
    messages: [
      {
        avatar: 'A', name: 'Alex', isBot: false,
        text: 'goin in vc who wants to join',
      },
      {
        avatar: 'S', name: 'Stalk', isBot: true,
        embeds: [
          { cls: '', title: 'Voice Alert — Joined', desc: 'Alex joined General VC', sub: 'Channel now has 3 members', fields: [{ k: 'Channel', v: 'General' }, { k: 'Members', v: '3' }] },
        ],
      },
      {
        avatar: 'S', name: 'Stalk', isBot: true,
        embeds: [
          { cls: 'dc-embed-idle', title: 'Voice Alert — Muted', desc: 'Alex server-muted', sub: 'Happened 2 seconds ago' },
          { cls: 'dc-embed-green', title: 'Voice Alert — Stream', desc: 'Alex started streaming', sub: 'Screen share active' },
        ],
      },
    ],
  },
  presence: {
    channel: 'presence-alerts',
    messages: [
      {
        avatar: 'S', name: 'Stalk', isBot: true,
        embeds: [
          { cls: 'dc-embed-green', title: 'Presence Alert — Online', desc: 'Jordan came online', sub: 'Was offline for 6 hours', fields: [{ k: 'Status', v: 'Online' }, { k: 'Activity', v: 'Valorant' }] },
        ],
      },
      {
        avatar: 'S', name: 'Stalk', isBot: true,
        embeds: [
          { cls: 'dc-embed-idle', title: 'Presence Alert — Idle', desc: 'Casey went idle', sub: 'Active 12 minutes ago' },
        ],
      },
      {
        avatar: 'S', name: 'Stalk', isBot: true,
        embeds: [
          { cls: '', title: 'Activity Alert — Spotify', desc: 'Morgan is listening to music', sub: 'Listening to Spotify', fields: [{ k: 'Track', v: 'Blinding Lights' }, { k: 'Artist', v: 'The Weeknd' }] },
        ],
      },
    ],
  },
  profile: {
    channel: 'profile-changes',
    messages: [
      {
        avatar: 'S', name: 'Stalk', isBot: true,
        embeds: [
          { cls: 'dc-embed-idle', title: 'Profile Alert — Username', desc: 'cooluser123 changed their username', sub: 'Now: xX_gamer_elite_Xx', fields: [{ k: 'Before', v: 'cooluser123' }, { k: 'After', v: 'xX_gamer_elite_Xx' }] },
        ],
      },
      {
        avatar: 'S', name: 'Stalk', isBot: true,
        embeds: [
          { cls: '', title: 'Profile Alert — Avatar', desc: 'Jordan updated their profile picture', sub: 'Avatar changed' },
          { cls: 'dc-embed-green', title: 'Role Alert — Added', desc: 'Jordan received the Booster role', sub: 'Role granted by server boost' },
        ],
      },
    ],
  },
  messages: {
    channel: 'message-logs',
    messages: [
      {
        avatar: 'J', name: 'Jake', isBot: false,
        text: 'hey check out this new game its insane',
      },
      {
        avatar: 'S', name: 'Stalk', isBot: true,
        embeds: [
          { cls: '', title: 'Keyword Alert — Triggered', desc: '"game" mentioned by Jake', sub: 'In #general · server-name', fields: [{ k: 'Keyword', v: 'game' }, { k: 'Channel', v: '#general' }] },
        ],
      },
      {
        avatar: 'S', name: 'Stalk', isBot: true,
        embeds: [
          { cls: 'dc-embed-red', title: 'Message Alert — Deleted', desc: 'A watched message was deleted', sub: 'By Jake in #general' },
        ],
      },
    ],
  },
};

function DiscordEmbed({ embed }: { embed: EmbedType }) {
  return (
    <div className={`dc-embed ${embed.cls}`} style={{ marginTop: 4 }}>
      <div className="flex items-center gap-1.5 mb-1.5">
        <Zap size={11} style={{ color: '#ffd000', flexShrink: 0 }} />
        <span className="dc-embed-title">{embed.title}</span>
      </div>
      <div className="dc-embed-desc">{embed.desc}</div>
      {embed.sub && <div className="dc-embed-sub">{embed.sub}</div>}
      {embed.fields && (
        <div className="flex gap-4 mt-2">
          {embed.fields.map(f => (
            <div key={f.k}>
              <div style={{ fontSize: '.7rem', fontWeight: 700, color: '#b5bac1', marginBottom: 1 }}>{f.k}</div>
              <div style={{ fontSize: '.8rem', color: '#f2f3f5' }}>{f.v}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const AVATAR_COLORS: Record<string, string> = {
  S: 'linear-gradient(135deg,#ffd000,#ff9f00)',
  A: '#5865f2',
  J: '#23a55a',
  M: '#f0b232',
  C: '#f23f43',
};

function DiscordMessage({ msg }: { msg: MsgType }) {
  const bg = AVATAR_COLORS[msg.avatar] || '#5865f2';
  return (
    <div className="dc-msg" style={{ paddingTop: 10 }}>
      <div className="dc-avatar" style={{ background: bg, color: bg.startsWith('linear') ? '#000' : '#fff' }}>
        {msg.avatar}
      </div>
      <div style={{ flex: 1 }}>
        <div className="dc-msg-header">
          <span className="dc-msg-user">{msg.name}</span>
          {msg.isBot && <span className="dc-bot-tag">APP</span>}
          <span className="dc-msg-time">Today at 3:42 PM</span>
        </div>
        {msg.text && (
          <p style={{ fontSize: '.9375rem', color: '#dbdee1', lineHeight: 1.4 }}>{msg.text}</p>
        )}
        {msg.embeds?.map((e, i) => <DiscordEmbed key={i} embed={e} />)}
      </div>
    </div>
  );
}

export default function FeaturesShowcase() {
  const [active, setActive] = useState('voice');
  const tab = TAB_CONTENT[active];

  return (
    <section style={{ padding: '96px 24px', background: '#1e1f22' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label mb-4">Live Monitoring</div>
          <h2 className="heading-lg mb-4">
            Watch everything.{' '}
            <span className="gradient-yellow">Miss nothing.</span>
          </h2>
          <p style={{ color: '#b5bac1', maxWidth: 520, margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
            Stalk monitors every corner of Discord and delivers alerts exactly when conditions are met.
          </p>
        </div>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: active === id ? 'rgba(255,208,0,0.12)' : 'rgba(255,255,255,0.04)',
                border: active === id ? '1px solid rgba(255,208,0,0.35)' : '1px solid rgba(255,255,255,0.07)',
                color: active === id ? '#ffd000' : '#80848e',
              }}
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </div>

        {/* Discord window */}
        <div
          className="dc-window mx-auto"
          style={{ maxWidth: 780, height: 420, display: 'flex', flexDirection: 'column' }}
        >
          {/* Title bar */}
          <div className="dc-titlebar">
            <div className="dc-dot" style={{ background: '#ff5f56' }} />
            <div className="dc-dot" style={{ background: '#ffbd2e' }} />
            <div className="dc-dot" style={{ background: '#27c93f' }} />
            <span style={{ color: '#4e5058', fontSize: '.73rem', marginLeft: 10 }}>Discord — {tab.channel}</span>
          </div>

          {/* Body */}
          <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
            {/* Sidebar */}
            <div className="dc-sidebar hidden sm:flex" style={{ width: 210 }}>
              <div className="dc-server-name" style={{ fontSize: '.83rem' }}>My Server</div>
              <div className="dc-channels">
                <div className="dc-category">Stalk Alerts</div>
                {TABS.map(({ id, label, icon: Icon }) => (
                  <div
                    key={id}
                    className={`dc-channel ${active === id ? 'active' : ''}`}
                    onClick={() => setActive(id)}
                  >
                    <Hash size={14} style={{ flexShrink: 0 }} />
                    {id === 'voice' ? 'vc-logs' : id === 'presence' ? 'presence' : id === 'profile' ? 'profiles' : 'msg-logs'}
                  </div>
                ))}
              </div>
            </div>

            {/* Chat area */}
            <div className="dc-chat">
              <div className="dc-chat-header">
                <Hash size={15} style={{ color: '#80848e' }} />
                <span style={{ fontWeight: 700, fontSize: '.9rem' }}>{tab.channel}</span>
                <div
                  className="ml-auto flex items-center gap-1.5 px-2 py-0.5 rounded"
                  style={{ background: 'rgba(35,165,90,.1)', border: '1px solid rgba(35,165,90,.2)' }}
                >
                  <div className="status-dot status-online" style={{ width: 5, height: 5 }} />
                  <span style={{ fontSize: '.65rem', fontWeight: 700, color: '#23a55a' }}>MONITORING</span>
                </div>
              </div>

              <div key={active} className="dc-messages anim-fade-in">
                {tab.messages.map((msg, i) => (
                  <DiscordMessage key={i} msg={msg} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
