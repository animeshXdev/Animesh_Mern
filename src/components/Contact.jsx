import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    state: "",
    city: "",
  });

  const [sending, setSending] = useState(false);
  const [popup, setPopup] = useState({ show: false, success: false, message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.state || !formData.city) {
      setPopup({ show: true, success: false, message: "Please fill in all required fields." });
      setTimeout(() => setPopup({ show: false, success: false, message: "" }), 2000);
      return;
    }

    setSending(true);

    emailjs
      .send(
        "service_03jkwcc",
        "template_9tz7zwa",
        formData,
        "BaFswMHyviXUIlHws"
      )
      .then(() => {
        setPopup({ show: true, success: true, message: "Message sent successfully!" });
        setFormData({ name: "", email: "", phone: "", message: "", state: "", city: "" });
      })
      .catch(() => {
        setPopup({ show: true, success: false, message: "Failed to send message." });
      })
      .finally(() => {
        setSending(false);
        setTimeout(() => setPopup({ show: false, success: false, message: "" }), 2000);
      });
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-black text-white px-5 sm:px-20 py-8 pt-[5.5rem] flex flex-col md:flex-row gap-8"
    >
      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col gap-4 bg-emerald-900 bg-opacity-30 rounded-lg p-5 shadow-lg max-w-xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-3 text-emerald-400">Contact Me</h2>

        <input
          name="name"
          type="text"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          className="p-2.5 rounded bg-black bg-opacity-50 border border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          className="p-2.5 rounded bg-black bg-opacity-50 border border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="p-2.5 rounded bg-black bg-opacity-50 border border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <input
          name="state"
          type="text"
          placeholder="State *"
          value={formData.state}
          onChange={handleChange}
          className="p-2.5 rounded bg-black bg-opacity-50 border border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />
        <input
          name="city"
          type="text"
          placeholder="City *"
          value={formData.city}
          onChange={handleChange}
          className="p-2.5 rounded bg-black bg-opacity-50 border border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your message *"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="p-2.5 rounded bg-black bg-opacity-50 border border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
          required
        />

        <button
          type="submit"
          disabled={sending}
          className={`bg-emerald-500 hover:bg-emerald-600 transition rounded py-2.5 font-semibold text-black ${
            sending ? "cursor-not-allowed opacity-70" : ""
          }`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Map Section */}
      <div className="flex-1 rounded-lg overflow-hidden shadow-lg max-w-xl mx-auto">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675678.6459217467!2d83.1657137939384!3d25.88494439120306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad3fed1bbae325!2sBihar!5e0!3m2!1sen!2sin!4v1748881405303!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ minHeight: "300px", border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Popup Message */}
      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className={`fixed top-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded shadow-lg z-50 text-sm ${
              popup.success ? "bg-emerald-500 text-black" : "bg-red-600 text-white"
            }`}
          >
            {popup.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
