import {Link} from 'react-router-dom'
import React from 'react';
import Page from '../components/Page.jsx';

const Services = () => (
  <Page>
    <h1>Our services.</h1>

    <p>Our project managers have years of experience in delivering quality software on schedule and within budget. We communicate continuously with you throughout the process of building out your project, allowing us to make changes and pivot as with minimal delay. We work closely with you to ensure that your project is successful.</p>

    <p><Link to="/contact">Contact us now to get in touch with an expert</Link></p>

    <h2>Full stack development</h2>
    <p>
      Our software developers have produced applications in multiple paradigms, domains, languages, technology stacks, architectures and frameworks. We preserve best practices and use appropriate design patterns, even when under pressure to deliver rapidly. We understand that best practices exist to speed up development in the long run.
    </p>

    <h2>Captivating UX/UI Design</h2>
    <p>
    Professional grade UX/UI design is absolutely critical to the legitimacy of your product. In addition to technical design expertise, our designers have an excellent eye for ergonomics and style, allowing them to design attractive user experiences that your users find comfortable to use.
    </p>

    <h2>Legacy software maintenance & refactoring</h2>
    <p>
      Already have a software project? We can help manage your existing codebase, regardless of how large or small it is. Whether it needs refactoring, extension, cleanup or long-term maintenance, we can take care of it for you going forward. We'd love to hear more about your project's particular needs.
    </p>

    <h2>Architecture & system design</h2>
    <p>
      Javascript systems need particular attention when it comes to architecture because of the flexibility that the language affords. Our engineers have handled full-stack architecture and system design work for Fortune 500 companies with teams of more than 200 people. Whatever your needs are, we can take care of them. 
    </p>

    <h2>Angular 1 → Angular 2 Migrations</h2>
    <p>
      Migrating Angular 1 projects to Angular 2 is not an easy task, but it can be done with minimum expenditure given expertise and knowledge. We can help your team migrate their codebase as well as their skillset over to Angular 2 with a combination of technical solutions and training.
    </p>

  </Page>
)

export default Services;
