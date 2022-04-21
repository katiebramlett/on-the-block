/*
import React from "react";
import "../assets/faq.css"

import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function FAQ() {

    // WEB SCRAPING
    const fetch = require("node-fetch");
    const cheerio = require("cheerio");
    const fs = require("fs");
    // function to get the raw data
    const getRawData = (URL) => {
        return fetch(URL)
            .then((response) => response.text())
            .then((data) => {
                return data;
            });
    };
    // URL for data
    const URL = "https://example.com/";
    // start of the program
    const scrapeData = async () => {
    const rawData = await getRawData(URL);
    // parsing the data
    const parsedData = cheerio.load(rawData);
        console.log(parsedData);
        // write code to extract the data
        // here
        // ...
        // ...
    };
    // invoking the main function
    scrapeData();
    */
    /*
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
                            Add your wallet on the Settings page. You can find your wallet ID in your MetaMask account.
                            </Accordion.Body>
                        </Accordion.Item>
                        <br></br>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="faq-accordion-header">2. What is the current ETH to USD conversion? <FontAwesomeIcon icon={faAngleDown}/></Accordion.Header>
                            <Accordion.Body className="faq-accordion-body">
                            Visit here to see the current ETH to USD conversion.
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
*/