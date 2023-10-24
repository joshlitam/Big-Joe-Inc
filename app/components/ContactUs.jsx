import React from 'react'

const ContactUs = () => {
  return (
    <div className='contact-us-wrapper py-24 px-12 min-w-full flex justify-center items-center border-l-8 border-green-600'>
      <div className="contact-us-container min-h-3/5 flex max-w-7xl">
        <div className="contact-us-left flex flex-col gap-16 flex-1">
          <h2 className='contact-us-left-header text-7xl font-extrabold text-green-600'>Let's discuss your event!</h2>
          <div className="contact-us-info-container text-xl flex flex-col gap-8">
            <div className="contact-us-info flex items-center gap-8">
              <img src="/img/telephone.png" alt="" className='w-16 h-16'/><p>+63 917 876 1087</p>
            </div>
            <div className="contact-us-info flex items-center gap-8">
              <img src="/img/mail.png" alt="" className='w-16 h-16'/><p>joshua.litam@gmail.com</p>
            </div>
            <div className="contact-us-info flex items-center gap-8">
              <img src="/img/fb.png" alt="" className='w-16 h-16'/><p><a href="https://www.facebook.com/bigjoeinc">fb.com/bigjoeinc</a></p>
            </div>
          </div>
        </div>
        <div className="contact-us-right flex flex-col items-center flex-1 gap-24 pt-6 pl-8">
          <h2 className="contact-us-right-header text-xl"><span className='font-extrabold'>Have an event?</span> Get in touch!</h2>
          <div className="contact-us-form-container flex flex-col justify-start w-full gap-8">
            <input type="text" placeholder='Name' className='contact-us-input h-12 w-96 border-b-2 border-black' />
            <input type="text" placeholder='Subject' className='contact-us-input h-12 w-96 border-b-2 border-black' />
            <input type="text" placeholder='Email' className='contact-us-input h-12 w-96 border-b-2 border-black' />
            <textarea name="message" placeholder='message' id="message" cols="30" rows="10" className='border-2 border-black p-2 rounded-lg'></textarea>
            <button className="bg-green-500 rounded-lg text-white w-36 h-12">Submit</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactUs
