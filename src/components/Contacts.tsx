import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import { Lamp } from "./Lamp";
import { PrimaryBtn } from "./PrimaryBtn";

type FormData = {
  email: string;
  name: string;
  message: string;
};

const Status = {
  OK: "Message sent successfully!",
  FAIL: "Failed to send message. Please try again.",
  ERROR: "An error occurred. Please try again later.",
  HOLD: "Hold on!",
  PENDING: "Message sending.",
};

export const Contacts: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    message: "",
  });
  const [status, setStatus] = useState(Status.HOLD);

  const handleClickRefresh = () => setStatus(Status.HOLD);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(Status.PENDING);

    try {
      const response = await fetch("https://formspree.io/f/mvggypla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(Status.OK);
        setFormData({ email: "", name: "", message: "" });
      } else {
        setStatus(Status.FAIL);
      }
    } catch {
      setStatus(Status.ERROR);
    }
  };

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
          onSubmit={handleSubmit}
          action="/"
        >
          <input
            className="border-b-[2px] border-primary-black w-full py-2"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            type="text"
          />

          <input
            className="border-b-[2px] border-primary-black w-full py-2"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            type="email"
            required
          />

          <textarea
            className="border-b-[2px] border-primary-black w-full py-2 mb-10 max-h-[15rem] min-h-[3rem] h-fit"
            placeholder="Message"
            name="message"
            onChange={handleChange}
            value={formData.message}
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
