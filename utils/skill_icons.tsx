import SkillIcon from '~/components/SkillIcon';
import { BsGit, BsGithub } from 'react-icons/bs';
import { IoLogoVercel } from 'react-icons/io5';
import { FaHtml5, FaNode, FaReact, FaSass } from 'react-icons/fa';
import {
  SiAntdesign,
  SiBootstrap,
  SiChakraui,
  SiCsswizardry,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiReduxsaga,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

export const frontendIcons = [
  <SkillIcon Icon={FaReact} title={'React'} hoverColor={'#61DBFB'} />,
  <SkillIcon Icon={SiNextdotjs} title={'NextJS'} hoverColor={'#000'} />,
  <SkillIcon Icon={SiRedux} title={'Redux & Toolkit'} hoverColor={'#7749BD'} />,
  <SkillIcon Icon={SiReduxsaga} title={'Redux Saga'} hoverColor={'#89D96D'} />,
  <SkillIcon Icon={SiJavascript} title={'JavaScript'} hoverColor={'#F7E018'} />,
  <SkillIcon Icon={SiTypescript} title={'TypeScript'} hoverColor={'#2D79C7'} />,
  <SkillIcon Icon={FaHtml5} title={'HTML'} hoverColor={'#E44D25'} />,
  <SkillIcon Icon={SiCsswizardry} title={'CSS'} hoverColor={'#264DE4'} />,
  <SkillIcon
    Icon={SiTailwindcss}
    title={'Tailwind CSS'}
    hoverColor={'#38BDF8'}
  />,
  <SkillIcon Icon={FaSass} title={'SASS'} hoverColor={'#CD669A'} />,
  <SkillIcon
    Icon={TbBrandFramerMotion}
    title={'Framer motion'}
    hoverColor={'#E22CA2'}
  />,
  <SkillIcon Icon={SiAntdesign} title={'Ant Design'} hoverColor={'#F74F5E'} />,
  <SkillIcon Icon={SiMui} title={'Material UI'} hoverColor={'#007FFF'} />,
  <SkillIcon Icon={SiChakraui} title={'Chakra UI'} hoverColor={'#6CCACF'} />,
  <SkillIcon Icon={SiBootstrap} title={'Bootstrap'} hoverColor={'#8A12FC'} />,
  <SkillIcon Icon={SiFirebase} title={'Firebase'} hoverColor={'#FFCB2B'} />,
  <SkillIcon Icon={BsGit} title={'Git'} hoverColor={'#F05033'} />,
  <SkillIcon Icon={BsGithub} title={'Github'} hoverColor={'#000'} />,
];

export const backendIcons = [
  <SkillIcon Icon={FaNode} title={'NodeJS'} hoverColor={'#67BB4A'} />,
  <SkillIcon Icon={SiNextdotjs} title={'NextJS'} hoverColor={'#000'} />,
  <SkillIcon Icon={SiExpress} title={'ExpressJS'} hoverColor={'#828282'} />,
  <SkillIcon Icon={SiMongodb} title={'MongoDB'} hoverColor={'#46A438'} />,
  <SkillIcon Icon={SiJavascript} title={'JavaScript'} hoverColor={'#F7E018'} />,
  <SkillIcon Icon={SiTypescript} title={'TypeScript'} hoverColor={'#2D79C7'} />,
  <SkillIcon Icon={SiPrisma} title={'Prisma'} hoverColor={'#123A50'} />,
  <SkillIcon Icon={SiSocketdotio} title={'SocketIo'} hoverColor={'#000'} />,
  <SkillIcon Icon={SiMysql} title={'MySQL'} hoverColor={'#4479A1'} />,
  <SkillIcon Icon={SiPostgresql} title={'PostgreSQL'} hoverColor={'#2F6792'} />,
  <SkillIcon Icon={IoLogoVercel} title={'Vercel'} hoverColor={'#000'} />,
  <SkillIcon Icon={SiDocker} title={'Docker'} hoverColor={'#2597EE'} />,
];
