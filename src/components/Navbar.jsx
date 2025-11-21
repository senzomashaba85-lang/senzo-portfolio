// ===== src/components/Navbar.jsx =====
export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: '#1e293b',
      padding: '20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Senzo.Dev
        </div>
        <ul style={{
          display: 'flex',
          gap: '30px',
          listStyle: 'none'
        }}>
          <li><a href="#home" style={{color: '#cbd5e1', textDecoration: 'none', cursor: 'pointer'}}>Home</a></li>
          <li><a href="#about" style={{color: '#cbd5e1', textDecoration: 'none', cursor: 'pointer'}}>About</a></li>
          <li><a href="#projects" style={{color: '#cbd5e1', textDecoration: 'none', cursor: 'pointer'}}>Projects</a></li>
          <li><a href="#contact" style={{color: '#cbd5e1', textDecoration: 'none', cursor: 'pointer'}}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}