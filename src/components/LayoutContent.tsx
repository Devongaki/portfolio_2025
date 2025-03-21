"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import TwitterIcon from "./icons/TwitterIcon";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
        <div className="container header__container">
          <Link href="/" className="header__logo">
            <Logo />
          </Link>

          <nav className="header__nav">
            <button
              className="header__menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <AnimatePresence>
              {(isMenuOpen || window.innerWidth > 768) && (
                <motion.div
                  className="header__nav-items"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <Link href="/" className="header__nav-item">
                    Home
                  </Link>
                  <Link href="#projects" className="header__nav-item">
                    Projects
                  </Link>
                  <Link href="#expertise" className="header__nav-item">
                    Expertise
                  </Link>
                  <Link href="#contact" className="header__nav-item">
                    Contact
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <div className="footer__left">
              <Logo />
              <nav className="footer__nav">
                <h3 className="footer__nav-title">Navigation</h3>
                <div className="footer__nav-items">
                  <Link href="#home" className="footer__nav-item">
                    Home
                  </Link>
                  <Link href="#projects" className="footer__nav-item">
                    Projects
                  </Link>
                  <Link href="#expertise" className="footer__nav-item">
                    Expertise
                  </Link>
                  <Link href="#contact" className="footer__nav-item">
                    Contact
                  </Link>
                </div>
              </nav>
            </div>

            <div className="footer__right">
              <div className="footer__nav">
                <h3 className="footer__nav-title">Connect</h3>
                <div className="footer__social">
                  <Link
                    href="https://github.com/Devongaki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    <GitHubIcon />
                    GitHub
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/william-okerio-ongaki/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </Link>
                  <Link
                    href="https://x.com/Devongaki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                  >
                    <TwitterIcon />
                    Twitter
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer__copyright">
              © {new Date().getFullYear()} Devongaki. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
