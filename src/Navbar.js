import alternativeLogo from "./images/alternative-logo.svg";
import React from "react";
import CustomLink from "./CustomLink";

export default function Navbar() {
  const [small, setSmall] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.scrollY > 200));
    }
  }, []);

  return (
    <nav className={small ? "nav small" : "nav"}>
      <a className="logo-link" href="/">
        <img
          id="logo"
          src={alternativeLogo}
          className={small ? "logo-small" : "logo"}
          alt="logo"
        />
      </a>
      <ul>
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/fun">Fun</CustomLink>
      </ul>
    </nav>
  );
}
