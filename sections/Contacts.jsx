'use client';

import { motion } from 'framer-motion';
import { ContactSteps, TitleText, TypingText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn, LogoVariants } from '../utils/motion';
import { startingFeatures } from '../constants';

const Contacts = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={LogoVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/headSolo.png"
          alt="logo"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Contact Me" />
        <TitleText title={<>Contact me through the following </>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <ContactSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Contacts;
