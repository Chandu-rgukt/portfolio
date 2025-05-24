import './index.css'

const Footer = () => (
  <div className="footer">
    <div className="footer-top">
      <div className="footer-top-left">
        <h1 className="footer-title">CHANDU</h1>
        <p>I am a full stack developer from India</p>
      </div>
      <div className="footer-top-right">
        <div className="footer-email-input">
          <input type="email" placeholder="enter your email" />
        </div>
        <div className="footer-subscribe">Subscribe</div>
      </div>
    </div>
    <hr />
    <div className="footer-bottom">
      <p className="footer-bottom-left">© 2025 Chandra. All rights reserved.</p>
      <div className="footer-bottom-right">
        <p>Term of services</p>
        <p>Privacy policy</p>
        <p>Connect with me</p>
      </div>
    </div>
  </div>
)

export default Footer
