import React from 'react';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';


function contactMe() {
  return (
    <div className="contact">
      <h1 className="name">
        <span className="tag">&lt; </span>
        Contact
        <span className="tag"> /&gt;</span>
      </h1>
      <section className="contact_list">
        <a className="contact_item" href="mailto:JasonMGreen89@yahoo.com"> Email
        </a>
        <a className="contact_item" href="https://github.com/JMGreen1989"> Github
        </a>
        <a className="contact_item" href="https://www.linkedin.com/in/jasongreen89/"> Linkedin
        </a>
        <a className="contact_item" href="https://drive.google.com/file/d/1DBx9WfXlVnqUoyvxKlS71GwycGeubWOv/view?usp=sharing"> My Resume
        </a>
      </section>
    </div>
    );
}

export default contactMe;
