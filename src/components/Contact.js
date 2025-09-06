import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    // For now, we'll just use the same formspree endpoint
    // In a real React app, you might use fetch or axios to submit the form
    const form = e.target;
    form.submit();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact__container bd-grid">
        <form 
          action="https://formspree.io/f/meqbqpee" 
          method="POST" 
          className="contact__form"
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            className="contact__input" 
            autoComplete="off"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="contact__input" 
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea 
            name="message" 
            cols="0" 
            rows="10" 
            className="contact__input" 
            autoComplete="off" 
            style={{ fontFamily: 'Poppins, sans-serif' }} 
            placeholder="Tell me here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact__button button">Send</button>
        </form>
        
        {/* Contact information for print */}
        <div className="contact__info print-only" style={{ display: 'none' }}>
          <h3>Get In Touch</h3>
          <p><strong>Email:</strong> bagaspratamajunianika@gmail.com</p>
          <p><strong>LinkedIn:</strong> linkedin.com/in/bagas-pratama-junianika</p>
          <p><strong>GitHub:</strong> github.com/bagaspra16</p>
          <p><strong>YouTube:</strong> youtube.com/channel/UC9Rb7-D7vhEviJUqIQxA9bg</p>
          <p><strong>Location:</strong> Indonesia</p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 