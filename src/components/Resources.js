import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import accordionItems from "../../src/items"
import { Container, Flex } from "../styles/globalStyles"
import { motion, useAnimation } from "framer-motion"
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionContent,
  AccordionIcon
} from "../styles/homeStyles"

import { useInView } from "react-intersection-observer"

const Resources = () => {
  const [expanded, setExpanded] = useState(0)
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px"
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
        },
        hidden: { opacity: 0, y: 72 }
      }}
    >
      <Container>
        <Flex alignTop>
          <Services>
            
            {accordionItems.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </Services>
         
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded

  return (
    <>
      <AccordionHeader
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
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
          <span>
            <Link to={result.url} key={index}>{result.name}</Link>
            <div style={{color: "black", marginLeft: "30px"}}>
              <p>
              {result.descriptionTop}
                </p>
            </div>
          </span>
        ))}
      </AccordionContent>
    </>
  )
}

export default Resources
