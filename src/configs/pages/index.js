import PageHome from '../../components/Home';
import PageAbout from '../../components/About';
import PageFormRepeater from '../../components/FormRepeater';

const config = {
    home: {
        title: 'Home',
        slug: 'home',
        url: '/',
        path: '/',
        exact: true,
        description: 'This is the home page description',
        body: 'This is the content of home page',
        component: PageHome,
        theme: 'theme-home'
    },
    about: {
        title: 'About',
        slug: 'about',
        url: '/about',
        path: '/about',
        exact: false,
        description: 'This is the about page description',
        body: 'This is the content of about page',
        component: PageAbout,
        theme: 'theme-about'
    },
    formRepeater: {
        title: 'Form with Repeater',
        slug: 'form-repeater',
        url: '/form-repeater',
        path: '/form-repeater',
        exact: false,
        description: 'This is an example of form with repeater fields',
        body: 'This is an example of form with repeater fields',
        component: PageFormRepeater,
        theme: 'theme-form-repeater'
    }
}

export default config;
