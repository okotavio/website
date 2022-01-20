import React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion'
  import AccordionTitle from "../components/accordiontitle"

function WorkAccordion(props) {

  return (
      <AccordionItem className="accordion-item">
        <AccordionItemHeading>
          <AccordionItemButton>
            <AccordionTitle title={props.title} subtitle={props.subtitle}/>
          </AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
        {props.children}
        </AccordionItemPanel>
      </AccordionItem>
  );
}

export default WorkAccordion