import { MouseEventHandler, useEffect, useState } from "react";
import { getThemeFromLocalStorage } from "../../lib/theme";
import MoonSVG from "../svg/MoonSVG";
import ScrollSVG from "../svg/ScrollSVG";
import SunSVG from "../svg/SunSVG";
import TVSVG from "../svg/TVSVG";

function Navbar() {
  // Handle navbar state when navbar (for small screen)
  const [navOpen, setNavOpen] = useState(false);
  const toggleNavbar = () => {
    let ul = document.querySelector(".navbar .right");
    let menuIcon = document.querySelector(".navbar .menu-icon");

    if (
      !(
        ul.classList.contains("right-nav-slide-out") ||
        ul.classList.contains("right-nav-slide-in")
      )
    ) {
      ul.classList.add("right-nav-slide-in");
    } else {
      if (ul.classList.contains("right-nav-slide-out")) {
        ul.classList.remove("right-nav-slide-out");
        ul.classList.add("right-nav-slide-in");
      } else {
        ul.classList.remove("right-nav-slide-in");
        ul.classList.add("right-nav-slide-out");
      }
    }

    // Toggle hamburger menu
    menuIcon.classList.toggle("toggle-menu-icon");

    // setNavOpen((currentState) => !currentState);
  };

  const [themeIcon, setThemeIcon] = useState(null);

  return (
    <nav className="navbar">
      <ul className="navbar-nav left">
        <HamburMenuIcon onClick={toggleNavbar} />
        <Logo />
        <ToggleThemeIcon themeIcon={themeIcon} setThemeIcon={setThemeIcon} />
      </ul>

      <ul className="navbar-nav right right-nav-slide-out">
        <NavItem navigateTo="#" icon={<TVSVG />} title="Posts" />
        <NavItem navigateTo="#" icon={<ScrollSVG />} title="Write" />
        <ToggleThemeIcon themeIcon={themeIcon} setThemeIcon={setThemeIcon} />
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

function ToggleThemeIcon({ themeIcon, setThemeIcon }) {
  type AppTheme = "light" | "dark";
  const themes: AppTheme[] = ["light", "dark"];

  const getThemeIcon = () => {
    if (themeIcon === "light") return <SunSVG />;
    if (themeIcon === "dark") return <MoonSVG />;
  };

  useEffect(() => {
    let theme: AppTheme = "dark";
    let themeTmp = getThemeFromLocalStorage();
    if (themeTmp) theme = themeTmp === "light" ? "light" : "dark";

    // Setting theme on body
    const bodyClass = document.body.classList;
    bodyClass.add(`${theme}-theme`);

    setThemeIcon(theme);
  }, []);

  const toggleTheme = () => {
    const current = getThemeFromLocalStorage();
    const next = current === "dark" ? "light" : "dark";
    if (next === "dark") setThemeIcon("dark");
    else if (next === "light") setThemeIcon("light");

    const bodyClass = document.body.classList;
    bodyClass.replace(`${current}-theme`, `${next}-theme`);
    localStorage.setItem("theme", next);
  };

  return (
    <li className="nav-item" onClick={toggleTheme}>
      <a href="#" className="nav-link theme-icon">
        <div className="icon">{getThemeIcon()}</div>
        <span className="tag tag-sm tag-contrast item-label">Theme</span>
        <div className="text">Theme</div>
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
        <span className="tag tag-sm tag-contrast item-label">
          {props.title}
        </span>
        <div className="text">{props.title}</div>
      </a>
    </li>
  );
}

export default Navbar;
