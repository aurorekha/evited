import React, { Component } from 'react';
import './whatWeDo.scss';

class WhatWeDo extends React.Component{
  render() {
    return (
      <div className="whatWeDo">
        <h1>What do we do?</h1>
        <p>We make awesome e-invites that can cater for all of your events.</p>
        <p>Sure, there are many apps that you can get on your phone or
          you can do it online but how can you personalize the invite for you event?</p>
        <p>Previously physical cards were given a lot of importance to and they used to cost a lot.<br /> Even now people go on
        to spend a lot on these cards but no more. We can do this while reducing carbon footprint and having fun!</p>
      </div>
    )
  }
}

export default WhatWeDo;
