// ===== src/components/About.jsx =====
export default function About() {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '100px 40px 40px',
      backgroundColor: '#1e293b',
      color: '#fff'
    }}>
      <div style={{maxWidth: '1200px', margin: '0 auto', width: '100%'}}>
        <h2 style={{fontSize: '40px', marginBottom: '40px', fontWeight: 'bold'}}>About Me</h2>
        

     {/* Main Description - Keep exact words, better spacing */}
      <p style={{
        fontSize: '17px',
        color: '#d1d5db',
        maxWidth: '900px',
        margin: '0 auto 40px',
        lineHeight: '1.8',
        letterSpacing: '0.5px'
      }}>
        With over a decade of hands-on experience in instrumentation, control systems, and industrial networking, I build scalable applications that bridge hardware reliability with modern software technologies. My work spans PLC programming, SCADA/HMI integration, and real-time monitoring across RS232/RS485 and Ethernet-based systems.
      </p>

      <p style={{
        fontSize: '17px',
        color: '#d1d5db',
        maxWidth: '900px',
        margin: '0 auto 40px',
        lineHeight: '1.8',
        letterSpacing: '0.5px'
      }}>
        I've worked extensively with 4–20 mA analog loops, digital I/O, and industrial protocols including Modbus TCP/RTU, Profibus, Profinet, and BACnet — integrating sensors, transmitters, and controllers into robust automation platforms. My DeepSea Modbus Controller Monitor features a Tkinter-based GUI for live RS232/RS485 and Ethernet polling, with export pipelines to CSV, Excel, XML, and PDF. My AgileScanner platform integrates Prometheus and Grafana to visualize metrics from 10+ industrial controllers, demonstrating cloud-ready observability.
      </p>

      <p style={{
        fontSize: '17px',
        color: '#d1d5db',
        maxWidth: '900px',
        margin: '0 auto 40px',
        lineHeight: '1.8',
        letterSpacing: '0.5px'
      }}>
        I'm proficient in Django, FastAPI, Streamlit, and Flask for backend development, and React + Tailwind for frontend UI design. I've built production-grade tools that combine Modbus communication, real-time dashboards, and automated reporting — all grounded in field-tested engineering principles.
      </p>
        
        <h3 style={{fontSize: '24px', marginBottom: '20px', fontWeight: 'bold'}}>Skills</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '15px',
          maxWidth: '900px'
        }}>
          {['Python','React', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Git/GitHub', 'REST APIs', 'PLC Programming', 'Django/Flask/FastAPI', 'PostgreSQL/SQLite', 'Docker', 'Prometheus & Grafana', 'Streamlit', 'Selenium/Playwright', 'PyTest/Robot Framework', 'Data Literacy', 'Data Literacy', 'Panda/NumPy', 'Industrial Network', 'Scada/HMI/DCS', 'Modbus', 'Profinet', 'Profibus', 'BacNet', 'OPC', '4-20mA', 'RS232 / RS485 / Ethernet', 'AutoCad'].map((skill) => (
            <div key={skill} style={{
              backgroundColor: '#0f172a',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#3b82f6'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0f172a'}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
