import React, { useEffect, useState } from "react";
import clsx from "clsx";

const NAVIGATION_LINKS = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "Skills", href: "#skills" },
  { name: "Contacts", href: "#contacts" },
];

const ALL_SECTION_IDS = ["top", "portfolio", "skills", "contacts"];

export const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = ALL_SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];

    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection("#" + visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: 0.65,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      <ul
        className="fixed top-10 right-20 flex text-base text-primary-black/70 font-montserrat"
        style={{ writingMode: "vertical-lr" }}
      >
        {NAVIGATION_LINKS.map((link) => (
          <li
            className={clsx(
              "min-h-18 transition duration-150 ease-in-out text-center",
              activeSection === link.href
                ? "text-primary-black font-semibold"
                : "hover:scale-y-101 hover:text-primary-black",
            )}
            key={link.name}
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
