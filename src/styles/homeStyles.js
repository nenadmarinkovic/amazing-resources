import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeAboutSection = styled(motion.div)`
  /* margin-bottom: 200px; */
`;
export const About = styled.div`
  width: 100%;
  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${(props) => props.theme.text};
  }
  p {
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-left: 124px;
    color: ${(props) => props.theme.text};
  }
`;
export const Services = styled.div`
  width: 40%;
`;

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: #ea281e;
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
  cursor: pointer;
  }
`;
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  cursor: pointer;
  span {
    width: 16px;
    height: 4px;
    background: #ea281e;
    transition: all 0.1s ease-in-out;
  }
`;

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  cursor: pointer;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: #ea281e;
    display: block;
    font-weight: 300;
  }
`;
