import './index.css'

const projects = [
  {
    id: 1,
    title: 'Jobby App',
    link: 'https://chandujobby03.ccbp.tech',
    description:
      'A job search platform with login, job listings, and filtering features.',
    image: 'https://i.ibb.co/fYvj4gMr/Screenshot-2025-05-23-092506.png',
  },
  {
    id: 2,
    title: 'Nxt Trends',
    link: 'https://chandrnxttrendz.ccbp.tech',
    description:
      'An e-commerce website with product listing, cart, and authentication.',
    image: 'https://i.ibb.co/Tq432B0z/Screenshot-2025-05-23-092528.png',
  },
  {
    id: 3,
    title: 'Emoji Game',
    link: 'https://chandrajnv.ccbp.tech',
    description:
      'A fun memory game where users click unique emojis to earn points.',
    image: 'https://i.ibb.co/3YPJZB4B/Screenshot-2025-05-23-092613.png',
  },
  {
    id: 4,
    title: 'AI Tools',
    link: 'https://chandugenai12.ccbp.tech',
    description: 'A collection of AI-powered utilities and productivity tools.',
    image: 'https://i.ibb.co/twMxFHSV/Screenshot-2025-05-23-093900.png',
  },
  {
    id: 5,
    title: 'Weather App',
    link: 'https://weatherappcs90.ccbp.tech',
    description:
      'Shows real-time weather information for any city using an API.',
    image: 'https://i.ibb.co/S7RjMf8p/Screenshot-2025-05-23-093825.png',
  },
  {
    id: 6,
    title: 'KoinX',
    link: 'https://koinx.ccbp.tech',
    description:
      'A tax loss harvesting tool built for tracking crypto capital gains.',
    image: 'https://i.ibb.co/rf7qYMyb/image.png',
  },
  {
    id: 7,
    title: 'Typing Test',
    link: 'https://typingtest29.ccbp.tech',
    description:
      'A typing speed test that calculates words per minute and accuracy.',
    image: 'https://i.ibb.co/mrJ7Q7yJ/Screenshot-2025-05-23-092311.png',
  },
  {
    id: 8,
    title: 'Todo App',
    link: 'https://todoappcs90.ccbp.tech',
    description:
      'A simple todo list with create, delete, and mark-as-done features.',
    image: 'https://i.ibb.co/NdHbTKkQ/Screenshot-2025-05-23-092659.png',
  },
  {
    id: 9,
    title: 'Wiki Search',
    link: 'https://wikisearchcs99.ccbp.tech',
    description: 'Searches Wikipedia articles and displays summarized results.',
    image: 'https://i.ibb.co/20CK0bZ6/Screenshot-2025-05-23-092728.png',
  },
]

const Projects = () => (
  <div className="mywork">
    <div className="projects-title">
      <h1>My Works</h1>
    </div>
    <div className="projects-list">
      {projects.map(project => (
        <div key={project.id} className="project-item">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt="" />
          </a>
        </div>
      ))}
    </div>
  </div>
)

export default Projects
