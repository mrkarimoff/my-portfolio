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
  <SkillIcon
    Icon={FaReact}
    key={'React'}
    title={'React'}
    hoverColor={'#61DBFB'}
  />,
  <SkillIcon
    Icon={SiNextdotjs}
    key={'NextJS'}
    title={'NextJS'}
    hoverColor={'#000'}
  />,
  <SkillIcon
    Icon={SiRedux}
    key={'Redux & Toolkit'}
    title={'Redux & Toolkit'}
    hoverColor={'#7749BD'}
  />,
  <SkillIcon
    Icon={SiReduxsaga}
    key={'Redux Saga'}
    title={'Redux Saga'}
    hoverColor={'#89D96D'}
  />,
  <SkillIcon
    Icon={SiJavascript}
    key={'JavaScript'}
    title={'JavaScript'}
    hoverColor={'#F7E018'}
  />,
  <SkillIcon
    Icon={SiTypescript}
    key={'TypeScript'}
    title={'TypeScript'}
    hoverColor={'#2D79C7'}
  />,
  <SkillIcon
    Icon={FaHtml5}
    key={'HTML'}
    title={'HTML'}
    hoverColor={'#E44D25'}
  />,
  <SkillIcon
    Icon={SiCsswizardry}
    key={'CSS'}
    title={'CSS'}
    hoverColor={'#264DE4'}
  />,
  <SkillIcon
    Icon={SiTailwindcss}
    key={'Tailwind CSS'}
    title={'Tailwind CSS'}
    hoverColor={'#38BDF8'}
  />,
  <SkillIcon
    Icon={FaSass}
    key={'SASS'}
    title={'SASS'}
    hoverColor={'#CD669A'}
  />,
  <SkillIcon
    Icon={TbBrandFramerMotion}
    key={'Framer motion'}
    title={'Framer motion'}
    hoverColor={'#E22CA2'}
  />,
  <SkillIcon
    Icon={SiAntdesign}
    key={'Ant Design'}
    title={'Ant Design'}
    hoverColor={'#F74F5E'}
  />,
  <SkillIcon
    Icon={SiMui}
    key={'Material UI'}
    title={'Material UI'}
    hoverColor={'#007FFF'}
  />,
  <SkillIcon
    Icon={SiChakraui}
    key={'Chakra UI'}
    title={'Chakra UI'}
    hoverColor={'#6CCACF'}
  />,
  <SkillIcon
    Icon={SiBootstrap}
    key={'Bootstrap'}
    title={'Bootstrap'}
    hoverColor={'#8A12FC'}
  />,
  <SkillIcon
    Icon={SiFirebase}
    key={'Firebase'}
    title={'Firebase'}
    hoverColor={'#FFCB2B'}
  />,
  <SkillIcon Icon={BsGit} key={'Git'} title={'Git'} hoverColor={'#F05033'} />,
  <SkillIcon
    Icon={BsGithub}
    key={'Github'}
    title={'Github'}
    hoverColor={'#000'}
  />,
];

export const backendIcons = [
  <SkillIcon
    Icon={FaNode}
    key={'NodeJS'}
    title={'NodeJS'}
    hoverColor={'#67BB4A'}
  />,
  <SkillIcon
    Icon={SiNextdotjs}
    key={'NextJS'}
    title={'NextJS'}
    hoverColor={'#000'}
  />,
  <SkillIcon
    Icon={SiExpress}
    key={'ExpressJS'}
    title={'ExpressJS'}
    hoverColor={'#828282'}
  />,
  <SkillIcon
    Icon={SiMongodb}
    key={'MongoDB'}
    title={'MongoDB'}
    hoverColor={'#46A438'}
  />,
  <SkillIcon
    Icon={SiJavascript}
    key={'JavaScript'}
    title={'JavaScript'}
    hoverColor={'#F7E018'}
  />,
  <SkillIcon
    Icon={SiTypescript}
    key={'TypeScript'}
    title={'TypeScript'}
    hoverColor={'#2D79C7'}
  />,
  <SkillIcon
    Icon={SiPrisma}
    key={'Prisma'}
    title={'Prisma'}
    hoverColor={'#123A50'}
  />,
  <SkillIcon
    Icon={SiSocketdotio}
    key={'SocketIo'}
    title={'SocketIo'}
    hoverColor={'#000'}
  />,
  <SkillIcon
    Icon={SiMysql}
    key={'MySQL'}
    title={'MySQL'}
    hoverColor={'#4479A1'}
  />,
  <SkillIcon
    Icon={SiPostgresql}
    key={'PostgreSQL'}
    title={'PostgreSQL'}
    hoverColor={'#2F6792'}
  />,
  <SkillIcon
    Icon={IoLogoVercel}
    key={'Vercel'}
    title={'Vercel'}
    hoverColor={'#000'}
  />,
  <SkillIcon
    Icon={SiDocker}
    key={'Docker'}
    title={'Docker'}
    hoverColor={'#2597EE'}
  />,
];
