import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const contact_info = [
        { logo: "mail", text: "maruf2446@gmail.com" },
        { logo: "logo-whatsapp", text: "01720438804" },
        { logo: "location", text: "Mymensingh,Dhaka,Bangladesh" }
    ]

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7f199xc', 'template_a0m4xhh', form.current, 'ucq3xXmWKcstTw5Gt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id='contact' className='py-10 px-3 text-white'>
            <div className='text-center mt-8'>
                <h3 className='text-4xl font-semibold'>Contact <span className='text-cyan-600'>Me</span>
                </h3>
                <p className='text-gray-400 mt-3 text-lg'>Get in touch</p>

                <div className='mt-10 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col flex-1 gap-5'>
                        <input type="text" name='from_name' placeholder='Your Name' />
                        <input type="Email" name='from_email' placeholder='Your Email Address' />
                        <textarea name='message' placeholder='Your Message' rows={10}></textarea>
                        <button type='submit' className='btn-primary w-fit'>Send Message</button>
                    </form>
                    <div className='flex flex-col gap-7'>
                        {
                            contact_info.map((contact, i) => (
                                <div key={i} className='flex gap-4 w-fit items-center'>
                                    <div className='min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center text-white bg-cyan-600 rounded-full'>
                                        <ion-icon name={contact.logo}></ion-icon>
                                    </div>
                                    <p className='text-lg'>{contact.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;