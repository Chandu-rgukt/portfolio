import './index.css'

const Contact = () => {
  const onSubmit = async event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const form = event.target

    formData.append('access_key', '3ff5932c-e001-4aa6-8ff3-bc4df68015e1')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then(response => response.json())

    if (res.success) {
      console.log('Success', res)
      form.reset()
      alert('I will get back to you')
    }
  } // <-- closing brace added here

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk </h1>
          <p>
            I am currently available to take new projects, so feel free to
            contact
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="https://i.ibb.co/3ysqvh6R/image.png" alt="" />
              <p>chandrasekharjnvnellore@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="https://i.ibb.co/B2GNhhkB/image.png" alt="" />
              <p>+91 9391918267</p>
            </div>
            <div className="contact-detail">
              <img src="https://i.ibb.co/xScBt1j9/image.png" alt="" />
              <p>Nellore,Andhrapradesh,India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <div className="contact-right-sub">
            <p>Your Name</p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              aria-label="Your Name"
            />
          </div>

          <div>
            <p>Your Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              aria-label="Your Email"
            />
          </div>

          <div>
            <p>Write Your Message Here</p>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              required
              aria-label="Message"
            />
          </div>
          <div>
            <button type="submit" className="contact-submit">
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
