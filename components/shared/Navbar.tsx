import { MouseEventHandler, useEffect, useState } from "react";
import { getThemeFromLocalStorage } from "../../lib/theme";
import MoonSVG from "../svg/MoonSVG";
import ScrollSVG from "../svg/ScrollSVG";
import SunSVG from "../svg/SunSVG";
import TVSVG from "../svg/TVSVG";

function Navbar() {
  // Handle navbar state when navbar (for small screen)
  const [navOpen, setNavOpen] = useState(false);
  const toggleNavbar = () => setNavOpen((currentState) => !currentState);

  return (
    <nav className="navbar">
      <ul className="navbar-nav left">
        <HamburMenuIcon onClick={toggleNavbar} />
        <Logo />
        <ToggleThemeIcon />
      </ul>

      <ul className="navbar-nav right">
        <NavItem navigateTo="#" icon={<TVSVG />} title="Posts" />
        <NavItem navigateTo="#" icon={<ScrollSVG />} title="Write" />
        <ToggleThemeIcon />
      </ul>
    </nav>
  );
}

interface HamburMenuIconProps {
  onClick: MouseEventHandler<HTMLLIElement>;
}

function HamburMenuIcon(props: HamburMenuIconProps) {
  return (
    <li className="nav-item menu-icon" onClick={props.onClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </li>
  );
}

function Logo() {
  return (
    <li className="nav-item">
      <a href="/" className="nav-link logo">
        NotesFlow
      </a>
    </li>
  );
}

function ToggleThemeIcon() {
  type AppTheme = "light" | "dark";
  const themes: AppTheme[] = ["light", "dark"];

  const [themeIcon, setThemeIcon] = useState(null);

  useEffect(() => {
    let theme: AppTheme = "dark";
    let themeTmp = getThemeFromLocalStorage();
    if (themeTmp) theme = themeTmp === "light" ? "light" : "dark";

    // Setting theme on body
    const bodyClass = document.body.classList;
    bodyClass.add(`${theme}-theme`);
  }, []);

  const toggleTheme = () => {
    const current = getThemeFromLocalStorage();
    const next = current === "dark" ? "light" : "dark";
    if (next === "dark") setThemeIcon(<MoonSVG />);
    else if (next === "light") setThemeIcon(<SunSVG />);

    const bodyClass = document.body.classList;
    bodyClass.replace(`${current}-theme`, `${next}-theme`);
    localStorage.setItem("theme", next);
  };

  return (
    <li className="nav-item" onClick={toggleTheme}>
      <a href="#" className="nav-link theme-icon icon">
        <SunSVG />
      </a>
    </li>
  );
}

interface NavItemProps {
  navigateTo: string;
  icon: JSX.Element;
  title: string;
}

function NavItem(props: NavItemProps) {
  return (
    <li className="nav-item">
      <a href={`${props.navigateTo}`} className="nav-link">
        <div className="icon">{props.icon}</div>
        <span className="text">{props.title}</span>
      </a>
    </li>
  );
}

export default Navbar;
