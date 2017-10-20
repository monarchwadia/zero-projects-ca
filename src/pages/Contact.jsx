import React from 'react';
import Page from '../components/Page.jsx';
import {Link} from 'react-router-dom';

const Consulting = () => (
  <Page>
    <h1>Let's grab coffee.</h1>
    <p>Would you like to get in touch? We're all ears! You've crunched countless hours growing your business. Now let us help you grow your software project in a technical direction that's right for your business.</p>

    <h2>Email</h2>
    <p>To stop spambots from flooding our inbox, we're forced to use an email form. But don't worry! Your message goes right to our inbox, which we check regularly, and we'll get back to you really fast!</p>

    <p><Link to="/email">Click here to email us</Link></p>

    <h2>Location</h2>

    <p>We're located at:</p>

      <address>
        Suite 400 <br/>
        73 Bathurst St. <br/>
        Toronto, ON <br/>
        M5V 2P6 <br/>
      </address><br/>


    <div className="mapbox">
    <a href="https://www.google.com/maps/dir//73+Bathurst+Street,+Toronto/"><img src="https://maps.googleapis.com/maps/api/staticmap?autoscale=1&size=640x640&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C73+Bathurst+Street,+Toronto" alt="Google Map of 73 Bathurst Street, Toronto" /></a>

    </div>
  </Page>
)

export default Consulting;
