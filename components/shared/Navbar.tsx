import { MouseEventHandler, useState } from "react";
import ScrollSVG from "../svg/ScrollSVG";
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

        {/* To keep <Logo/> in the middle and <HamburMenuIcon/> on the left side, 
              so this will be on right side */}
        <li className="nav-item">
          <a href="#" className="nav-link">
            🍔
          </a>
        </li>
      </ul>

      <div className="navbar-nav right">
        <NavItem navigateTo="#" icon={<TVSVG />} title="Posts" />
        <NavItem navigateTo="#" icon={<ScrollSVG />} title="Write" />
      </div>
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
      <ul className="nav-lik logo">NotesFlow</ul>
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
        {props.icon}
        {props.title}
      </a>
    </li>
  );
}

export default Navbar;
