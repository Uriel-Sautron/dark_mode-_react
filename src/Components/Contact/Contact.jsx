/* eslint-disable max-len */
import React from 'react';
import Field from '../Helpers/Field';
import TextArea from '../Helpers/TextArea';
import Button from '../Helpers/Button';

const Contact = () => (
  <div className="contact">
    <h2>Contact</h2>
    <p>Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.</p>
    
    <form>
      <Field name="contact" />
      <TextArea name="content-contact" />
      <Button content="Envoyez" />
    </form>
  </div>
);

export default Contact;
