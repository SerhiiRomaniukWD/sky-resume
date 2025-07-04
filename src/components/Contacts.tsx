import React from "react";

import { Lamp } from "./Lamp";

export const Contacts: React.FC = () => {
  return (
    <section className="flex items-center p-40" id="contacts">
      <div className="flex-1">
        <h2 className="text-4xl font-bungee mb-10">Hey!</h2>

        <p className="font-montserrat whitespace-pre-line text-primary-black/70">
          Write to me here - or send me an email
        </p>

        <a
          className="font-montserrat border-b-[2px] border-[#b8d7f2] text-[#b8d7f2]"
          href=""
        >
          serhii.romaniuk.dev@gmail.com
        </a>

        <form action="/"></form>
      </div>
      <div className="flex-1">
        <Lamp />
      </div>
    </section>
  );
};
