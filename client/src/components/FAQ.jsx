import React from "react";
import "../assets/faq.css"

import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function FAQ() {
    return (
        <div className="faq">
            <div className="container">
                <br></br><br></br>
                <h1><b>FAQ</b></h1>
                <div className="row align-items-top my-5">
                <div className="col-lg-8">
                    <Accordion className="faq-accordion" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="faq-accordion-header">1. Where do I get my wallet ID? <FontAwesomeIcon icon={faAngleDown}/></Accordion.Header>
                            <Accordion.Body className="faq-accordion-body">
                            ANSWER TO QUESTION 1
                            </Accordion.Body>
                        </Accordion.Item>
                        <br></br>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="faq-accordion-header">2. What is the current ETH to USD conversion? <FontAwesomeIcon icon={faAngleDown}/></Accordion.Header>
                            <Accordion.Body className="faq-accordion-body">
                            ANSWER TO QUESTION 2
                            </Accordion.Body>
                        </Accordion.Item>
                        <br></br>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="faq-accordion-header">3. QUESTION 3 <FontAwesomeIcon icon={faAngleDown}/></Accordion.Header>
                            <Accordion.Body className="faq-accordion-body">
                            ANSWER TO QUESTION 3
                            </Accordion.Body>
                        </Accordion.Item>
                        <br></br>
                    </Accordion>
                </div>
                </div>
            </div>
        </div>
    );
}
  
export default FAQ;
  