import React from 'react';
import Page from '../components/Page.jsx';
import {Link} from 'react-router-dom';
import staticMap from '../images/staticmap.png'

const Contact = () => (
  <Page>
    <h2>Let's grab coffee.</h2>
    <p>Would you like to get in touch? We're all ears! You've crunched countless hours growing your business. Now let us help you grow your software project in a technical direction that's right for your business.</p>

    <p>To stop spambots from flooding our inbox, we're forced to use an email form. But don't worry! Your message goes right to our inbox, which we check regularly, and we'll get back to you really fast!</p>

    <p><Link to="/email">Click here to email us</Link></p>
  </Page>
)

export default Contact;
