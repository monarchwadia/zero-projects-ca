import {Link} from 'react-router-dom'
import React from 'react';
import Page from '../components/Page.jsx';

const Services = () => (
  <Page>
    <div className="mentoring-page">
      <h2>We help companies get better at delivering software</h2>

      <p>For our development services, <Link to="/services">Click Here</Link>.</p>

      <p>Using a combination of <b>technical guidance, architectural mentorship, and process improvement</b>, we can help your tech team attain an incredible speed of delivery and a substanially improved ROI per development dollar spent, while minimizing bugs to near-negligible levels.</p>

      <p>As Canada's tech scene flourishes, too many of our amazing software-based companies undergo unnecessary challenges... and far, <i>far</i> too many fail because of these challenges. </p>

      <p>As a result, we often hear the same complaints echoed by completely unrelated tech teams all the time during our work:</p>

      <ul>
        <li>"We deliver changes too slowly."</li>
        <li>"We create bugs too often."</li>
        <li>"We miss deadlines all the time."</li>
        <li>"Our competition delivers much faster than us."</li>
        <li>"Bug fixes take too long."</li>
        <li>"Very simple changes take too long."</li>
        <li>"UI changes take too long."</li>
        <li>"Our product is unreliable and fails unpredictably."</li>
        <li>"Complex changes are too expensive, or impossible."</li>
        <li>"Bug fixes take up big chunks of development effort."</li>
      </ul>

      <p>More often than not, these companies have terrific leadership on both the business and technical side. Business restraints and requirements are, unfortunately, usually the driver of these shortcomings, and the company almost always recognizes that, but doesn't see a way out.</p>

      <p>That's usually where we come in.</p>

      <p><b>The good news is that all of these problems are solvable, and are probably solvable within your budget.</b></p>

      <p>We see these symptoms occur in early stage start-ups just as often as they occur in large corporations. While the symptoms lead to large expenses and revenue loss, the solutions can be relatively affordable to implement compared to the status quo.</p>

    </div>
  </Page>
)

export default Services;
