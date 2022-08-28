import { Link } from '@tanstack/react-location';
import Routes from 'constants/routes';
import slanx from 'assets/img/slanx.jpg';
import nikitaKakurin from 'assets/img/nikitaKakurin.jpg';
import thelastandrew from 'assets/img/thelastandrew.jpg';
import styles from 'styles/Home.module.css';

const About = () => (
  <section className={`bg-about-bg ${styles.section} bg-center bg-cover bg-no-repeat`}>
    <h2 className='text-7xl mx-auto text-center font-bold'>
      <span className='text-yellow-700'>R</span>
      <span className='text-lime-400'>S</span>
      <span> </span>
      <span className='text-orange-700'>L</span>
      <span className='text-cyan-400'>a</span>
      <span className='text-lime-400'>n</span>
      <span className='text-lime-700'>g</span>
    </h2>
    <p className='text-center text-xl w-[70%] max-w-[500px] px-5 py-2 rounded-full bg-slate-300/75'>
      Now learning English is fun: memorize words, practice playing, analyze your achievements. And
      remember: &quot;it&apos;s never too late to learn!&quot;
    </p>
  </section>
);

const LearnWords = () => (
  <section className={`bg-wordbook-bg ${styles.section} bg-right bg-cover bg-no-repeat`}>
    <h2 className='text-7xl mx-auto text-center font-bold'>
      <span className='text-yellow-700'>L</span>
      <span className='text-lime-600'>e</span>
      <span className='text-orange-700'>a</span>
      <span className='text-cyan-400'>r</span>
      <span className='text-lime-600'>n</span>
      <span> </span>
      <span className='text-orange-700'>t</span>
      <span className='text-cyan-400'>h</span>
      <span className='text-lime-700'>e</span>
      <span> </span>
      <span className='text-emerald-700'>w</span>
      <span className='text-lime-600'>o</span>
      <span className='text-orange-700'>r</span>
      <span className='text-cyan-400'>d</span>
      <span className='text-yellow-700'>s</span>
    </h2>
    <Link
      to={Routes.WORDBOOK}
      className='bg-wordbook-img w-[400px] h-[300px] bg-no-repeat bg-cover bg-center rounded-3xl cursor-pointer transition-all duration-500 hover:scale-[1.15] hover:border-8 border-orange-500/95'
    >
      <h4 className='text-4xl mx-auto text-center font-bold py-5'>
        <span className='text-yellow-700'>W</span>
        <span className='text-lime-500'>o</span>
        <span className='text-orange-700'>r</span>
        <span className='text-cyan-400'>d</span>
        <span className='text-lime-500'>b</span>
        <span className='text-orange-700'>o</span>
        <span className='text-cyan-400'>o</span>
        <span className='text-lime-700'>k</span>
      </h4>
    </Link>
  </section>
);

const PlayGames = () => (
  <section className={`bg-game-bg ${styles.section} bg-right bg-cover bg-no-repeat`}>
    <h2 className='text-7xl mx-auto text-center font-bold w-full'>
      <span className='text-yellow-700'>P</span>
      <span className='text-lime-600'>l</span>
      <span className='text-orange-700'>a</span>
      <span className='text-cyan-400'>y</span>
      <span> </span>
      <span className='text-emerald-700'>g</span>
      <span className='text-lime-600'>a</span>
      <span className='text-orange-700'>m</span>
      <span className='text-cyan-400'>e</span>
      <span className='text-yellow-700'>s</span>
    </h2>
    <div className='flex justify-center items-center flex-wrap gap-[50px]'>
      <Link
        to={Routes.SPRINT}
        className='bg-sprint-img w-[400px] h-[300px] bg-no-repeat bg-cover bg-center rounded-3xl cursor-pointer transition-all duration-500 hover:scale-[1.15] hover:border-8  border-orange-500/95'
      >
        <h4 className='text-4xl mx-auto text-center font-bold py-5'>
          <span className='text-yellow-700'>S</span>
          <span className='text-lime-500'>p</span>
          <span className='text-orange-700'>r</span>
          <span className='text-cyan-500'>i</span>
          <span className='text-lime-500'>n</span>
          <span className='text-orange-700'>t</span>
        </h4>
      </Link>

      <Link
        to={Routes.CHALLANGE}
        className='bg-challenge-img w-[400px] h-[300px] bg-no-repeat bg-cover bg-center rounded-3xl cursor-pointer transition-all duration-500 hover:scale-[1.15] hover:border-8  border-orange-500/95'
      >
        <h4 className='text-4xl mx-auto text-center font-bold py-5'>
          <span className='text-yellow-700'>A</span>
          <span className='text-lime-500'>u</span>
          <span className='text-orange-700'>d</span>
          <span className='text-cyan-500'>i</span>
          <span className='text-lime-500'>o</span>
          <span> </span>
          <span className='text-orange-700'>c</span>
          <span className='text-cyan-500'>h</span>
          <span className='text-lime-500'>a</span>
          <span className='text-yellow-700'>l</span>
          <span className='text-cyan-500'>l</span>
          <span className='text-lime-700'>e</span>
          <span className='text-cyan-500'>n</span>
          <span className='text-lime-700'>g</span>
          <span className='text-yellow-700'>e</span>
        </h4>
      </Link>
    </div>
  </section>
);
const Statistics = () => (
  <section className={`bg-statistics-bg ${styles.section} bg-right bg-cover bg-no-repeat`}>
    <h2 className='text-7xl mx-auto text-center font-bold'>
      <span className='text-yellow-700'>A</span>
      <span className='text-lime-700'>n</span>
      <span className='text-orange-700'>a</span>
      <span className='text-cyan-700'>l</span>
      <span className='text-lime-700'>i</span>
      <span className='text-orange-700'>z</span>
      <span className='text-cyan-700'>e</span>
    </h2>
    <Link
      to={Routes.STATICTICS}
      className='bg-statistics-img w-[400px] h-[300px] bg-no-repeat bg-cover bg-center rounded-3xl cursor-pointer transition-all duration-500 hover:scale-[1.15] hover:border-8 border-orange-500/95'
    >
      <h4 className='text-4xl mx-auto text-center font-bold'>
        <span className='text-yellow-700'>S</span>
        <span className='text-lime-700'>t</span>
        <span className='text-orange-700'>a</span>
        <span className='text-cyan-700'>t</span>
        <span className='text-lime-700'>i</span>
        <span className='text-orange-700'>s</span>
        <span className='text-cyan-700'>t</span>
        <span className='text-lime-700'>i</span>
        <span className='text-yellow-700'>c</span>
        <span className='text-lime-700'>s</span>
      </h4>
    </Link>
  </section>
);

const TeamMembers = [
  {
    link: 'https://github.com/thelastandrew',
    image: thelastandrew,
    name: 'Andrey Fedotov',
    role: 'developer',
    bold: false,
    contribution:
      'add autogenerated list of contributors to readme, modal authorization and registration window without functionality, fix tests, wordbook page',
  },
  {
    link: 'https://github.com/Slanx',
    image: slanx,
    name: 'Andrew Rafalsky',
    role: 'Team Lead',
    bold: true,
    contribution: 'fix cra, static code analysis, setup backend, routing, API connection feature',
  },
  {
    link: 'https://github.com/NikitaKakurin',
    image: nikitaKakurin,
    name: 'Nikita Kakurin',
    role: 'developer',
    bold: false,
    contribution: 'page components, fix styles, home page, main menu',
  },
];
interface ITeamItem {
  link: string;
  image: string;
  name: string;
  role: string;
  bold: boolean;
  contribution: string;
}
interface ITeamItemProps {
  item: ITeamItem;
}
const TeamItem = ({ item }: ITeamItemProps) => {
  const { link, image, name, role, bold, contribution } = item;
  return (
    <a
      href={link}
      className='group rounded-2xl transition-all shadow hover:shadow-lg hover:shadow-blue-500/50 duration-500'
    >
      <figure className='@apply w-[250px] my-border-image my-border-image border-5 bg-slate-400 rounded-xl relative'>
        <img src={image} alt={name} className='rounded-t-xl' />
        <figcaption className='flex flex-col justify-center items-center flex-wrap px-2'>
          <h3 className='text-xl'>{name}</h3>
          <span className={bold ? 'font-bold' : ''}>{role}</span>
          <span className='text-lg font-semibold text-center px-3 flex justify-center items-center absolute bottom-0 left-0 w-full h-0 overflow-hidden transition-all duration-500 group-hover:h-full bg-slate-400/90 rounded-xl'>
            {contribution}
          </span>
        </figcaption>
      </figure>
    </a>
  );
};

const Team = () => (
  <section className={`bg-zinc-200 ${styles.section}`}>
    <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-500 to-slate-900 text-7xl mx-auto text-center font-bold'>
      Our Team
    </h2>
    <div className='flex justify-center items-center flex-wrap gap-[40px] '>
      {TeamMembers.map((item) => (
        <TeamItem item={item} />
      ))}
    </div>
  </section>
);

const Home = () => (
  <div className={styles.parent}>
    <About />
    <LearnWords />
    <PlayGames />
    <Statistics />
    <Team />
  </div>
);

export default Home;
