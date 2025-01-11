import Logo from "./images/Logo_Tulip.svg";
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
      {/* <a className="logo-link" href="/">
        <img
          id="logo"
          src={Logo}
          className={small ? "logo-small" : "logo"}
          alt="logo"
        />
      </a> */}
      <ul>
        <CustomLink href="/">work</CustomLink>
        <CustomLink href="/about">about</CustomLink>
        <CustomLink href="/extra">extra</CustomLink>
      </ul>
    </nav>
  );
}
