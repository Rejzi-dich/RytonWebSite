import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './header.css';
const logo = require('../../assets/logos/logo-clteam.png');

const Header = () => {
  const navItems = [
    { title: 'Новости', path: '/news' },
    { title: 'Документация', path: '/docs' },
  ];

  const socialLinks = [
    { icon: <FaGithub size={24} />, url: 'https://github.com/CodeLibraty/RytonLang' },
    { icon: <FaYoutube size={24} />, url: 'https://youtube.com/@codelibraty' },
    { icon: <FaTelegram size={24} />, url: 'https://t.me/CodeLibraty' },
  ];

  
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <div className="logo-container">
            <div className="logo-glow"></div>
            <img src={logo} alt="CLt" />
          </div>
          <span className="logo-text">CLteam</span>
        </Link>

        <nav className="nav-menu">
          <div className="nav-links">
            <Link to="/news" className="nav-link">
              <div className="nav-link-background"></div>
              <span>Новости</span>
            </Link>
            <Link to="/docs" className="nav-link">
              <div className="nav-link-background"></div>
              <span>Документация</span>
            </Link>
          </div>

          <div className="social-links">
            <a href="https://github.com/CodeLibraty/RytonLang" className="social-icon github">
              <FaGithub />
              <div className="icon-glow"></div>
            </a>
            <a href="https://t.me/CodeLibraty" className="social-icon telegram">
              <FaTelegram />
              <div className="icon-glow"></div>
            </a>
            <a href="https://youtube.com/@codelibraty" className="social-icon youtube">
              <FaYoutube />
              <div className="icon-glow"></div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;