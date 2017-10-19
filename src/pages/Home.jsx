import React from 'react';
import Page from '../components/Page.jsx';
import {Link} from 'react-router-dom';

const Consulting = () => (
  <Page>
    <h1>
      Javascript Consultants.
    </h1>

    <p>
      Zero Projects is a consulting firm that helps make technology simple again. Business is hard -- technology doesn't have to be. Let us take care of your technology needs for you, so that you can focus on your business and your customers.
    </p>

<p><Link to="/contact">Contact us now to get in touch with an expert</Link></p>

    <h2>Modern JS development services...</h2>

    <p>
      We work with a variety of technologies on both the frontend and the backend. Whether it's building engaging and beautiful user experiences in React, migrating a legacy Angular 1 project to Angular 2, or developing high-performance backend systems in Node.js, we can help you every step of the way.
    </p>

    <p><Link to="/services">Read more about our services</Link></p>

    <h2>...that follow good old-fashioned principles.</h2>

    <p>
      Our developers have a solid grounding in Java OOP design principles. Separation of concerns, the KISS principle, YAGNI, DRY, inheritance, polymorphism... they might be "old-fashioned", but they're still the best way to grow maintainable software projects, even today. Callbacks and functional programming only enhance those solid foundations.
    </p>

    <p><Link to="/technologies">Read more about the technologies we work with</Link></p>

    <h2>We're just a few blocks away.</h2>

    <p>
      We're located conveniently in the heart of downtown Toronto's exploding startup scene, and we can meet you at your offices no matter where you're located. We would love to help you with your technology needs.
    </p>

    <p><Link to="/contact">Click here to get in touch with us</Link></p>
  </Page>
)

export default Consulting;
