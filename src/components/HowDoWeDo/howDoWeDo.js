import React from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './howDoWeDo.scss';

AOS.init();

function HowDoWeDo() {
  return (
    <div className="howDoWeDo">
      <h1>How does this work?</h1>
      <div data-aos="filp-down" className="howDivs">
        <h2>Plan</h2>
        <p>We sit you take details of what you want and when you want</p>
      </div>
      <div data-aos="filp-down" className="howDivs">
        <h2>Design</h2>
        <p>We then sit with a deisgner and come back
          with super neat design which we think will go with what you
          want and with whatyou need. And agree on a deisgn with little tweaks
        if needed</p>
      </div>
      <div data-aos="flip-down" className="howDivs">
        <h2>Develop</h2>
        <p>We develop and bring the designs to life and set you up with a mailbox
        so that you can control your RSVPs.</p>
      </div>
      <div data-aos="flip-down" className="howDivs">
        <h2>Deploy</h2>
        <p>We deploy to a domain that will be easy to share for you to the people
        you want to invite.</p>
      </div>
      <div data-aos="flip-down" className="howDivs">
        <h2>Recheck</h2>
        <p>You check if everything is in place as per agreements</p>
      </div>
      <div data-aos="flip-down" className="howDivs">
        <h2>Payment</h2>
        <p>It's payday for us once we have everything in place and tick the final
        box.</p>
      </div>
    </div>
  )
}

export default HowDoWeDo;
