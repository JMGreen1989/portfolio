import React from 'react';
import picture from '../picture/me.jpg';

function Intro() {
  return (
    <section className="intro">
      <div><img src={picture} alt="me" className="picofme"/></div>
    </section>
  );
}

export default Intro;
