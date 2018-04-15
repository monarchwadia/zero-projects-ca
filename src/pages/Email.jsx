import React from 'react';
import Page from '../components/Page.jsx';

const Services = () => (
  <Page>
    <h2> Get in touch. </h2>

    <p> Thanks for wanting to get in touch! We monitor our email inbox constantly. We'll get back to you really soon.</p>

    <form className="email-form" action="https://formspree.io/monarch@zeroprojects.ca" method="POST">
      <input className="text-input" type="text" name="name" placeholder="Your name" required></input>
      <input className="text-input" type="email" name="_replyto" placeholder="Your email" required></input>
      <textarea className="textarea-input" type="textarea" name="content" placeholder="Anything you'd like us to know"></textarea>
      <input className="submit-button" type="submit" value="Send"></input>
    </form>
  </Page>
)

export default Services;
