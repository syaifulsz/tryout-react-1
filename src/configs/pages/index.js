import PageHome from '../../components/Home';
import PageAbout from '../../components/About';
import PageFormRepeater from '../../components/FormRepeater';

const config = {
    home: {
        title: 'Home',
        slug: 'home',
        url: '/',
        path: '/',
        description: 'This is the home page description',
        body: 'This is the content of home page',
        component: PageHome
    },
    about: {
        title: 'About',
        slug: 'about',
        url: '/about',
        path: '/about',
        description: 'This is the about page description',
        body: 'This is the content of about page',
        component: PageAbout
    },
    formRepeater: {
        title: 'Form with Repeater',
        slug: 'form-repeater',
        url: '/form-repeater',
        path: '/form-repeater',
        description: 'This is an example of form with repeater fields',
        body: 'This is an example of form with repeater fields',
        component: PageFormRepeater
    }
}

export default config;
