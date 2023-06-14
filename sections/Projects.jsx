'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard, TitleText, TypingText } from '../components';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { projectExplore } from '../constants';
import Proj from './Proj';

const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Projects" textStyles="text-center" />
        <TitleText
          title={<>Take a closer look<br className="md:block hidden" /> at a project!</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projectExplore.map((proj, index) => (
            <ProjectCard
              key={proj.id}
              {...proj}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
