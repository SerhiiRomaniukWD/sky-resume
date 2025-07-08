import React from "react";

import { Lamp } from "./Lamp";
import { PrimaryBtn } from "./PrimaryBtn";

export const Contacts: React.FC = () => {
  return (
    <section className="flex items-center p-40" id="contacts">
      <div className="flex-1">
        <h2 className="text-5xl font-bungee mb-10">Hey!</h2>

        <p className="font-montserrat whitespace-pre-line text-primary-black/70">
          Write to me here or send me an email <span className="mr-1">—</span>
          <a
            className="font-medium font-montserrat pb-[2px] border-b-[2px] border-[#7fb2e3] text-[#7fb2e3]"
            href=""
          >
            serhii.romaniuk.dev@gmail.com
          </a>
        </p>

        <form
          className="flex flex-col gap-6 mt-12 font-montserrat max-w-[40rem]"
          action="/"
        >
          <input
            className="border-b-[2px] border-primary-black w-full py-2"
            placeholder="Name"
            type="text"
          />

          <input
            className="border-b-[2px] border-primary-black w-full py-2"
            placeholder="Email"
            type="email"
            required
          />

          <textarea
            className="border-b-[2px] border-primary-black w-full py-2 mb-10 max-h-[15rem] min-h-[3rem] h-fit"
            placeholder="Message"
            rows={4}
          ></textarea>

          <div className="flex justify-end">
            <PrimaryBtn
              text="Send message"
              onClick={() => (window.location.hash = "contacts")}
              type="submit"
            />
          </div>
        </form>
      </div>
      <div className="flex-1">
        <Lamp />
      </div>
    </section>
  );
};
