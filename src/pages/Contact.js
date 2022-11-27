import React from "react";
import {
  SiFacebook,
  SiGmail,
  SiInstagram,
  SiTelegram,
  SiTwitter,
  SiWhatsapp,
} from "react-icons/si";
import ContactCard from "../components/ContactCard";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="flex flex-col bg-sky-50 min-h-screen">
      <Navbar />
      <section className="container mx-auto px-12 flex flex-col gap-8 justify-center items-center flex-grow">
        <h1 className="text-4xl font-bold text-sky-800 text-center">
          Contact Me
        </h1>
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex gap-12 flex-wrap justify-center">
            <ContactCard link="https://instagram.com/raihanadamstagram">
              <SiInstagram className="fill-sky-800" size={48} />
            </ContactCard>
            <ContactCard link="https://twitter.com/naonsiaanying">
              <SiTwitter className="fill-sky-800" size={48} />
            </ContactCard>
            <ContactCard link="https://www.facebook.com/hallwack">
              <SiFacebook className="fill-sky-800" size={48} />
            </ContactCard>
            <ContactCard link="https://telegram.org/@hallwack">
              <SiTelegram className="fill-sky-800" size={48} />
            </ContactCard>
            <ContactCard link="https://wa.me/6281278780940">
              <SiWhatsapp className="fill-sky-800" size={48} />
            </ContactCard>
            <ContactCard link="mailto:hallwack.id@gmail.com">
              <SiGmail className="fill-sky-800" size={48} />
            </ContactCard>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
