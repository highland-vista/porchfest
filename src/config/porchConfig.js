import porch1 from '../img/1.svg';
import porch2 from '../img/2.svg';
import porch3 from '../img/3.svg';
import porch4 from '../img/4.svg';
import porch5 from '../img/5.svg';

const porchDetails = [
  {
    id: 1,
    name: '5257 E 7th St.',
    position: { top: '31%', left: '29%' },
    image: porch1,
    alt: 'Porch 1 info',
    to: '/porches/1',
    bands: [
      {
        name: 'The Billy Joel Band',
        time: '2-2:20pm',
        link: '',
        desc: 'Bill and Joel will regale you with Post Apocalyptic Neo Folk Pop Rock that will transport you to Vemuramic heights..',
      },
      {
        name: 'Andy Flagg',
        time: '2:25-2:45pm',
        link: '',
        desc: `Solo classical guitar music, primarily by modern composers from North and South America.`,
      },
      {
        name: 'Niko Green',
        time: '2:50-3:10pm',
        link: '',
        desc: `Niko Green's rock 'n roll drum debut.`,
      },
      {
        name: 'Charlie Cormode',
        time: '3:15-3:25pm',
        link: '',
        desc: 'Bagpipe.',
      },
    ],
  },
  {
    id: 2,
    name: '5229 E 8th St.',
    position: { top: '20.5%', left: '39.5%' },
    image: porch2,
    alt: 'Porch 2 info',
    to: '/porches/2',
    bands: [
      {
        name: 'Blissedoubt',
        time: '2-2:45pm',
        link: '',
        desc: 'Small but mighty, Blissedoubt delivers satisfying songs with intimate tone and whimsical harmonies.',
      },
      {
        name: 'Abby Bryson',
        time: '2:55-3:40pm',
        link: '',
        desc: `Covers of familiar favorites from the 60's to the present.`,
      },
      {
        name: 'Finger Rock',
        time: '3:50-4:35pm',
        link: '',
        desc: 'Rock with a little country and blues from the 60s to 2000s--CCR, Sublime, Lenny Kravits, Brooks and Dunn, Petty, Van Morrison and on and on.',
      },
    ],
  },
  {
    id: 3,
    name: '5401 E 9th St.',
    position: { top: '49.7%', left: '64.5%' },
    image: porch3,
    alt: 'Porch 3 info',
    to: '/porches/3',
    bands: [
      {
        name: '27 Strings',
        time: '2-2:45pm',
        link: '',
        desc: 'Friends who let friends play bluegrass.',
      },
      {
        name: 'Kristie Cunningham & Kathy Kolmer',
        time: '2:55-3:40pm',
        link: '',
        desc: 'Folkie friends swap songs and harmonies.',
      },
      {
        name: 'Jennifer Spector',
        time: '3:50-4:35pm',
        link: '',
        desc: 'Award-winning songwriter mixes both clever acoustic guitar and lyrics, highlighting her jazz and pop-influenced folk music with a rich voice.',
      },
    ],
  },
  {
    id: 4,
    name: '',
    position: { top: '64%', left: '61%' },
    image: porch4,
    alt: 'Porch 4 info',
    to: '/porches/4',
    bands: [
      {
        name: 'People',
        time: '2-2:45pm',
        link: '',
        desc: `Just when you thought acoustic guitars and flute couldn't possibly rock any more, 2 people perform songs by other people from the 70s to the present.`,
      },
      {
        name: 'Dakota Williams and the Message',
        time: '2:55-3:40pm',
        link: '',
        desc: 'Indie Nerd Rock.',
      },
      {
        name: 'Gift Horse',
        time: '3:50-4:35pm',
        link: '',
        desc: 'A mix of classic rock, western, blues, psychedelic, and jam.',
      },
    ],
  },
  {
    id: 5,
    name: 'HIGHLAND VISTA PARK',
    position: { top: '40%', left: '45%' },
    image: porch5,
    alt: 'Porch 5 info',
    to: '/porches/5',
    bands: [
      {
        name: 'The Cornerstone Band',
        time: '4:35pm',
        link: '',
        desc: `Rock/Country/Blues/Elvis...need we say more! Over 150 years combined experience playing and performing dance cover music from the late 50's to 1990's. Fun for everyone!`,
      },
    ],
  },
];

export default porchDetails;
