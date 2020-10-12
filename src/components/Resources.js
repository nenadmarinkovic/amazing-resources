import React, { useState, useEffect } from "react";
import accordionItems from "./AccordionItems";
import { Container, Flex } from "../styles/globalStyles";
import { motion, useAnimation } from "framer-motion";
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionContent,
  AccordionIcon,
} from "../styles/homeStyles";

import { useInView } from "react-intersection-observer";

const Resources = ({ onCursor }) => {
  const [expanded, setExpanded] = useState(0);
  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <Flex alignTop>
          <Services>
            <h3>Services</h3>
            {accordionItems.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Services>
          <About>
            <h2>
              Furrow is an integrated, full-service creative studio offering
              video production, creative development, and post-production
              services.
            </h2>
            <p>
              Everybody’s got a story. And we don’t stop until we’ve uncovered
              what makes yours worth telling. Whether it’s working directly with
              you, an agency partner, or putting the finishing touches on
              something special, we’re ready to dig in and get our hands
              dirty—are you?
            </p>
          </About>
        </Flex>
      </Container>
    </HomeAboutSection>
  );
};

const Accordion = ({ details, expanded, setExpanded, onCursor }) => {
  const isOpen = details.id === expanded;

  return (
    <>
      <AccordionHeader
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onMouseLeave={onCursor}
        style={{ color: isOpen ? "black" : "red" }}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
            style={{ background: isOpen ? "black" : "red" }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
            style={{ background: isOpen ? "black" : "red" }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result.name}</span>
        ))}
      </AccordionContent>
    </>
  );
};

export default Resources;
