import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ModeContext from '../../Mode';
import Button from '../Helpers/Button';

const Header = () => {
  const { dark, toogleDark } = useContext(ModeContext);
  
  return (
    <header>
      <h1>Portfolio de John Doe</h1>
      <a href="https://github.com/Uriel-Sautron">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <Button content={dark ? 'LightMode' : 'DarkMode'} onClick={(e) => toogleDark(e, dark)} />
    </header>
  );
};

export default Header;
