import React from "react";

function ContactCard({ link, children }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-sky-200 p-6 rounded-lg flex max-w-sm gap-4"
    >
      {children}
    </a>
  );
}

export default ContactCard;
