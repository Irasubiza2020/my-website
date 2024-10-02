import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dyhvn7l',        // connection  to emailjs 
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
          alert('Failed to send the message. Please try again.');  // Error alert
        }
      );
  };

  return (
    <div className='mt-6 px-4 sm:px-6 lg:px-16'>
      {/* Heading */}
      <h1 id='Contact' className='text-secondary font-bold text-3xl sm:text-4xl lg:text-5xl text-center'>
        Contact Me
      </h1>
      
      <div className='flex flex-col lg:flex-row justify-between items-start mt-10'>
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className='w-full lg:w-1/2 p-4 lg:pr-8'>
          <label className="block mb-2 text-lg font-semibold text-secondary">Name</label>
          <input type="text" name="user_name" className="border border-secondary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary w-full" required />

          <label className="block mb-2 text-lg  font-semibold text-secondary">Email</label>
          <input type="email" name="user_email" className="border border-secondary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary w-full" required />

          <label className="block mb-2 text-lg font-semibold text-secondary">Message</label>
          <textarea name="message" className="border border-secondary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary w-full" required />

          <input type="submit" value="Send" className="bg-secondary mt-4 text-white rounded-lg p-3 hover:bg-opacity-90 transition duration-300 w-full font-semibold" />
        </form>

        {/* Message and stats section */}
        <div className=' mt-14 w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-8  lg:mt-0'>
          <p className='text-secondary text-lg sm:text-xl lg:text-2xl text-center lg:text-left mt-8'>
            Got a project idea or just want to have a conversation? I’d love to hear from you! Drop me a message, and I’ll get back to you promptly. Let’s create something amazing together!
          </p>

          {/* Project stats */}
          <div className='mt-12 flex gap-6 w-full justify-center lg:justify-start'>
            <div className='h-[90px] p-3 rounded-lg bg-primary text-center flex flex-col justify-center'>
              <h1 className='font-bold text-white text-2xl'>6+</h1>
              <p className='font-bold text-white'>Total Projects</p>
            </div>
            <div className='h-[90px] p-3 rounded-lg bg-primary text-center flex flex-col justify-center'>
              <h1 className='font-bold text-white text-2xl'>3+</h1>
              <p className='font-bold text-white'>Completed Projects</p>
            </div>
            <div className='h-[90px] p-3 rounded-lg bg-primary text-center flex flex-col justify-center'>
              <h1 className='font-bold text-white text-2xl'>3+</h1>
              <p className='font-bold text-white'>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
