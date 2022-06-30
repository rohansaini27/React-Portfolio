import React from 'react';
import './Contact.css';
import {HiMail} from 'react-icons/hi';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ss7140g', 'template_la3p63n', form.current, 'daUVfH7c35W7OdKdY')
          e.target.reset();
      };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiMail className='contact__option-icon'/>
                    <h4>Email</h4>
                    {/* <h5>rohansaini0027@gmail.com</h5> */}
                    <a href="mailto:rohansaini0027@gmail.com" target='_blank' >Send an Email</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                    <h4>FB Messenger</h4>
                    {/* <h5>Rohan Saini</h5> */}
                    <a href="https://m.me/rohan.saini.27" target='_blank' >Send a Facebook Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    {/* <h5>+91-7355973922</h5> */}
                    <a href="https://api.whatsapp.com/send?phone=+917355973922" target='_blank' >Send a WhatsApp</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" name='name' placeholder='Enter your Full Name' required/>
                    <input type="email" name="email" placeholder='Enter your Email' required />
                    <textarea name='message' rows='7' placeholder='Type your message here..' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>

        </section>
    )
}

export default Contact