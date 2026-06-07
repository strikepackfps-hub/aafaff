import { useState, useEffect } from 'react';
import { Eye, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(30,31,34,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg,#ffd000,#ff9f00)' }}
          >
            <Eye size={15} color="#000" strokeWidth={2.5} />
          </div>
          <span style={{ fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-.02em' }}>
            <span style={{ color: '#ffd000' }}>s</span>
            <span style={{ color: '#f2f3f5' }}>talk</span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {['Commands', 'Features', 'Support'].map(l => (
            <a
              key={l}
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
              style={{ color: '#80848e' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f2f3f5')}
              onMouseLeave={e => (e.currentTarget.style.color = '#80848e')}
            >{l}</a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a href="#" className="btn-ghost px-4 py-1.5 rounded-lg text-sm">Support Server</a>
          <a href="#" className="btn-yellow px-4 py-1.5 rounded-lg text-sm flex items-center gap-1.5">
            Add to Discord <ArrowRight size={13} />
          </a>
        </div>

        <button className="md:hidden" style={{ color: '#b5bac1' }} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden flex flex-col gap-3 px-6 pb-6"
          style={{ background: 'rgba(30,31,34,.97)', backdropFilter: 'blur(20px)' }}
        >
          {['Commands', 'Features', 'Support'].map(l => (
            <a key={l} href="#" className="text-sm font-medium" style={{ color: '#80848e' }}>{l}</a>
          ))}
          <a href="#" className="btn-yellow px-4 py-2.5 rounded-lg text-sm text-center">Add to Discord</a>
        </div>
      )}
    </nav>
  );
}
