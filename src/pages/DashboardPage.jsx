import { useNavigate } from 'react-router-dom';
import { obtenerSesion, cerrarSesion } from '../services/authService';
import logo from '../assets/logo-ripley.png';

export default function DashboardPage() {
  const navigate = useNavigate();
  const sesion = obtenerSesion();

  function handleLogout() {
    cerrarSesion();
    navigate('/');
  }

  const movimientos = [
    { desc: 'Depósito en efectivo',    monto: '+S/ 1,500.00', tipo: 'credit', fecha: '14 May' },
    { desc: 'Pago Ripley Card',         monto: '-S/ 320.50',   tipo: 'debit',  fecha: '13 May' },
    { desc: 'Transferencia enviada',    monto: '-S/ 200.00',   tipo: 'debit',  fecha: '12 May' },
    { desc: 'Pago de haberes',          monto: '+S/ 3,200.00', tipo: 'credit', fecha: '10 May' },
    { desc: 'Compra supermercado',      monto: '-S/ 154.80',   tipo: 'debit',  fecha: '09 May' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f5f6fa' }}>

      {/* Navbar */}
      <nav style={{
        background: '#3D1A6E', padding: '1rem 2rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white'
      }}>
        <img src={logo} alt="Banco Ripley" style={{ height: 32 }} />
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.875rem', opacity: 0.75 }}>{sesion?.usuario?.email}</span>
          <button onClick={handleLogout} style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.4)',
            color: 'white', padding: '0.4rem 1rem', borderRadius: 6, cursor: 'pointer',
            fontWeight: 600, fontSize: '0.85rem'
          }}>
            Cerrar sesión
          </button>
        </div>
      </nav>

      {/* Contenido */}
      <div style={{ padding: '2rem', maxWidth: 960, margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#2d3436', fontWeight: 800 }}>
          Hola, Carlos 👋
        </h2>

        {/* Hero saldo */}
        <div style={{
          background: 'linear-gradient(135deg, #3D1A6E, #5C2D91)',
          borderRadius: 14, padding: '2rem', color: 'white', marginBottom: '1.5rem',
          position: 'relative', overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', width: 200, height: 200, borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)', top: -60, right: -40
          }} />
          <p style={{ fontSize: '0.75rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>
            Saldo disponible
          </p>
          <p style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 4 }}>S/ 8,430.20</p>
          <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Cuenta de Ahorros — N° 4521-8834-0012</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Ingreso mensual', valor: 'S/ 4,700.00' },
              { label: 'Gasto mensual',   valor: 'S/ 2,105.30' },
              { label: 'Puntos GO',        valor: '12,450 pts' },
            ].map((p) => (
              <div key={p.label} style={{
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 8, padding: '0.5rem 0.9rem', fontSize: '0.78rem'
              }}>
                <span style={{ display: 'block', fontSize: '0.62rem', opacity: 0.5, textTransform: 'uppercase', marginBottom: 2 }}>{p.label}</span>
                {p.valor}
              </div>
            ))}
          </div>
        </div>

        {/* Tarjetas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {[
            { titulo: 'Cuenta Ahorros',   valor: 'S/ 8,430.20', color: '#5C2D91' },
            { titulo: 'Crédito activo',   valor: 'S/ 5,200.00', color: '#0066cc' },
            { titulo: 'Próxima cuota',    valor: '20/05/2026',  color: '#e17055' },
            { titulo: 'Puntos Ripley GO', valor: '12,450 pts',  color: '#B07400' },
          ].map((t) => (
            <div key={t.titulo} style={{
              background: 'white', borderRadius: 10,
              padding: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
              borderLeft: `4px solid ${t.color}`
            }}>
              <p style={{ fontSize: '0.78rem', color: '#636e72', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t.titulo}</p>
              <p style={{ fontSize: '1.35rem', fontWeight: 800, color: t.color }}>{t.valor}</p>
            </div>
          ))}
        </div>

        {/* Últimos movimientos */}
        <div style={{ background: 'white', borderRadius: 12, padding: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
          <h3 style={{ marginBottom: '1rem', color: '#2d3436', fontWeight: 700 }}>Últimos movimientos</h3>
          {movimientos.map((m, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0.75rem 0', borderBottom: i < movimientos.length - 1 ? '1px solid #f0f0f0' : 'none'
            }}>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>{m.desc}</p>
                <p style={{ fontSize: '0.75rem', color: '#999', marginTop: 2 }}>{m.fecha}</p>
              </div>
              <span style={{ fontWeight: 800, color: m.tipo === 'credit' ? '#1A7A3C' : '#DC2626', fontSize: '0.9rem' }}>
                {m.monto}
              </span>
            </div>
          ))}
        </div>

        {/* Placeholder módulos */}
        <div style={{ marginTop: '1.5rem', background: '#EDE7F6', borderRadius: 12, padding: '1.5rem', textAlign: 'center', color: '#5C2D91', fontWeight: 600 }}>
          Aquí se conectarán los módulos de Ahorros, Créditos y Transferencias del backend.
        </div>
      </div>
    </div>
  );
}
