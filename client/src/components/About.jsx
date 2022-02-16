import React from "react";
import "../assets/about.css"
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

function About() {

  /* Set up popovers, which will be triggered with each button in Return() */
  /* HOW IT WORKS */
  const howitworksPopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">How It Works</Popover.Header>
      <Popover.Body>
        On the Block, our Ethereum decentralized application, allows users to easily interact with a smart contract to set up timely, recurring monthly payments. By utilizing blockchain technology, specifically an Ethereum-based application, we are alleviating the tedious and complicated process of paying rent to a landlord.
      </Popover.Body>
    </Popover>
  );
  /* BENEFITS */
  const benefitsPopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Benefits</Popover.Header>
      <Popover.Body>
        1. Autonomy<br></br>
        2. Cost-Effectiveness<br></br>
        3. Transparency<br></br>
        4. Visibility<br></br>
        5. Efficiency and Performance<br></br>
        6. Accuracy<br></br>
        7. Time Savings<br></br>
        8. Security<br></br>
        9. Fairness<br></br>
      </Popover.Body>
    </Popover>
  );
  /* FEATURES */
  const featuresPopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Features</Popover.Header>
      <Popover.Body>
        1. Start New Rental Contracts<br></br>
        2. Check Existing Rental Contracts<br></br>
        3. Get Easy Notifications and Alerts<br></br>
        4. Set Up Timely Recurring Payments<br></br>
        5. Terminate Existing Contracts<br></br>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="home">
      <div className="container">
        <br></br><br></br>
        <h1 className="font-weight-light">About ON THE BLOCK</h1>
        <div className="row align-items-top my-5">
          <div className="col-lg-4">
            <Card className="about-cards" style={{ width: '18rem', height: '100' }}>
              <Card.Body>
                <Card.Title><FontAwesomeIcon icon={faQuestionCircle}/> How It Works</Card.Title>
                <Card.Text>
                  <b>ON THE BLOCK</b> allows users to easily set up rental payments at the touch of a button using blockchain technology.
                </Card.Text>
                <br></br><br></br>
                <OverlayTrigger trigger="click" placement="bottom" overlay={howitworksPopover}>
                  <Button className="about-buttons">Learn How It Works</Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="about-cards" style={{ width: '18rem', height: '100'}}>
              <Card.Body>
                <Card.Title><FontAwesomeIcon icon={faDollarSign}/> Benefits</Card.Title>
                <Card.Text>
                  Blockchain technology offers numerous benefits for rental contracts.
                </Card.Text>
                <br></br><br></br><br></br>
                <OverlayTrigger trigger="click" placement="bottom" overlay={benefitsPopover}>
                  <Button className="about-buttons">View Our Benefits</Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="about-cards" style={{ width: '18rem', height: '100' }}>
              <Card.Body>
                <Card.Title><FontAwesomeIcon icon={faStar}/> Features</Card.Title>
                <Card.Text>
                  <b>ON THE BLOCK</b> offers numerous features to easily create and terminate rental contracts.<br></br>
                  Plus, you'll get helpful alerts when your contracts are ready!
                </Card.Text>
                <br></br>
                <OverlayTrigger trigger="click" placement="bottom" overlay={featuresPopover}>
                  <Button className="about-buttons">See Our Features</Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;