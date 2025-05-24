import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
    }
  }

  openMenu = () => {
    this.setState({menuOpen: true})
  }

  closeMenu = () => {
    this.setState({menuOpen: false})
  }

  render() {
    const {menuOpen} = this.state

    return (
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-title">CHANDU</h1>

          {/* Open menu button */}
          {!menuOpen && (
            <button
              onClick={this.openMenu}
              className="menu-button"
              aria-label="Open menu"
              type="button"
            >
              <img
                src="https://i.ibb.co/jPsFydv1/image.png"
                alt="Open menu"
                className="menu-open"
              />
            </button>
          )}

          {/* Nav menu */}
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            {/* Close menu button */}
            <button
              onClick={this.closeMenu}
              className="menu-button"
              aria-label="Close menu"
              type="button"
            >
              <img
                src="https://i.ibb.co/B2y73N0f/image.png"
                alt="Close menu"
                className="menu-close"
              />
            </button>

            <li>
              <a href="#home" onClick={this.closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={this.closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={this.closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#projects" onClick={this.closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={this.closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-connect">
            <img src="https://i.ibb.co/XZCqwmHy/image.png" alt="Connect" />
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
