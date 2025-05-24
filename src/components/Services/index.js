import './index.css'

const Services = () => (
  <div className="services">
    <div className="services-title">
      <h1>My services</h1>
    </div>
    <div className="services-container">
      <div className="services-format">
        <h1>Custom Web Application Development</h1>
        <p>
          Full stack development using React, Next.js, Node.js, Express, etc
        </p>
      </div>
      <div className="services-format">
        <h1>Frontend Development</h1>
        <p>Component libraries (Tailwind CSS, Material UI, Bootstrap)</p>
      </div>
      <div className="services-format">
        <h1>Backend Development</h1>
        <p>Database integration (MongoDB, PostgreSQL, MySQL)</p>
        <p>RESTful APIs & GraphQL services</p>
      </div>
      <div className="services-format">
        <h1>Web Application Security</h1>
        <p>Input validation and sanitization</p>
        <p>Secure authentication flows</p>
      </div>
    </div>
  </div>
)

export default Services
