'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About me" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text center text-secondary-white"
      >
        I'm a recent
        <span className="font-extrabold text-white">
          {' '}
          computer science graduate{' '}
        </span>
        with experience in Java, JavaScript, HTML, CSS, and more. I'm eager to
        take my first steps in the industry, armed with a
        <span className="font-extrabold text-white"> strong foundation </span>
        in software development and a passion for innovation. Please explore my
        portfolio to see my
        <span className="font-extrabold text-white"> projects </span>
        and experiences. I'm open to discussing collaborations, opportunities,
        or simply sharing our love for technology.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="down-arrow"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
