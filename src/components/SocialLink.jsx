import React from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub ,faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialLink = () => {
  return( <>
  <motion.div variants={textVariant()} className="z-100">
        <h2 className={styles.sectionHeadText}>Connect With Me.</h2>
    </motion.div>
<div className="social-media ">
    <Link to="#">
   <FontAwesomeIcon icon={faLinkedin}  className="i xs:text-[15px]"/>
   </Link>
    <Link to="#">
   <FontAwesomeIcon icon={faGithub}  className="i xs:text-[15px]"/>
   </Link>
   <Link to="#">
      <FontAwesomeIcon icon={faTwitter} className="i xs:text-[15px]" />
      </Link>
      <Link to="#">
      <FontAwesomeIcon icon={faInstagram} className="i xs:text-[15px]" />
      </Link>
</div>
  </>
  );
};
export default SectionWrapper(SocialLink, "links");
