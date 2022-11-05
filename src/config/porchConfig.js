import porch1 from '../img/1.svg';
import porch2 from '../img/2.svg';
import porch3 from '../img/3.svg';
import porch4 from '../img/4.svg';
import porch5 from '../img/5.svg';

const porchDetails = [
  {
    id: 1,
    name: '5229 E 8th St.',
    position: { top: '34%', left: '29%' },
    image: porch1,
    alt: 'Porch 1 info',
    to: '/porches/1',
    bands: [
      {
        name: 'Blissedoubt',
        time: '2-2:45pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: 'https://www.instagram.com/blissedoubt/',
          website: null,
          youtube: null,
        },
        desc: 'Small but mighty, Blissedoubt delivers satisfying songs with intimate tone and whimsical harmonies.',
      },
      {
        name: 'Abby Bryson',
        time: '2:55-3:40pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: null,
          website: null,
          youtube: null,
        },
        desc: `Covers of familiar favorites from the 60's to the present.`,
      },
      {
        name: 'Finger Rock',
        time: '3:50-4:35pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: null,
          website: null,
          youtube: null,
        },
        desc: 'Rock with a little country and blues from the 60s to 2000s--CCR, Sublime, Lenny Kravits, Brooks and Dunn, Petty, Van Morrison and on and on.',
      },
    ],
  },
  {
    id: 2,
    name: '5257 E 7th St.',
    position: { top: '23%', left: '39.5%' },
    image: porch2,
    alt: 'Porch 2 info',
    to: '/porches/2',
    bands: [
      {
        name: 'Rewritten',
        time: '2-2:20pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: null,
          website: null,
          youtube: null,
        },
        desc: 'Contemporary Christian music (Featuring Estrella Cepin from Highland Vista).',
      },
      {
        name: 'The Billy Joel Band',
        time: '2:25-2:45pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: null,
          website: null,
          youtube: null,
        },
        desc: 'Bill and Joel will regale you with Post Apocalyptic Neo Folk Pop Rock that will transport you to Vemuramic heights..',
      },
      {
        name: 'Andy Flagg',
        time: '2:50-3:10pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: null,
          website: null,
          youtube: null,
        },
        desc: `Solo classical guitar music, primarily by modern composers from North and South America.`,
      },
      {
        name: 'Niko Green',
        time: '3:15-3:35pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: null,
          website: null,
          youtube: null,
        },
        desc: `Niko Green's rock 'n roll drum debut.`,
      },
      {
        name: 'Charlie Cormode',
        time: '3:35-3:45pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: null,
          website: null,
          youtube: null,
        },
        desc: 'Bagpipe.',
      },
      {
        name: 'Desert',
        time: '3:50-4:10pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: null,
          website: null,
          youtube: null,
        },
        desc: `80's rock cover songs.`,
      },
      {
        name: 'Ryan David Green',
        time: '4:15-4:35pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: null,
          website: 'https://www.ryanhood.com/ryan-david-green',
          youtube: null,
        },
        desc: 'Instrumental acoustic guitar.',
      },
    ],
  },
  {
    id: 3,
    name: '5401 E 9th St.',
    position: { top: '50%', left: '64.5%' },
    image: porch3,
    alt: 'Porch 3 info',
    to: '/porches/3',
    bands: [
      {
        name: '27 Strings',
        time: '2-2:45pm',
        link: {
          facebook: 'https://www.facebook.com/DesertBluegrassAssociation',
          twitter: null,
          instagram: null,
          website: null,
          youtube: null,
        },
        desc: 'Friends who let friends play bluegrass.',
      },
      {
        name: 'Kristie Cunningham & Kathy Kolmer',
        time: '2:55-3:40pm',
        link: {
          facebook: 'https://www.facebook.com/KristieCMusic',
          twitter: null,
          instagram: null,
          website: 'https://kristiecunningham.com/',
          youtube: null,
        },
        desc: 'Folkie friends swap songs and harmonies.',
      },
      {
        name: 'Jennifer Spector',
        time: '3:50-4:35pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: null,
          website: null,
          youtube: null,
        },
        desc: 'Award-winning songwriter mixes both clever acoustic guitar and lyrics, highlighting her jazz and pop-influenced folk music with a rich voice.',
      },
    ],
  },
  {
    id: 4,
    name: '5348 E 10th St.',
    position: { top: '65%', left: '61%' },
    image: porch4,
    alt: 'Porch 4 info',
    to: '/porches/4',
    bands: [
      {
        name: 'People',
        time: '2-2:45pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: null,
          website: null,
          youtube: null,
        },
        desc: `Just when you thought acoustic guitars and flute couldn't possibly rock any more, 2 people perform songs by other people from the 70s to the present.`,
      },
      {
        name: 'Dakota Williams and the Message',
        time: '2:55-3:40pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: null,
          website: null,
          youtube: null,
        },
        desc: 'Indie Nerd Rock.',
      },
      {
        name: 'Gift Horse',
        time: '3:50-4:35pm',
        link: {
          facebook: null,
          twitter: null,
          instagram: null,
          website: null,
          youtube: null,
        },
        desc: 'A mix of classic rock, western, blues, psychedelic, and jam.',
      },
    ],
  },
  {
    id: 5,
    name: 'HIGHLAND VISTA PARK',
    position: { top: '39%', left: '44%' },
    image: porch5,
    alt: 'Porch 5 info',
    to: '/porches/5',
    bands: [
      {
        name: 'The Cornerstone Band',
        time: '4:35pm',
        link: {
          facebook:
            'https://www.facebook.com/people/Cornerstone-Band/100063333331727/',
          twitter: null,
          instagram: null,
          website: null,
          youtube: 'https://www.youtube.com/channel/UCnPotu8LLbl67jLUfgwVZoA',
        },
        desc: `Rock/Country/Blues/Elvis...need we say more! Over 150 years combined experience playing and performing dance cover music from the late 50's to 1990's. Fun for everyone!`,
      },
    ],
  },
];

export const foodDetails = [
  {
    id: 1,
    name: 'Biggie Boy BBQ',
    link: {
      facebook: 'https://www.facebook.com/biggieboybbq/',
    },
  },
  {
    id: 2,
    name: `Loly's Tortas and Hotdogs`,
    link: {
      facebook: 'https://www.facebook.com/people/Lolys-Tortas/100078659748303/',
    },
  },
  {
    id: 3,
    name: `Gigi's Peruvian Fusion`,
    link: { website: 'http://gigisfusion.com/' },
  },
  {
    id: 4,
    name: 'The Sweet Coqui',
    link: { facebook: 'https://www.facebook.com/thesweetcoqui/' },
  },
  {
    id: 5,
    name: 'Tacoqueta',
    link: { facebook: 'https://www.facebook.com/TacoquetaFoodTruck/' },
  },
  {
    id: 6,
    name: 'DC Jumbie Latin Caribbean',
    link: {
      facebook: 'https://www.facebook.com/dcjumbielatincaribbeansoulfood/',
    },
  },
  {
    id: 7,
    name: 'West Coast Trolley II',
    link: {
      facebook:
        'https://www.facebook.com/profile.php?id=100057417340613&ref=py_c',
    },
  },
];

export default porchDetails;
