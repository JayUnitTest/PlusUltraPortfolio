'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex flex-col sm:flex-row justify-center items-center relative z-10">
        <motion.div
          variants={textVariant(1.1)}
          className="flex-shrink-0 rounded-full overflow-hidden w-48 h-48 sm:w-64 sm:h-64"
        >
          <motion.img
            src="/itsme.jpeg"
            alt="selfie"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="flex flex-col sm:ml-8 mt-6 sm:mt-0">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            ﹛Hi! I'm Jay﹜
          </motion.h1>
          <motion.p
            variants={textVariant(1.2)}
            className="text-white text-sm flex justify-center mt-8"
          >
            Graduate Developer
          </motion.p>
        </div>
      </div>
      <motion.div
        variants={textVariant(1.2)}
        className="flex justify-center mt-8"
      >
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
