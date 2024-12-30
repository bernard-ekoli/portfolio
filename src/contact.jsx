import React from 'react';
import emailjs from 'emailjs-com';
import './CSS/contact.css'

const Contact = ({ contacVs }) => {


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_hsrceo2',
                'template_76qadal',
                e.target,
                'Jnb2XFEIkfB93HcEP'
            )
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('Message sent!');
            })
            .catch((error) => {
                console.error('Failed to send email:', error.text);
                alert('Failed to send message. Please try again.');
            });

        e.target.reset();
    };
    return (
        <div id="contactMe" className={contacVs ? 'disCon' : ''}>
            <div id="imgLine"></div>
            <div id="textLine">
                <form id="contactForm" onSubmit={sendEmail}>
                    <label htmlFor="name">Name/Company Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Input Your Name"
                    />
                    <br></br>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Input Your Email"
                    />
                    <br></br>

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Hi Bernard My/Our Company/Organisation/Group Needs Your Expertise"
                    ></textarea>
                    <br></br>

                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
