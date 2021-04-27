import PageHome from '../../components/Home';
import PageAbout from '../../components/About';
import PageFormRepeater from '../../components/FormRepeater';
import PageStudentProfile from '../../components/Student/Profile';

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
    },
    studentProfile: {
        title: 'Profile',
        slug: 'student-profile',
        url: '/student-profile',
        path: '/student-profile',
        exact: false,
        description: 'This is the student profile that directly linked with Student store via Redux',
        body: 'This is the student profile that directly linked with Student store via Redux',
        component: PageStudentProfile,
        theme: 'theme-student-profile'
    }
}

export default config;
