import React, { useState } from "react";
import "./contact.css"; 

export default function Contact() {
  const [form, setForm] = useState({ email: "", phone: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    alert("Thanks! We received your message.");
    setForm({ email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-wrapper">
      <form className="contact-card" onSubmit={handleSubmit}>
        <h2 className="title">Contact Us</h2>

        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="input"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label className="label" htmlFor="phone">
          Mobile Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="input"
          placeholder="Enter your mobile number"
          value={form.phone}
          onChange={handleChange}
          pattern="^[0-9+\-\s()]{7,}$"
          title="Use digits, spaces, +, - or ()"
          required
        />

        <label className="label" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="textarea"
          placeholder="Write your message..."
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
