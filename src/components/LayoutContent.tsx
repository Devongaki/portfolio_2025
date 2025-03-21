"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
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
          <a href="/" className="header__logo">
            William Ongaki
          </a>

          <nav className="header__nav">
            <button
              className="header__menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <AnimatePresence>
              {(isMobileMenuOpen || window.innerWidth > 768) && (
                <motion.div
                  className="header__nav-items"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <a href="/" className="header__nav-item">
                    Home
                  </a>
                  <a href="#projects" className="header__nav-item">
                    Projects
                  </a>
                  <a href="#expertise" className="header__nav-item">
                    Expertise
                  </a>
                  <a href="#contact" className="header__nav-item">
                    Contact
                  </a>
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
                <a href="/" className="footer__link">
                  Home
                </a>
                <a href="#projects" className="footer__link">
                  Projects
                </a>
                <a href="#expertise" className="footer__link">
                  Expertise
                </a>
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </nav>
            </div>

            <div className="footer__section">
              <h3 className="footer__title">Connect</h3>
              <div className="footer__social">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">
              © {new Date().getFullYear()} William Ongaki. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
