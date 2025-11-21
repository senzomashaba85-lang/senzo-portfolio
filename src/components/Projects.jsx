// ===== src/components/Projects.jsx =====
export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      desc: 'React + Tailwind recruiter-ready portfolio',
      tech: ['React', 'Tailwind', 'Vite'],
      github: 'https://github.com/senzomashaba85-lang/portfolio-app',
      live: 'https://senzo-portfolio.vercel.app'
    },
    {
      title: 'Network Scanner App',
      desc: 'Industrial diagnostic tool with Python + React',
      tech: ['React', 'Python', 'API'],
      github: 'https://github.com/senzomashaba85-lang/network-scanner',
      live: 'https://network-scanner-demo.com'
    },
    
{
  title: 'AgileKart',
  desc: 'Full-stack ecommerce demo showcasing modern UI/UX and Agile workflows',
  tech: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js'],
  github: 'https://github.com/senzomashaba85-lang/agilekart',
  live: 'https://agile-kart.vercel.app'
}


  ];

  return (
    <section id="projects" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '100px 40px 40px',
      backgroundColor: '#0f172a',
      color: '#fff'
    }}>
      <div style={{maxWidth: '1200px', margin: '0 auto', width: '100%'}}>
        <h2 style={{fontSize: '40px', marginBottom: '40px', fontWeight: 'bold'}}>Projects</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px'
        }}>
          {projects.map((proj, i) => (
            <div key={i} style={{
              backgroundColor: '#1e293b',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{
                height: '150px',
                background: 'linear-gradient(to right, #3b82f6, #a78bfa)'
              }}></div>
              <div style={{padding: '20px'}}>
                <h3 style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '10px'}}>{proj.title}</h3>
                <p style={{color: '#cbd5e1', marginBottom: '15px', fontSize: '14px'}}>{proj.desc}</p>
                <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px'}}>
                  {proj.tech.map((t) => (
                    <span key={t} style={{
                      backgroundColor: '#0f172a',
                      padding: '5px 10px',
                      borderRadius: '20px',
                      fontSize: '12px'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{display: 'flex', gap: '15px'}}>
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{
                    color: '#60a5fa',
                    textDecoration: 'none',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>
                    Code
                  </a>
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" style={{
                    color: '#60a5fa',
                    textDecoration: 'none',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}