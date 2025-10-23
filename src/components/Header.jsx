// File: src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import "../assets/styles/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // optional: active link styling
  const getActiveClass = ({ isActive }) =>
    isActive ? "active-link" : undefined;

  return (
    <header className="Header">
      <div className="Header1">
        <h3><NavLink to="/"> Thriveon 360 </NavLink></h3>
      </div>

      {/* Desktop nav */}
      <nav className="Header2" aria-hidden={open}>
        <ul>
          <li><NavLink to="/" className={getActiveClass}>Home</NavLink></li>
          <li><NavLink to="/services" className={getActiveClass}>Services</NavLink></li>
          {/* <li><NavLink to="/products" className={getActiveClass}>Products</NavLink></li> */}
          <li><NavLink to="/portfolio" className={getActiveClass}>Portfolio</NavLink></li>
          {/* <li><NavLink to="/about" className={getActiveClass}>About</NavLink></li> */}
          <li><NavLink to="/contact" className={getActiveClass}>Contact</NavLink></li>
        </ul>
      </nav>

      <div className="Header3">
         
        {/* <Button text={"Our Work"} /> */}
      </div>

      {/* Burger button */}
      <button
        className={`burger ${open ? "open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
      >
        <span className="burger__box">
          <span className="burger__inner" />
        </span>
      </button>

      {/* Mobile menu */}
      <aside className={`mobileMenu ${open ? "open" : ""}`} aria-hidden={!open}>
        <ul>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          </li>
          {/* <li>
            <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
          </li> */}
          <li>
            <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
          </li>
          {/* <li>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          </li> */}
          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </li>
          <li className="mobileMenu__cta">
            <Button text={"Our Work"} />
          </li>
        </ul>
      </aside>
    </header>
  );
}
