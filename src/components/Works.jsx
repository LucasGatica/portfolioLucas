import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import {yt} from "../assets"
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { isMobile } from "react-device-detect";

const mobileFadeInVariant = {
  hidden: {},
  visible: {},
};
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  yt_video
}) => {

  const fadeInVariant = isMobile ? mobileFadeInVariant : fadeIn("up", "spring", index * 0.5, 0.75);

  return (
    <motion.div variants={fadeInVariant}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 150,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[390px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-fit rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-start m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
              
            </div>
              <div
              onClick={() => window.open(yt_video, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={yt}
                alt='demonstração'
                className='w-1/2 h-1/2 object-contain'
              />
              
            </div>
            
          </div>
          



        </div>

        <div className='mt-5 mb-10'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const fadeInVariant = isMobile ? mobileFadeInVariant : fadeIn("", "", 0.1, 1);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Meus trabalhos</p>
        <h2 className={`${styles.sectionHeadText}`}>Projetos.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeInVariant}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Alguns projetos que desenvolvi, sinta-se à vontade para explorar e conhecer mais sobre meu trabalho,
          e não hesite em entrar em contato caso tenha interesse em discutir oportunidades de colaboração ou simplesmente
          trocar ideias sobre tecnologia e desenvolvimento.
          Estou sempre aberto a novos desafios e aprendizados!
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
