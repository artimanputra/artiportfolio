import React from "react";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import arti from "../assets/arti.jpg";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Java Programming and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with teams to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. 
        <br/>
        I am a Computer Science student looking for opportunities in Web Development and Software Engineering.
        <br/>
        Let's work together to bring your ideas to life!
       
      </motion.p>
      <Link to="https://drive.google.com/file/d/1m_FjwepMZYuwPDA1uzY3CtjrQ5e0o_cH/view?usp=sharing">
          <div className=" p-3 mt-5 font-medium text-[20px] border-2 rounded-full border-[#4475e2] inline-block ">Download Resume</div>
        </Link>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] xs:flex xs:items-center xs:justify-center py-4  md:flex md:items-center md:justify-center"
        >
          <img
            src={arti}
            alt="profile"
            className="max-w-[82%] rounded-[20px] xs:max-w-[70%] md:max-w[50%]"
          />
        </motion.div>
        <Tilt className="xs:w-[500px]  w-[5%] xs:flex xs:items-center xs:justify-center md:flex md:items-center md:justify-center">
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[312px] h-[282px] xs:h-[312px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card mt-5"
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[292px] w-full flex justify-evenly flex-col pb-10 grid grid-cols-2 gap-4"
            >
              <div className="flex flex-row">
              <ul className="list-disc">
                <li className=" py-4"><strong className="text-[#ffffff]">Branch :</strong><span className="text-[#ffffff] font-sans"> Computer Science and Engineering</span></li>
                <li className="py-4"><strong className="text-[#ffffff]">Degree :</strong><span> B.Tech</span></li>
                <li className="py-4"><strong className="text-[#ffffff]">College :</strong><span> GCOEA</span></li>
                <li className="py-4"><strong className="text-[#ffffff]">CGPA :</strong><span> 8.21 (SEM 5th)</span></li>
              </ul>
              </div>

              <div className="flex flex-row pr-2">
              <ul className="list-disc">
                <li className="py-4"><strong className="text-[#ffffff]">Graduation Year :</strong><span> 2024</span></li>
                <li className="py-4"><strong className="text-[#ffffff]">Email :</strong><span> aartimanputra20@gmail.com</span></li>
                <li className="py-4" ><strong className="text-[#ffffff]">Phone :</strong><span> +91-7028575552</span></li>
                <li className="py-4" ><strong className="text-[#ffffff]">City :</strong><span> Amravati</span></li>
              </ul>
              </div>


            </div>
          </motion.div>
        </Tilt>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

