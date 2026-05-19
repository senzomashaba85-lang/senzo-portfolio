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

        {/* Paragraph 1 */}
        <p style={{
          fontSize: '17px',
          color: '#d1d5db',
          maxWidth: '900px',
          marginBottom: '20px',
          lineHeight: '1.8',
          letterSpacing: '0.5px'
        }}>
          With over a decade of hands-on experience across multiple 
          industries including food processing, mining, oil & gas, 
          and manufacturing, I specialise in control systems, 
          instrumentation, and industrial automation.
        </p>

        {/* Expertise List */}
        <p style={{
          fontSize: '17px',
          color: '#60a5fa',
          maxWidth: '900px',
          marginBottom: '10px',
          fontWeight: 'bold'
        }}>
          My expertise spans:
        </p>

        <ul style={{
          fontSize: '17px',
          color: '#d1d5db',
          maxWidth: '900px',
          marginBottom: '30px',
          lineHeight: '2',
          paddingLeft: '20px'
        }}>
          <li>PLC programming (Siemens TIA Portal, Delta ISPSoft, Allen Bradley)</li>
          <li>SCADA/HMI design and integration</li>
          <li>Industrial networking and remote monitoring</li>
          <li>Real-time data logging and SQL Server reporting systems</li>
          <li>VPN remote access (eWON Flexy 205)</li>
          <li>OPC-UA and OPC-DA integration</li>
          <li>Fault finding and commissioning</li>
          <li>4-20mA, Profibus, Profinet, BACnet, Modbus TCP/RTU</li>
        </ul>

        {/* Paragraph 2 */}
        <p style={{
          fontSize: '17px',
          color: '#d1d5db',
          maxWidth: '900px',
          marginBottom: '20px',
          lineHeight: '1.8',
          letterSpacing: '0.5px'
        }}>
          I combine deep field experience with modern software development — 
          building Python-based monitoring tools, SQL Server databases, and 
          React dashboards that give engineers and managers real-time 
          visibility into their operations.
        </p>

        {/* Paragraph 3 */}
        <p style={{
          fontSize: '17px',
          color: '#d1d5db',
          maxWidth: '900px',
          marginBottom: '60px',
          lineHeight: '1.8',
          letterSpacing: '0.5px'
        }}>
          My DeepSea Modbus Controller Monitor features a Tkinter-based GUI 
          for live RS232/RS485 and Ethernet polling with export to CSV, Excel, 
          XML and PDF. My network scanner provides instant device discovery 
          across industrial Ethernet networks. I also build SQL Server databases 
          that log PLC and SCADA data in real time — enabling engineers and 
          managers to query production history, track alarms, and generate 
          automated reports. These tools are built from real field problems 
          I encountered and solved.
        </p>

        {/* Skills Section */}
        <h3 style={{
          fontSize: '24px', 
          marginBottom: '30px', 
          fontWeight: 'bold',
          color: '#60a5fa'
        }}>
          Skills
        </h3>

        {/* Industrial Skills */}
        <h4 style={{
          fontSize: '18px',
          color: '#a78bfa',
          marginBottom: '15px'
        }}>
          Industrial Skills
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '15px',
          maxWidth: '900px',
          marginBottom: '30px'
        }}>
          {[
            'PLC Programming',
            'SCADA/HMI/DCS',
            'Siemens TIA Portal',
            'Delta ISPSoft',
            'Modbus TCP/RTU',
            'Profinet',
            'Profibus',
            'BACnet',
            'OPC-UA/OPC-DA',
            '4-20mA',
            'RS232/RS485',
            'IO-Link',
            'eWON Flexy VPN',
            'Fault Finding',
            'Commissioning',
            'AutoCAD'
          ].map((skill) => (
            <div key={skill} style={{
              backgroundColor: '#0f172a',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              fontSize: '14px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#3b82f6'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0f172a'}>
              {skill}
            </div>
          ))}
        </div>

        {/* Software Skills */}
        <h4 style={{
          fontSize: '18px',
          color: '#a78bfa',
          marginBottom: '15px'
        }}>
          Software Skills
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '15px',
          maxWidth: '900px',
          marginBottom: '30px'
        }}>
          {[
            'Python',
            'React',
            'JavaScript',
            'HTML & CSS',
            'Tailwind CSS',
            'SQL Server',
            'PostgreSQL',
            'Django/FastAPI/Flask',
            'Pandas/NumPy',
            'Prometheus/Grafana',
            'Streamlit',
            'Docker',
            'Git/GitHub',
            'REST APIs',
            'PyTest',
            'AutoCAD'
          ].map((skill) => (
            <div key={skill} style={{
              backgroundColor: '#0f172a',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              fontSize: '14px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#3b82f6'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0f172a'}>
              {skill}
            </div>
          ))}
        </div>

        {/* Industries */}
        <h4 style={{
          fontSize: '18px',
          color: '#a78bfa',
          marginBottom: '15px'
        }}>
          Industries
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '15px',
          maxWidth: '900px'
        }}>
          {[
            '🏭 Food Processing & Feed Mills',
            '⛏️ Mining & Minerals',
            '🛢️ Oil & Gas',
            '💧 Water & Wastewater',
            '🏗️ Manufacturing',
            '🏢 Building Automation'
          ].map((industry) => (
            <div key={industry} style={{
              backgroundColor: '#0f172a',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center',
              fontSize: '14px',
              color: '#60a5fa'
            }}>
              {industry}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}