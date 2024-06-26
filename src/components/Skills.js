'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { skillsData } from '../../lib/data';
import {motion} from 'framer-motion';
import { useSectionInView } from '../../lib/hooks';

const eachSkillAnimationVariants = {
    initial: {
        opacity: 0,
        y:100
    },
    animate: (index) => {
        return {
            opacity: 1,
            y:0,
            transition: {
                delay: 0.05 * index
            }
        }
    }
}

function Skills() {

    const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} id='skills' className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        
        <SectionHeading>My skills</SectionHeading>

        <ul className='flex flex-wrap justify-center gap-2 text-lg '>
            {skillsData.map((skill, index)=> (
                <motion.li key={index} className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80' variants={eachSkillAnimationVariants} initial="initial" whileInView="animate" viewport={{once: true}} custom={index}>{ skill }</motion.li>
            ))}
        </ul>
    </section>
  )
}

export default Skills