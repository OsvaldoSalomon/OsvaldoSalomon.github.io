import tweetr from '../../assets/tweetr.png';
import filmdium from '../../assets/filmdium.png';
import kuora from '../../assets/kuora.png';
import heirbnb from '../../assets/heirbnb.png';
import fireChat from '../../assets/fireChat.png';
import reactColors from '../../assets/reactColors.png';

export const projectsData = [
    {
        id: 1,
        image: tweetr,
        gif: 'https://media.giphy.com/media/m0dcBWwllzv3s9mrsz/giphy.gif',
        title: 'TwittR',
        category: 'web',
        link: 'https://tweetr.onrender.com/',
        description: 'A Twitter clone built with React, Redux, Python, Flask and PostgreSQL.'
    },
    {
        id: 2,
        image: heirbnb,
        gif: 'https://media.giphy.com/media/38mXFneqygBC2yseqb/giphy.gif',
        title: 'HeirBnB',
        category: 'web',
        link: 'https://heir-bnb-app.herokuapp.com/',
        description: 'An Airbnb clone built with React, Redux, Python, Flask and PostgreSQL.'
    },
    {
        id: 3,
        image: filmdium,
        gif: 'https://media.giphy.com/media/jEr0w6PLZ3QUFH95KT/giphy.gif',
        title: 'Filmdium',
        category: 'web',
        link: 'https://filmdium.onrender.com/',
        description: 'A clone of Medium built with JavaScript, Sequelize, Pug, CSS, PostgreSQL.'
    },
    {
        id: 4,
        image: kuora,
        gif: 'https://media.giphy.com/media/vPyWEnpLWN0WnzdOva/giphy.gif',
        title: 'Kuora',
        category: 'web',
        link: 'https://kuora.onrender.com/',
        description: 'A Quora clone built with React, Redux, Express, Sequelize and PostgreSQL.'
    },
    {
        id: 5,
        image: fireChat,
        gif: 'https://media.giphy.com/media/KMEdM7E7HqSZkkFZqn/giphy.gif',
        title: 'FireChat',
        category: 'app',
        link: 'https://firechat-sigma.vercel.app/',
        description: 'A real time chat application built with React and Firebase.'
    },
    {
        id: 6,
        image: reactColors,
        gif: 'https://media.giphy.com/media/ts80tPNt6GNYNJ61M4/giphy.gif',
        title: 'ReactColors',
        category: 'design',
        link: 'https://react-colors-app-two.vercel.app/',
        description: 'A color picker and palette maker built with React.'
    }
];

export const projectsNav = [
    {
        name: 'all'
    },
    {
        name: 'web'
    },
    {
        name: 'app'
    },
    {
        name: 'design'
    },
]
