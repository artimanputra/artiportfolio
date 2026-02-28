import React from "react";
import Tilt from "react-parallax-tilt";
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
       I’m a full-stack software engineer who enjoys building end-to-end products that are scalable,
       reliable, and easy to use. I work across the stack with<strong> JavaScript,React.js, Node.Js, PostgreSQL, 
       Docker,</strong> and modern frontend frameworks to turn ideas into production-ready applications.       

      <br/> I’ve built real systems used by real users — from backend APIs and data models to clean 
      dashboards and integrations with external services. I care about <strong>code quality, performance, 
      and ownership</strong>,  and I’m comfortable taking vague problems and shipping solid solutions. 

      <br/> I’m always curious, always learning, and excited by fast-moving teams where impact matters. 
      <br/> <strong>Open to full-stack and backend opportunities. Let’s build something meaningful together 🚀</strong>
       
      </motion.p>
      <Link to="https://drive.google.com/file/d/1nB4yzRNAavaPcQyauuSYzKmlbA6Uy7x_/view?usp=sharing">
          <div className=" p-3 mt-5 font-medium text-[20px] text-white border-2 rounded-full border-[#4475e2] inline-block ">Download Resume</div>
        </Link>
      <div
        className={`mt-12 flex flex-col md:flex-row gap-10 items-center`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="w-full xl:w-1/2 flex justify-center"
        >
          <img
            src={arti}
            alt="profile"
             className="max-w-[70%] rounded-[20px]"
          />
        </motion.div>

        <Tilt  className="w-full xl:w-1/2">
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
             className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-tertiary rounded-[20px] p-8 grid grid-cols-2 gap-6">
              <div className="flex flex-row">
              <ul className="list-disc text-white space-y-4">
                <li className=" py-4"><strong className="text-[#ffffff]">Branch :</strong><span className="text-[#ffffff] font-sans"> Computer Science and Engineering</span></li>
                <li className="py-4"><strong className="text-[#ffffff]">Degree :</strong><span> B.Tech</span></li>
                <li className="py-4"><strong className="text-[#ffffff]">College :</strong><span> GCOEA</span></li>
                <li className="py-4"><strong className="text-[#ffffff]">CGPA :</strong><span> 8.34</span></li>
              </ul>
              </div>

              <div className="flex flex-row pr-2">
              <ul className="list-disc text-white space-y-4">
                <li className="py-4"><strong className="text-[#ffffff]">Graduation Year :</strong><span> 2024</span></li>
                <li className="py-4"><strong className="text-[#ffffff]">Email :</strong><span> aartimanputra20@gmail.com</span></li>
                <li className="py-4" ><strong className="text-[#ffffff]">Phone :</strong><span> +91-7028575552</span></li>
                <li className="py-4" ><strong className="text-[#ffffff]">City :</strong><span> Navi Mumbai  </span></li>
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

