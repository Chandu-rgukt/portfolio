import './index.css'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const Profile = () => {
  const profileRef = useScrollAnimation()
  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Chandra_Sekhar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleConnectClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({behavior: 'smooth'})
    }
  }

  const handleKeyPress = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      action()
    }
  }

  return (
    <div className="profile slide-in-left" ref={profileRef}>
      <img
        src="https://i.ibb.co/pBg1RD36/8c76c8cb-f2ff-429b-a420-841078d0164a.png"
        alt="Profile"
      />
      <h1>
        <span>I am Chandu</span>, full stack developer based in INDIA
      </h1>
      <p>
        Exicted for new oppertunities, fellow in next-wave CCBP4.0 technologies
      </p>
      <div className="profile-action">
        <button
          type="button"
          className="profile-connect"
          onClick={handleConnectClick}
          onKeyDown={event => handleKeyPress(event, handleConnectClick)}
          aria-label="Connect with me"
        >
          Connect with me
        </button>
        <button
          type="button"
          className="my-resume"
          onClick={handleResumeDownload}
          onKeyDown={event => handleKeyPress(event, handleResumeDownload)}
          aria-label="Download my resume"
        >
          My resume
        </button>
      </div>
    </div>
  )
}

export default Profile
