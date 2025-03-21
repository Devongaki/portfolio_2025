"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Logo = () => (
  <div className="logo">
    <span className="logo__text">
      <span className="logo__symbol">&lt;</span>
      Devongaki
      <span className="logo__symbol">/&gt;</span>
    </span>
  </div>
);

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
        <div className="container footer__container">
          <div className="footer__content">
            <div className="footer__section">
              <h3 className="footer__title">Navigation</h3>
              <nav className="footer__nav">
                <Link href="/" className="footer__link">
                  Home
                </Link>
                <Link href="#projects" className="footer__link">
                  Projects
                </Link>
                <Link href="#expertise" className="footer__link">
                  Expertise
                </Link>
                <Link href="#contact" className="footer__link">
                  Contact
                </Link>
              </nav>
            </div>

            <div className="footer__section">
              <h3 className="footer__title">Connect</h3>
              <div className="footer__social">
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">
              © {new Date().getFullYear()} Devongaki. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
