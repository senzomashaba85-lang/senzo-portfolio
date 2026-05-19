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
      <h2 style={{
        fontSize: '40px', 
        marginBottom: '20px', 
        fontWeight: 'bold'
      }}>
        Let's Connect
      </h2>

      <p style={{
        fontSize: '18px', 
        color: '#94a3b8', 
        maxWidth: '600px', 
        margin: '0 auto 40px'
      }}>
        I'm open to opportunities and collaborations in 
        industrial automation, control systems, and 
        Python development. Let's build something 
        amazing together!
      </p>

      <div style={{
        display: 'flex', 
        gap: '20px', 
        flexWrap: 'wrap', 
        justifyContent: 'center'
      }}>

        {/* Email */}
        <a 
          href="mailto:ngobeninkateko1794@gmail.com" 
          style={{
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
          📧 Email
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/senzo-mashaba-141390402/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            padding: '12px 30px',
            backgroundColor: '#0077b5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#005885'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0077b5'}>
          💼 LinkedIn
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/senzomashaba85-lang" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            padding: '12px 30px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#333'}>
          💻 GitHub
        </a>

      </div>

      {/* Footer */}
      <p style={{
        marginTop: '60px',
        color: '#475569',
        fontSize: '14px'
      }}>
        © 2025 Senzo Mashaba — Control & Instrumentation Engineer
      </p>

    </section>
  );
}