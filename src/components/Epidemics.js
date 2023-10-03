import React from 'react';
import './Epidemics.css';

const Epidemics = () => {
  return (
    <div className="epidemics-container">
      <div className="epidemic-card">
        <img src="opioid-image.jpg" alt="Opioid Epidemic" />
        <h2>Opioid Epidemic</h2>
        <p>
          The opioid epidemic has led to a significant increase in opioid-related deaths and addiction cases. It affects individuals of all ages and backgrounds.
        </p>
        <div className="epidemic-stats">
          <div className="stat">
            <span>Overdose Deaths:</span> 70,000+
          </div>
          <div className="stat">
            <span>Addiction Cases:</span> 2 million+
          </div>
        </div>
      </div>

      <div className="epidemic-card">
        <img src="crack-cocaine-image.jpg" alt="Crack Cocaine Epidemic" />
        <h2>Crack Cocaine Epidemic</h2>
        <p>
          The crack cocaine epidemic had a devastating impact on communities in the 1980s. It led to a surge in violence and addiction rates.
        </p>
        <div className="epidemic-stats">
          <div className="stat">
            <span>Violence Incidents:</span> High
          </div>
          <div className="stat">
            <span>Addiction Cases:</span> Thousands
          </div>
        </div>
      </div>

      <div className="epidemic-card">
        <img src="methamphetamine-image.jpg" alt="Methamphetamine Epidemic" />
        <h2>Methamphetamine Epidemic</h2>
        <p>
          Methamphetamine abuse has been on the rise in recent years, leading to severe health consequences and social problems.
        </p>
        <div className="epidemic-stats">
          <div className="stat">
            <span>Health Issues:</span> Numerous
          </div>
          <div className="stat">
            <span>Emergency Room Visits:</span> 100,000+
          </div>
        </div>
      </div>
    </div>
  );
};

export default Epidemics;
