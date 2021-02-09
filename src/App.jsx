/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import Header from './Components/Header/Header';
import WorksList from './Components/WorksList/WorksList';
import Contact from './Components/Contact/Contact';
import './Sass/App.scss';
import ModeContext from './Mode';

function App() {

  const [dark, setDark] = useState(false);
  const toogleDark = (e, dark2) => {
    e.preventDefault();
    console.log(dark2);
    const darkToogle = !dark2;
    setDark(darkToogle);
  };
  return (
    <ModeContext.Provider value={{ dark, toogleDark }}>
      <div className={dark ? 'dark-body' : null}>
        <Header />
        <main>
          <h2 className="main-title">
            Bonjour, je m'appelle John Doe.
            <br />
            Bienvenue sur mon portfolio !
          </h2>
          <p>Depuis quelques mois, j'apprends le développement web grâce à The Hacking Projet. J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.</p>
          <WorksList />
          <Contact />
        </main>
      </div>
    </ModeContext.Provider>
  );
  
}

export default App;
