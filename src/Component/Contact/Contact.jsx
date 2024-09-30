import React, { useState } from 'react';

const Contact = () => {
  // Form state to capture the input values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  // Handle form changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (could be an API call)
    alert(`Message sent!`);

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='mt-6 px-4 sm:px-6 lg:px-16'>
      {/* Heading */}
      <h1 id='Contact' className='text-secondary font-bold text-3xl sm:text-4xl lg:text-5xl text-center'>
        Contact Me
      </h1>
      
      <div className='flex flex-wrap justify-between mt-10'>
        {/* Contact form */}
        <form onSubmit={handleSubmit} className='space-y-6 w-full md:w-1/2 lg:w-[500px] mx-auto md:mx-0'>
          <div className='flex flex-col items-start'>
            <label className='text-lg font-medium mb-2'>Full Name</label>
            <input
              type='text'
              name='fullName'
              placeholder='Full name'
              value={formData.fullName}
              onChange={handleChange}
              className='border border-secondary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary w-full'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-lg font-medium mb-2'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Your email'
              value={formData.email}
              onChange={handleChange}
              className='border border-secondary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary w-full'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-lg font-medium mb-2'>Message</label>
            <textarea
              name='message'
              placeholder='Your message'
              value={formData.message}
              onChange={handleChange}
              className='border border-secondary rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-secondary w-full'
            />
          </div>

          <button
            type='submit'
            className='bg-secondary text-white rounded-lg p-3 hover:bg-opacity-90 transition duration-300 w-full font-semibold'
          >
            Send Message
          </button>
        </form>

        {/* Message and stats section */}
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start md:ml-8 mt-10 md:mt-0'>
          <p className='text-secondary text-lg md:text-xl lg:text-2xl text-center md:text-left'>
            Got a project idea or just want to have a conversation? I’d love to hear from you! Drop me a message, and I’ll get back to you promptly. Let’s create something amazing together!
          </p>
          
          {/* Project stats */}
          <div className='mt-12 flex gap-6 w-full justify-center md:justify-start'>
            <div className='h-[90px] p-3 rounded-lg bg-primary text-center'>
              <h1 className='font-bold text-white text-2xl'>6+</h1>
              <p className='font-bold text-white'>Total Projects</p>
            </div>
            <div className='h-[90px] p-3 rounded-lg bg-primary text-center'>
              <h1 className='font-bold text-white text-2xl'>3+</h1>
              <p className='font-bold text-white'>Completed Projects</p>
            </div>
            <div className='h-[90px] p-3 rounded-lg bg-primary text-center'>
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
