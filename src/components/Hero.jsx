// HERO SECTION - src/components/Hero.jsx
// Keep all words exactly as is, just better formatting

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '100px 40px 40px',
      backgroundColor: '#0f172a',
      color: '#fff'
    }}>
      {/* Main Heading */}
      <h1 style={{
        fontSize: '60px',
        marginBottom: '20px',
        fontWeight: 'bold',
        lineHeight: '1.2'
      }}>
        Hi, I'm <span style={{
          background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Senzo Mashaba</span>
      </h1>

      {/* Tagline */}
      <p style={{
        fontSize: '20px',
        color: '#cbd5e1',
        marginBottom: '40px',
        fontWeight: '500',
        maxWidth: '800px',
        lineHeight: '1.6'
      }}>
        Industrial Systems Junior Engineer | Python & JavaScript Developer | Full-Stack Monitoring Specialist
      </p>

      {/* Main Description - Keep exact words, better spacing */}
      <p style={{
        fontSize: '17px',
        color: '#d1d5db',
        maxWidth: '900px',
        margin: '0 auto 40px',
        lineHeight: '1.8',
        letterSpacing: '0.5px'
      }}>
        I build recruiter-ready apps using Python, React, and Tailwind — backed by 10+ years in instrumentation, PLC programming, and real-time monitoring across RS232/RS485 and Ethernet. My projects bridge hardware reliability with modern software design.
      </p>

      {/* Call-to-Action Button */}
      <button style={{
        padding: '12px 30px',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        fontWeight: 'bold'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
      onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}>
        View My Work
      </button>
    </section>
  );
}