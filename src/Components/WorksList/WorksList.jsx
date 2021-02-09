/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import mealories from '../../images/mealories.png';
import kittyPics from '../../images/kitty-pics.png';

const WorksList = () => (
  <section>
    <h2>Projets</h2>
    <div className="workslist">
      <p>Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.</p>
      <div className="workslist-project">
        <div className="project">
          <h3>Kitty Pics</h3>
          <img src={kittyPics} alt="Kitty Pics" />
          <p>
            KittyPics est un site de vente de photo de chat produit lors du projet "boutique en ligne" de THP.
            <br />
            Lien Heroku : https://kitty-pics.herokuapp.com/
          </p>
        </div>
        <div className="project">
          <h3>Mealories</h3>
          <img src={mealories} alt="Mealories" />
          <p>Parce que notre temps et notre santé sont précieux mais parfois difficilement concilliables, nous vous proposons Mealories. Le but ? Mieux manger, en laissant nous laissant choisir vos repas.</p>
        </div>
        <div className="project">
          <h3>Projet 3</h3>
          <p />
        </div>
      </div>
    </div>
  </section>
);

export default WorksList;
