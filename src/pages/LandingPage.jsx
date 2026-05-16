import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-ripley.png';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Open Sans', 'Segoe UI', sans-serif", background: 'white' }}>

      {/* ── Top bar oscuro ── */}
      <div style={{
        background: '#1a1a2e', padding: '0.35rem 2rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: '0.76rem', color: '#ccc',
      }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Ripley.com', 'RipleyPuntos Go', 'Seguros Ripley'].map(item => (
            <a key={item} style={{ color: '#ccc', textDecoration: 'none', cursor: 'pointer' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = '#ccc'}
            >{item}</a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>País:</span>
          <span>🇵🇪 Peru</span>
        </div>
      </div>

      {/* ── Navbar principal — blanco ── */}
      <nav style={{
        background: 'white',
        padding: '0.75rem 2rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        position: 'sticky', top: 0, zIndex: 200,
      }}>
        {/* Logo original — sin filtros */}
        <img src={logo} alt="Banco Ripley" style={{ height: 38, cursor: 'pointer' }} onClick={() => navigate('/')} />

        {/* Menú central */}
        <div style={{ display: 'flex', gap: '1.6rem', alignItems: 'center', fontSize: '0.82rem', fontWeight: 700, color: '#333' }}>
          {['TARJETAS RIPLEY', 'PRÉSTAMOS', 'AHORROS', 'SEGUROS', 'PROMOCIONES', 'RIPLEY PUNTOS GO', 'TOKEN DIGITAL'].map(item => (
            <span key={item} style={{ cursor: 'pointer', whiteSpace: 'nowrap', letterSpacing: '0.2px' }}
              onMouseEnter={e => e.target.style.color = '#5C1A8A'}
              onMouseLeave={e => e.target.style.color = '#333'}
            >{item}</span>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button style={{
            background: '#F5A623', color: 'white', border: 'none',
            padding: '0.65rem 1.25rem', borderRadius: 6, fontWeight: 800,
            fontSize: '0.82rem', cursor: 'pointer', letterSpacing: '0.3px',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#d9911a'}
            onMouseLeave={e => e.currentTarget.style.background = '#F5A623'}
          >¡OBTÉN TU TARJETA!</button>

          <button style={{
            background: '#5C1A8A', color: 'white', border: 'none',
            padding: '0.65rem 1.25rem', borderRadius: 6, fontWeight: 800,
            fontSize: '0.82rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 6,
            transition: 'background 0.2s',
          }}
            onClick={() => navigate('/login')}
            onMouseEnter={e => e.currentTarget.style.background = '#3d1169'}
            onMouseLeave={e => e.currentTarget.style.background = '#5C1A8A'}
          >
             BANCA POR INTERNET
          </button>
        </div>
      </nav>

      {/* ── Banner aviso ── */}
      <div style={{
        background: '#f5f5f5', borderBottom: '1px solid #eee',
        padding: '0.75rem 2rem', textAlign: 'center',
        fontSize: '0.88rem', color: '#333',
      }}>
        Olv&iacute;date de los imprevistos y s&uacute;mate a tener{' '}
        <strong style={{ color: '#5C1A8A' }}>desde S/50 hasta S/20,000</strong> en efectivo{' '}
        <button style={{
          background: '#e02020', color: 'white', border: 'none',
          padding: '0.3rem 1rem', borderRadius: 4, fontWeight: 700,
          fontSize: '0.82rem', cursor: 'pointer', marginLeft: 8,
        }}>Aquí</button>
      </div>

      {/* ── Hero banner morado-magenta ── */}
      <section style={{
        background: 'linear-gradient(120deg, #4A0080 0%, #7B2D8B 35%, #C84BC4 70%, #E566D0 100%)',
        color: 'white',
        padding: '3.5rem 4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 360,
        position: 'relative',
        overflow: 'hidden',
        gap: '2rem',
      }}>
        {/* Flecha izquierda */}
        <button style={{
          position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
          color: 'white', width: 38, height: 38, borderRadius: '50%',
          fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>‹</button>

        {/* Texto izquierdo */}
        <div style={{ zIndex: 1, maxWidth: 320 }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.2 }}>
            Pide tu Tarjeta<br />en 3 min
          </h1>
          <p style={{ opacity: 0.88, fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            Y súmate a un mundo de descuentos increíbles en todas las tiendas Ripley
          </p>
          <button style={{
            background: '#e02020', color: 'white', border: 'none',
            padding: '0.85rem 2rem', borderRadius: 6, fontWeight: 800,
            fontSize: '1rem', cursor: 'pointer', transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#b91c1c'}
            onMouseLeave={e => e.currentTarget.style.background = '#e02020'}
          >Hazte cliente</button>
        </div>

        {/* Centro — tarjeta simulada */}
        <div style={{ zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: 200, height: 126,
            background: 'linear-gradient(135deg, #555 0%, #222 100%)',
            borderRadius: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 12, left: 14,
              fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', fontWeight: 700, letterSpacing: '1px',
            }}>banco ripley</div>
            <div style={{
              fontSize: '4rem', fontWeight: 900, color: 'rgba(255,255,255,0.15)',
              fontFamily: 'serif', userSelect: 'none',
            }}>R</div>
            {/* Mastercard circles */}
            <div style={{ position: 'absolute', bottom: 12, right: 14, display: 'flex' }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#EB001B', opacity: 0.9 }} />
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#F79E1B', opacity: 0.9, marginLeft: -8 }} />
            </div>
          </div>
        </div>

        {/* Derecha — beneficios */}
        <div style={{
          zIndex: 1,
          border: '1.5px solid rgba(255,255,255,0.35)',
          borderRadius: 14, padding: '1.75rem 2rem',
          maxWidth: 340,
          backdropFilter: 'blur(4px)',
          background: 'rgba(255,255,255,0.06)',
        }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '1rem' }}>
            Disfruta tu nueva tarjeta:
          </h2>
          {[
            'Sin membresía*',
            'Acumulando Puntos GO',
            'Con oportunidades exclusivas en tiendas Ripley',
          ].map(b => (
            <p key={b} style={{ marginBottom: '0.6rem', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <span style={{ color: '#7DF0A0', fontWeight: 800, marginTop: 1 }}>✓</span>
              {b}
            </p>
          ))}
          <p style={{ fontSize: '0.68rem', opacity: 0.5, marginTop: '1rem' }}>Sujeto a evaluación crediticia. Ver TYC</p>
        </div>

        {/* Flecha derecha */}
        <button style={{
          position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
          color: 'white', width: 38, height: 38, borderRadius: '50%',
          fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>›</button>
      </section>

      {/* ── Trust bar: logo + claim ── */}
      <section style={{
        background: '#f0edf7', padding: '1.25rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
      }}>
        <img src={logo} alt="Banco Ripley" style={{ height: 32 }} />
        <div style={{ width: 1, height: 32, background: '#c9b3d9' }} />
        <p style={{ fontSize: '0.95rem', color: '#333' }}>
          <strong>Más de 20 años</strong> Simplificando tu vida
        </p>
      </section>

      {/* ── ¿Qué necesitas hoy? ── */}
      <section style={{ background: 'white', padding: '3rem 2rem', textAlign: 'center' }}>
        {/* Título con líneas decorativas */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: '#5C1A8A' }} />
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#1a1a2e', whiteSpace: 'nowrap' }}>
            ¿Qué necesitas hoy?
          </h2>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: '#5C1A8A' }} />
        </div>

        {/* Cards con borde morado */}
        <div style={{
          border: '1.5px solid #5C1A8A',
          borderRadius: 16,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          maxWidth: 860, margin: '0 auto',
          overflow: 'hidden',
        }}>
          {[
            {
              titulo: 'Tarjeta Ripley',
              desc: 'Acumula Puntos GO y canjéalos por lo que quieras',
              svg: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="12" width="36" height="24" rx="4" stroke="#5C1A8A" strokeWidth="2.2" fill="none"/>
                  <rect x="6" y="18" width="36" height="5" fill="#5C1A8A" opacity="0.15"/>
                  <rect x="10" y="26" width="10" height="4" rx="1" stroke="#5C1A8A" strokeWidth="1.8" fill="none"/>
                  <text x="30" y="30" fontSize="9" fontWeight="bold" fill="#5C1A8A" fontFamily="serif">R</text>
                </svg>
              )
            },
            {
              titulo: 'Préstamos',
              desc: 'Efectivo para tus proyectos, directo en tu cuenta',
              svg: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 34V20a2 2 0 012-2h6l4-6 4 6h6a2 2 0 012 2v14" stroke="#5C1A8A" strokeWidth="2.2" strokeLinejoin="round" fill="none"/>
                  <path d="M8 34h32" stroke="#5C1A8A" strokeWidth="2.2" strokeLinecap="round"/>
                  <path d="M20 34v-8h8v8" stroke="#5C1A8A" strokeWidth="2.2" strokeLinejoin="round" fill="none"/>
                </svg>
              )
            },
            {
              titulo: 'Cuenta Ahorro Plus',
              desc: 'Tu dinero crece con nuestra Súper Tasa',
              svg: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="26" cy="26" rx="14" ry="12" stroke="#5C1A8A" strokeWidth="2.2" fill="none"/>
                  <path d="M26 14V12M26 38v2M12 26h-2M40 26h2" stroke="#5C1A8A" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 22c0-2.2 1.8-3 4-3s4 1.3 4 3-2 2.5-4 3-4 1-4 3 1.5 3.2 4 3.2 4-1 4-3" stroke="#5C1A8A" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <circle cx="36" cy="14" r="5" fill="#f0edf7" stroke="#5C1A8A" strokeWidth="1.8"/>
                  <text x="33.5" y="17" fontSize="7" fill="#5C1A8A" fontWeight="bold">%</text>
                </svg>
              )
            },
          ].map((p, i) => (
            <div key={p.titulo} style={{
              padding: '2.25rem 1.75rem',
              textAlign: 'center',
              borderRight: i < 2 ? '1px solid #e0d6ef' : 'none',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#faf8ff'}
              onMouseLeave={e => e.currentTarget.style.background = 'white'}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>{p.svg}</div>
              <h3 style={{ color: '#1a1a2e', fontWeight: 800, fontSize: '1rem', marginBottom: '0.5rem' }}>{p.titulo}</h3>
              <p style={{ color: '#636e72', fontSize: '0.875rem', lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sección contacto ── */}
      <section style={{ background: 'white', padding: '3rem 2rem' }}>
        <h2 style={{
          textAlign: 'center', color: '#3d1169',
          fontSize: '1.5rem', fontWeight: 800, marginBottom: '2.5rem',
        }}>
          ¿Necesitas ayuda? Cont&aacute;ctanos como prefieras
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem', maxWidth: 900, margin: '0 auto',
        }}>
          {[
            {
              icono: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="10" y="4" width="12" height="24" rx="3" stroke="#5C1A8A" strokeWidth="2" fill="none"/>
                  <circle cx="16" cy="24" r="1.2" fill="#5C1A8A"/>
                  <rect x="13" y="7" width="6" height="1.5" rx="0.75" fill="#5C1A8A" opacity="0.4"/>
                </svg>
              ),
              titulo: 'Ripleyfono',
              subtitulo: '(01) 611-5757',
              desc: 'Lunes a domingo de 8 a.m. a 10 p.m.',
              cta: 'Llamar',
            },
            {
              icono: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M27 5H5a2 2 0 00-2 2v14a2 2 0 002 2h7l4 4 4-4h7a2 2 0 002-2V7a2 2 0 00-2-2z" stroke="#5C1A8A" strokeWidth="2" fill="none"/>
                  <path d="M10 13c3-5 9-5 12 0" stroke="#5C1A8A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                  <circle cx="16" cy="16" r="1.5" fill="#5C1A8A"/>
                </svg>
              ),
              titulo: 'WhatsApp',
              subtitulo: '+51 16115757',
              desc: '24/7\nAsesor: Lunes a domingo 8 am a 10 pm',
              cta: 'Chatear',
            },
            {
              icono: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 3C11.03 3 7 7.03 7 12c0 7 9 17 9 17s9-10 9-17c0-4.97-4.03-9-9-9z" stroke="#5C1A8A" strokeWidth="2" fill="none"/>
                  <circle cx="16" cy="12" r="3" stroke="#5C1A8A" strokeWidth="2" fill="none"/>
                </svg>
              ),
              titulo: 'Agencias',
              subtitulo: 'de Banco o Tiendas Ripley',
              desc: '',
              cta: 'Revisar agencias',
            },
          ].map(c => (
            <div key={c.titulo} style={{
              background: '#f0edf7',
              borderRadius: 16, padding: '2rem',
              textAlign: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
            }}>
              <div style={{ marginBottom: '0.5rem' }}>{c.icono}</div>
              <p style={{ fontWeight: 800, fontSize: '1.05rem', color: '#1a1a2e' }}>{c.titulo}</p>
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a1a2e' }}>{c.subtitulo}</p>
              {c.desc && <p style={{ fontSize: '0.82rem', color: '#555', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{c.desc}</p>}
              <button style={{
                marginTop: '0.75rem',
                background: 'white',
                border: '1.5px solid #5C1A8A', color: '#5C1A8A',
                padding: '0.55rem 1.75rem', borderRadius: 6,
                fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#5C1A8A'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#5C1A8A'; }}
              >{c.cta}</button>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section style={{
        background: 'linear-gradient(90deg, #3d1169, #5C1A8A)',
        color: 'white', padding: '2.75rem 4rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem' }}>¿Ya eres cliente Ripley?</h2>
          <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>Ingresa a tu banca en línea y gestiona todo en un solo lugar.</p>
        </div>
        <button style={{
          background: '#F5A623', color: 'white', border: 'none',
          padding: '0.9rem 2.25rem', borderRadius: 6,
          fontWeight: 800, fontSize: '1rem', cursor: 'pointer',
          whiteSpace: 'nowrap', transition: 'background 0.2s',
        }}
          onClick={() => navigate('/login')}
          onMouseEnter={e => e.currentTarget.style.background = '#d9911a'}
          onMouseLeave={e => e.currentTarget.style.background = '#F5A623'}
        >Ingresar ahora</button>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#1a1a2e', color: '#b2bec3', padding: '2rem 2rem', textAlign: 'center', fontSize: '0.8rem' }}>
        <img src={logo} alt="Banco Ripley" style={{ height: 28, marginBottom: '0.875rem', opacity: 0.65, filter: 'brightness(0) invert(1)' }} />
        <p>Banco Ripley Perú S.A. &nbsp;|&nbsp; Supervisado por la SBS y AFP &nbsp;|&nbsp; 0800-11-872</p>
        <p style={{ marginTop: 8, opacity: 0.45 }}>© 2026 Banco Ripley. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
