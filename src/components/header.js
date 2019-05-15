import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as darkMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import '../styles/header.scss';


const Header = () => (
  <header className="header">
    <h3>
      Where in the world ?
    </h3>
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          className="switchMode"
          onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faSun} />
              <p>
                Light Mode
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faMoon} />
              <p>
                Dark Mode
              </p>
            </div>
          )}
        </div>
      )}
    </ThemeToggler>
  </header>
);

export default Header;
