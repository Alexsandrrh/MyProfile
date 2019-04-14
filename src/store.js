import IconVK from './assets/icons/009-vk.svg';
import IconFacebook from './assets/icons/045-facebook.svg';
import IconInstagram from './assets/icons/034-instagram.svg';
import IconTelegram from './assets/icons/telegram.svg';
import IconTwitter from './assets/icons/013-twitter-1.svg';
import IconMail from './assets/icons/black-envelope-email-symbol.svg';
import IconGithub from './assets/icons/039-github.svg';
import IconMessenger from './assets/icons/044-messenger.svg';

const store = {};

store.profile = {
    displayName: 'Александр Садов',
    avatarUrl: 'https://pp.userapi.com/c637425/v637425754/f71f/2jJgQP2XQpY.jpg',
    bio: 'Я Front-end разработчик на React и Redux👨‍🎨👨‍🔧👨‍💻',
    age: 17,
    birthDate: {
        year: 2001,
        mouth: 11,
        day: 8
    }
};

const stackTechnologies = [
    {
        title: 'React',
        siteUrl: 'https://reactjs.org/',
        color: '#61dafb'
    },
    {
        title: 'Redux',
        siteUrl: 'https://redux.js.org/',
        color: '#764abc'
    },
    {
        title: 'Hyper',
        siteUrl: 'https://hyper.is/',
        color: '#50e3c2'
    },
    {
        title: 'Webpack',
        siteUrl: 'https://webpack.js.org/',
        color: '#2B3A42'
    },
    {
        title: 'Gulp',
        siteUrl: 'https://gulpjs.com/',
        color: '#cf4647'
    },
    {
        title: 'Gatsby',
        siteUrl: 'https://www.gatsbyjs.org/',
        color: '#663399'
    },
    {
        title: 'Node.js',
        siteUrl: 'https://nodejs.org/',
        color: '#43853d'
    },
    {
        title: 'Yarn',
        siteUrl: 'https://yarnpkg.com/',
        color: '#2188b6'
    },
    {
        title: 'Eslint',
        siteUrl: 'https://eslint.org/',
        color: '#463fd4'
    },
    {
        title: 'Express',
        siteUrl: 'http://expressjs.com',
        color: '#259dff'
    },
    {
        title: 'Prettier',
        siteUrl: 'https://prettier.io/',
        color: '#c596c7'
    },
    {
        title: 'Pug',
        siteUrl: 'https://pugjs.org',
        color: '#a86454'
    },
    {
        title: 'Sass',
        siteUrl: 'https://sass-lang.com/',
        color: '#c6538c'
    },
    {
        title: 'MongoDB',
        siteUrl: 'https://www.mongodb.com/',
        color: '#13aa52'
    },
    {
        title: 'Babel',
        siteUrl: 'https://babeljs.io/',
        color: '#f5da55'
    },
    {
        title: 'Git',
        siteUrl: 'https://git-scm.com/',
        color: '#f14e32'
    },
    {
        title: 'Passport',
        siteUrl: 'http://www.passportjs.org/',
        color: '#35DF79'
    }
];

function getStackTechnologies(data) {
    let code = '';

    data.forEach((item, index) => {
        const newCode = `<a target="_blank" class="section-item__link" data-key="${index}" href="${
            item.siteUrl
        }"><p style="color: ${item.color}">${item.title}</p></a>`;
        code += newCode;
    });

    return String(code);
}

store.sections = [
    {
        title: 'Мой Stack или все технологии которые я применяю во Front-end разработке::://',
        html: getStackTechnologies(stackTechnologies)
    }
];

store.socials = [
    {
        name: 'Фейсбук',
        nameEng: 'Facebook',
        url: 'https://www.facebook.com/sascha.sadov',
        icon: IconFacebook
    },
    {
        name: 'ВК',
        nameEng: 'VK',
        url: 'https://vk.com/sascha.sadov',
        icon: IconVK
    },
    {
        name: 'Телеграм',
        nameEng: 'Telegram',
        url: 'https://t.me/Alexsandrrh',
        icon: IconTelegram
    },
    {
        name: 'Инстаграм',
        nameEng: 'Instagram',
        url: 'https://www.instagram.com/alexsandr.rh',
        icon: IconInstagram
    },
    {
        name: 'Твиттер',
        nameEng: 'Twitter',
        url: 'https://twitter.com/Alexsandrrh',
        icon: IconTwitter
    },
    {
        name: 'Гитхаб',
        nameEng: 'Github',
        url: 'https://github.com/Alexsandrrh',
        icon: IconGithub
    },
    {
        name: 'Мессенджер',
        nameEng: 'Messenger',
        url: 'm.me/sascha.sadov',
        icon: IconMessenger
    },
    {
        name: 'Электронная почта',
        nameEng: 'Email',
        url: 'mailto:sascha.sadov@yandex.ru',
        icon: IconMail
    }
];

export default store;
