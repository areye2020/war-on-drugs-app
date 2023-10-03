import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="splash">
        <h1>War on Drugs</h1>
        <p>An Interactive Web Application</p>
        <a href="#statistics">Scroll down to see statistics</a>
      </div>

      <div id="statistics" className="statistics">
        <div className="statistic">
          <h2>Understanding the Opioid Epidemic</h2>
          <p>
            The opioid crisis has had a profound impact on our society. It began with the widespread use of heroin, but the landscape shifted dramatically when prescription opioids, classified as Schedule II narcotics, became readily available.
          </p>
          <p>
            Over the years, the opioid epidemic has witnessed a tragic increase in overdose rates, resulting in a surge in fatalities. What is even more concerning is the decreasing age at which individuals start using these drugs.
          </p>
          <p>
            The statistics paint a grim picture: a significant rise in overdose cases, a spike in drug-related deaths, and a disturbing trend of young people experimenting with opioids at an earlier age.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
