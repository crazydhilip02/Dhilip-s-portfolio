import React from "react";
import githubIcon from "../assets/icons/github.png";
import instagramIcon from "../assets/icons/instagram.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import mailIcon from "../assets/icons/mail.png";
import whatsappIcon from "../assets/icons/whatsapp.png";

const socialLinks = [
  { href: "https://www.linkedin.com/in/dhilip-kumar-310b10241", icon: linkedinIcon, alt: "LinkedIn" },
  { href: "https://github.com/crazydhilip02", icon: githubIcon, alt: "GitHub" },
  { href: "mailto:dhilip637410@gmail.com", icon: mailIcon, alt: "Mail" },
  { href: "https://wa.me/6374106956", icon: whatsappIcon, alt: "WhatsApp" },
  { href: "https://www.instagram.com/crazy_dhilip2/", icon: instagramIcon, alt: "Instagram" },
];

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10 px-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-6">Feel free to reach out through any of the platforms below.</p>
      <div className="flex justify-center items-center gap-6">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            <img src={link.icon} alt={link.alt} className="w-12 h-12 hover:scale-110 transition-transform" />
          </a>
        ))}
      </div>
      {/* <div className="mt-6 text-gray-700">
        <p>Email: <a href="mailto:dhilip637410@gmail.com" className="text-blue-600 hover:underline">dhilip637410@gmail.com</a></p>
        <p>Phone: <a href="tel:+916374106956" className="text-blue-600 hover:underline">+91 63741 06956</a></p>
      </div> */}
    </section>
  );
};

export default Contact;
