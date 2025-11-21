// ===== src/components/Contact.jsx =====
export default function Contact() {
  return (
    <section id="contact" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '100px 40px 40px',
      backgroundColor: '#1e293b',
      color: '#fff'
    }}>
      <h2 style={{fontSize: '40px', marginBottom: '20px', fontWeight: 'bold'}}>Let's Connect</h2>
      <p style={{fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 40px'}}>
        I'm open to opportunities and collaborations. Let's build something amazing together!
      </p>
      <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center'}}>
        <a href="mailto:senzomashaba85@gmail.com" style={{
          padding: '12px 30px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}>
          Email
        </a>
        <a href="www.linkedin.com/in/senzo-mashaba-572821391" target="_blank" rel="noopener noreferrer" style={{
          padding: '12px 30px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}>
        LinkedIn
        </a>
        <a href="https://github.com/senzomashaba85-lang" target="_blank" rel="noopener noreferrer" style={{
          padding: '12px 30px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}>
          GitHub
        </a>
      </div>
    </section>
  );
}

// ===== Also add this to src/index.css =====
// body {
//   margin: 0;
//   padding: 0;
//   font-family: Arial, sans-serif;
// }