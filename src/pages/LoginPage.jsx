import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, guardarSesion } from '../services/authService';
import logo from '../assets/logo-ripley.png';
 
export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);
 
  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Completa todos los campos'); return; }
    setCargando(true);
    try {
      const data = await login(email, password);
      guardarSesion(data.token, data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Credenciales incorrectas');
    } finally {
      setCargando(false);
    }
  }
 
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
 
      {/* Navbar */}
      <nav style={{ background: 'white', padding: '0.75rem 2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={logo} alt="Banco Ripley" style={{ height: 36, cursor: 'pointer' }} onClick={() => navigate('/')} />
        <span style={{ fontSize: '0.82rem', color: '#888', cursor: 'pointer' }} onClick={() => navigate('/')}>
          ← Volver a bancoripley.com.pe
        </span>
      </nav>
 
      {/* Layout 2 columnas */}
      <div style={{ flex: 1, display: 'flex' }}>
 
        {/* Lado izquierdo — morado */}
        <div style={{
          width: '42%',
          background: 'linear-gradient(160deg, #4A0080 0%, #7B2D8B 50%, #C84BC4 100%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '3rem', color: 'white', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', width: 350, height: 350, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', bottom: -100, left: -100 }} />
          <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', top: -60, right: -60 }} />
          <img
            src={logo}
            alt="Banco Ripley"
            style={{ height: 40, width: 'auto', maxWidth: 160, objectFit: 'contain', mixBlendMode: 'screen', marginBottom: '2.5rem', zIndex: 1 }}
          />
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem', zIndex: 1 }}>
            Más de 20 años<br />simplificando tu vida
          </h2>
          <p style={{ opacity: 0.75, fontSize: '1rem', lineHeight: 1.7, zIndex: 1 }}>
            Gestiona tus ahorros, créditos y pagos desde cualquier lugar, en cualquier momento.
          </p>
        </div>
 
        {/* Lado derecho — formulario */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: '#f8f8fc' }}>
          <div style={{
            background: 'white', borderRadius: 16,
            padding: '2.5rem', width: '100%', maxWidth: 420,
            boxShadow: '0 4px 32px rgba(123,45,139,0.12)'
          }}>
            <h2 style={{ color: '#1a1a2e', textAlign: 'center', marginBottom: '0.4rem', fontWeight: 800, fontSize: '1.3rem' }}>
              Ingresa a tu banca
            </h2>
            <p style={{ textAlign: 'center', color: '#888', fontSize: '0.875rem', marginBottom: '1.75rem' }}>
              Bienvenido de vuelta
            </p>
 
            <form onSubmit={handleSubmit}>
              <label style={{ fontWeight: 700, fontSize: '0.82rem', color: '#333', display: 'block', marginBottom: '0.4rem' }}>
                Correo Electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@correo.com"
                style={{ display: 'block', width: '100%', padding: '0.75rem 0', margin: '0 0 1.25rem', border: 'none', borderBottom: '1.5px solid #ddd', fontSize: '1rem', outline: 'none', background: 'transparent', color: '#333' }}
              />
 
              <label style={{ fontWeight: 700, fontSize: '0.82rem', color: '#333', display: 'block', marginBottom: '0.4rem' }}>
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                style={{ display: 'block', width: '100%', padding: '0.75rem 0', margin: '0 0 1.5rem', border: 'none', borderBottom: '1.5px solid #ddd', fontSize: '1rem', outline: 'none', background: 'transparent', color: '#333' }}
              />
 
              {error && <p className="error-msg">{error}</p>}
 
              <button type="submit" disabled={cargando} style={{
                width: '100%', marginTop: '0.5rem', padding: '0.85rem',
                background: cargando ? '#aaa' : '#7B2D8B', color: 'white',
                border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '1rem',
                cursor: cargando ? 'not-allowed' : 'pointer', transition: 'background 0.2s'
              }}>
                {cargando ? 'Verificando...' : 'Ingresar'}
              </button>
            </form>
 
            <p style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.82rem', color: '#7B2D8B', fontWeight: 600, cursor: 'pointer' }}>
              ¿Necesitas crear o recuperar tu contraseña?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
