import React from 'react';
import Page from '../components/Page.jsx';
import {Link} from 'react-router-dom';
import YouTube from 'react-youtube';

const Home = () => (
  <Page>
    <h1>
      Expert SaaS & Web Software Developers
    </h1>

    <p>
      Business is hard -- web technology doesn't have to be. Let us take care of your SaaS and web projects for you, so that you can focus on your business and your customers.
    </p>

    <h2>Customer Testimonials</h2>

    <p className="quote">
      I personally was able to benefit quite a bit from interacting with monarch and learning how to manage the team better by listening to his feedback. Our development speed increased about <span className="red">150%, about 2.5 times</span> faster. 
      <p className="red">Frank Meng</p>
      <p>CTO & Founder, HiredHippo</p>
    </p>

    <YouTube 
      videoId="NpAEmKwiBSk"
    />

    <p className="quote">
      We really needed someone who could foresee potential risks and issues that might arise. We're in the business of information, and sometimes you're operating in a space where you don't know what you don't know, so it's very valuable to have someone who can bring in additional experience.
      <p className="red">Adam Gellert</p>
      <p>CEO & Co-Founder, HiredHippo</p>
    </p>

    <h2>Software development services</h2>

    <p>
      We work with a variety of technologies on both the frontend and the backend. Whether it's building engaging and beautiful user experiences in React, migrating a legacy Angular 1 project to Angular 2, or developing high-performance backend systems in Node.js, we can help you every step of the way.
    </p>

    <p><Link to="/services">Read more about our services</Link></p>

    <h2>Solid engineering expertise</h2>

    <p>
      Some foundational principles transcend individual languages and frameworks. Our developers have deep expertise in building projects in a way that keeps them agile and responsive to changing product requirements. Separation of concerns, the KISS principle, YAGNI, DRY, SOLID principles... they might be "old-fashioned", but they're still the best way to grow maintainable software projects, even today.
    </p>

    <p><Link to="/technologies">Read more about the technologies we work with</Link></p>

    <h2>Based in Toronto</h2>

    <p>
      We're located conveniently in Liberty Village, near the heart of downtown Toronto's exploding startup scene. We can meet you at your offices no matter where you're located. We would love to help you with your technology needs.
    </p>

    <p><Link to="/contact">Click here to get in touch with us</Link></p>
  </Page>
)

export default Home;
