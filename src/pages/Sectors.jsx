import {Link} from 'react-router-dom';
import React from 'react';
import Page from '../components/Page.jsx';

const Sectors = () => (
  <Page>
    <h1>We adapt to your needs.</h1>

    <p>Our project managers understand that your company has requirements that are specific to your industry. We can accommodate all of your requirements, regardless of which sector and industry you operate in.</p>

<p><Link to="/contact">Contact us now to get in touch with an expert</Link></p>

    <h2>For Startups & Ventures</h2>
    <p>
      If you're a startup and need help building or growing an MVP, we can help. If you need
      assistance in building or training a team, or installing best practices, we can help there as well.
      If you're migrating a Rails or Java app to Node.js, or vice versa, our developers are highly skilled in
      multiple languages (that's right, we're not just Javascript developers) and can help see you
      through the transition.
    </p>

    <h2>For Corporations & SMBs</h2>
    <p>
      If you're in a large corporate setting, and need a reliable team who can help quickly deliver 
       robust business systems, we're your guys. Tight deadlines are no problem for us. We can also train your team to
      work with Javascript more effectively. We also really shine when it comes to proof of concept (POC) work.
      We make sure everything we write is reusable, maintainable and documented.
    </p>

    <h2>For Government & Public Sector</h2>
    <p>
      If you work in the government or in public sector organizations, we can help you
      leverage the tried-and-tested ecosystem of technologies and web frameworks that Javascript represents. We excel
      in building responsive UI experiences that meet accessibility standards within budget
      and on time.
    </p>

    <h2>For Non-Profits & Charities</h2>
    <p>
      We work with charities, non-profits and social enterprises to help them serve their donors and customers better.
      Web-based user interfaces offer a world of options in engagement, outreach and fundraising. We
      can design and develop software for mobile devices and tablets that can make fundraising easier
      and more efficient. 
    </p>

  </Page>
)

export default Sectors;
