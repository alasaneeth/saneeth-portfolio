import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm('service_dqi39qk', 'template_q6c0q38', form.current, {
        publicKey: '1f0A6MZirCXRbcOak',
      })
      .then(
        () => {
          setIsSent(true);
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <section id='contacts' className="bg-gray-100 text-gray-800 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Contact Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Enter your message"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send"
              className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
            />
            {isSent && <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>}
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="p-6">
          <ul className="space-y-4 text-lg">
            <li>
              <span className="font-semibold">Email Address :</span>{' '}
              <a
                href="mailto:alasaneeth22@gmail.com"
                className="text-blue-600 hover:underline"
              >
                alasaneeth22@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold">LinkedIn :</span>{' '}
              <a
                href="https://www.linkedin.com/in/aasif-saneeth-bin-abdul-latheef"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Aasif Saneeth
              </a>
            </li>
            <li>
              <span className="font-semibold">GitHub :</span>{' '}
              <a
                href="https://github.com/alasaneeth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                alasneeth
              </a>
            </li>
            <li>
              <span className="font-semibold">Contact No :</span>{' '}
              <a
                href="tel:+94 740 822 580"
                className="text-blue-600 hover:underline"
              >
                  +94 740 822 580
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
