import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import clsx from "clsx";

import RefreshIcon from "../assets/icons/refresh.svg";
import SpinnerIcon from "../assets/icons/spinner.svg";

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
    <section
      className="flex items-center lg:p-40 bg-primary-black lg:bg-white"
      id="contacts"
    >
      <div className="flex-1 flex flex-col h-full pt-40 lg:pt-30">
        <div>
          <h2 className="text-5xl font-bungee mb-10 text-white lg:text-primary-black">
            Hey!
          </h2>

          <p className="font-montserrat whitespace-pre-line w-fit text-white lg:text-primary-black/70">
            Write to me here or send me an email <span className="mr-1">—</span>
            <a
              className="font-medium font-montserrat pb-[2px] border-b-[2px] border-[#7fb2e3] text-[#7fb2e3]"
              href="mailto:serhii.romaniuk.dev@gmail.com"
            >
              serhii.romaniuk.dev@gmail.com
            </a>
          </p>
        </div>

        <div className="flex-1">
          {status === Status.OK && (
            <div className="flex gap-20 items-center pt-20">
              <p className="font-montserrat font-semibold uppercase text-white lg:text-primary-black">
                {Status.OK}
              </p>

              <button
                type="button"
                className="font-montserrat text-white lg:text-primary-black p-1 border-[2px] border-white lg:border-primary-black rounded-sm"
                onClick={handleClickRefresh}
              >
                <RefreshIcon />
              </button>
            </div>
          )}

          {status === Status.PENDING && (
            <div className="p-40 flex justify-center">
              <SpinnerIcon />
            </div>
          )}

          {status === Status.ERROR && (
            <div className="mt-20 flex gap-20 items-center">
              <p className="font-montserrat font-semibold uppercase text-white lg:text-primary-black">
                Something went wrong
              </p>

              <button
                type="button"
                className="font-montserrat text-white lg:text-primary-black p-1 border-[2px] border-white lg:border-primary-black rounded-sm"
                onClick={handleClickRefresh}
              >
                <RefreshIcon />
              </button>
            </div>
          )}

          {status === Status.PENDING && (
            <div className="mt-20 flex gap-20 items-center"></div>
          )}

          <form
            className={clsx(
              status !== Status.HOLD && "hidden",
              "flex flex-col gap-6 mt-12 font-montserrat max-w-[40rem]",
              "[&>input,textarea]:border-white lg:[&>input,textarea]:border-primary-black",
              "[&>input,textarea]:text-white lg:[&>input,textarea]:text-primary-black",
            )}
            onSubmit={handleSubmit}
            action="/"
          >
            <input
              className="border-b-[2px] w-full py-2 outline-none"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              type="text"
              required
            />

            <input
              className="border-b-[2px] border-primary-black w-full py-2 outline-none"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              type="email"
              required
            />

            <textarea
              className="border-b-[2px] border-primary-black w-full py-2 mb-10 max-h-[15rem] min-h-[3rem] h-fit outline-none"
              placeholder="Message"
              name="message"
              onChange={handleChange}
              value={formData.message}
              required
              rows={4}
            ></textarea>

            <div className="flex justify-end">
              <PrimaryBtn
                text="Send a message"
                onClick={() => (window.location.hash = "contacts")}
                type="submit"
                className="border border-white lg:border-none"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:block flex-1">
        <Lamp />
      </div>
    </section>
  );
};
