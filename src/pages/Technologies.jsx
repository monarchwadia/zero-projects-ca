import React from 'react';
import Page from '../components/Page.jsx';
import {Link} from 'react-router-dom';

const Services = () => (
  <Page>
    <h1>Tech we work with.</h1>

    <p>
      Most of the work we do is in Javascript, Java, and Ruby on Rails, but we can probably work on your project regardless of the language and framework it's written in, and we do consider requests for projects built in in languages such as Go and Python. At the end of the day, it's worth considering that the success of a software project depends more on the people who work on it, rather than the language or framework it's built in. 
    </p>

    <p><Link to="/contact">Contact us now to get in touch with an expert</Link></p>

    <h2>React & Redux</h2> 
    <p>React offers an elegant, functional way of creating composable UI components that supercharges productivity and maintainability. When combined with a state management framework like Redux, it provides a complete frontend framework that makes it easy to build high performance UI applications that are predictable and maintainable.</p>

    <p>We're proud to work with some of the best React developers in Toronto to bring you a complete suite of services centered around React. We can manage and extend your React projects regardless of which state management framework you have chosen to use.</p>

    <h2>Angular 1, Angular 2 & Typescript</h2>

    <p>Angular 2, in adopting Typescript, popularized the notion of strong typing on the frontend, and brought with it some of the stability and safety that traditional OOP languages like Java and C# offer their users. Angular 2 also adapted traditional Angular 1 MVC patterns to a more mature web development environment.</p>

    <p>If you need a new Angular 1 or 2 application created, we can help you. If you need to manage an existing Angular 1 project, or migrate it to Angular 2, we would love to speak with you and understand your needs.</p>

    <h2>Node.js, MERN and MEAN Stack</h2>
    <p>If you plan on building a scalable, modern web app then you're probably considering using Node.js. Node offers an excellent complementary server-side framework for any HTML5 project. The advantage of having a single language across your entire stack cannot be understated.</p>

    <p>Our full stack developers can take on any scale of development work for the Node.js platform, ranging from simple CRUD applications that support complex frontends, to massively complex, high-performance backend systems that run with multiple cooperating microservices.</p>

    <h2>Java & Ruby on Rails</h2>

    <p>In addition to Node.js, we can also help you maintain your Ruby on Rails and Java projects. Our team has worked on multiple complex Ruby on Rails and Java projects over the years, and would be glad to support your existing project. We will also take on development projects for brand new Rails and Java applications.</p>
  </Page>
)

export default Services;