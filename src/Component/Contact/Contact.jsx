import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail, MdAddIcCall } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dyhvn7l',
        'template_dhilp8u',
        form.current,
        'HUf49LkCQwu-O1q16'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Thank you for reaching out! I’ll get back to you soon.');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div className="mt-16 px-6 sm:px-8 lg:px-16">
      {/* Heading */}
      <h1 id="Contact" className="text-secondary text-3xl sm:text-4xl lg:text-5xl text-center font-semibold mb-12">
        Contact Me
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
          <div className="mb-6">
            <label className="block text-lg font-semibold text-secondary mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full p-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold text-secondary mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full p-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold text-secondary mb-2">Message</label>
            <textarea
              name="message"
              className="w-full p-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="mt-10 lg:mt-0 lg:pl-12 w-full lg:w-1/2">
          <p className="text-secondary text-lg sm:text-xl lg:text-2xl text-center lg:text-left mb-8">
            Got a project idea or just want to chat? I’d love to hear from you! Drop me a message, and I’ll get back to you promptly.
          </p>

          {/* Project Stats */}
          <div className="flex justify-center lg:justify-start gap-6 mb-8">
            <div className="h-[90px] w-[120px] p-4 bg-primary text-center rounded-lg flex flex-col justify-center">
              <h1 className="text-white text-2xl font-bold">6+</h1>
              <p className="text-white font-semibold">Total Projects</p>
            </div>
            <div className="h-[90px] w-[120px] p-4 bg-primary text-center rounded-lg flex flex-col justify-center">
              <h1 className="text-white text-2xl font-bold">3+</h1>
              <p className="text-white font-semibold">Completed Projects</p>
            </div>
            <div className="h-[90px] w-[120px] p-4 bg-primary text-center rounded-lg flex flex-col justify-center">
              <h1 className="text-white text-2xl font-bold">3+</h1>
              <p className="text-white font-semibold">Happy Customers</p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-tertiary p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-start space-y-8">
              <div className="flex items-center space-x-4">
                <MdOutlineEmail size={40} className="text-primary" />
                <div>
                  <h1 className="font-bold text-secondary">Email</h1>
                  <p className="text-secondary">irasubiza220006142@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MdAddIcCall size={40} className="text-primary" />
                <div>
                  <h1 className="font-bold text-secondary">Phone</h1>
                  <p className="text-secondary">+250787954412</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
