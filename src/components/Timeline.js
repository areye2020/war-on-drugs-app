import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <section className="Timeline" id="timeline">
      <div className="container">
        <div className="heading text-center">
          <h4>Historical Timeline</h4>
          <h1>War on Drugs</h1>
        </div>

        <div className="timeline-container">
          <div className="timeline-event">
            <div className="timeline-event-title">
              December 1993: Pablo Escobar's Death
            </div>
            <div className="timeline-event-date">December 1993</div>
            <div className="timeline-event-description">
              Pablo Escobar, in hiding since mid-1992, is found by Colombian
              police using American technology that can recognize his voice on a
              cell phone call and estimate his location. He tries to flee but is
              killed.
            </div>
          </div>

          <div className="timeline-event">
            <div className="timeline-event-title">
              June 1971: Nixon's Declaration
            </div>
            <div className="timeline-event-date">June 1971</div>
            <div className="timeline-event-description">
              Nixon officially declares a "war on drugs," identifying drug
              abuse as "public enemy No. 1."
            </div>
          </div>

          <div className="timeline-event">
            <div className="timeline-event-title">
              July 1973: DEA Creation
            </div>
            <div className="timeline-event-date">July 1973</div>
            <div className="timeline-event-description">
              Nixon creates the Drug Enforcement Administration (DEA) to
              coordinate the efforts of all other agencies.
            </div>
          </div>

          <div className="timeline-event">
            <div className="timeline-event-title">
              2019: Purdue Pharma's Bankruptcy
            </div>
            <div className="timeline-event-date">2019</div>
            <div className="timeline-event-description">
              Purdue Pharma, the maker of OxyContin, files for bankruptcy in
              2019 amidst legal actions related to the opioid crisis.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
