import configPages from '../configs/pages';

export const getPageConfig = () => {
    const location = window.location;
    for ( const key in configPages ) {
        const page = configPages[ key ];
        if ( page.path === location.pathname ) {
            return  page;
        }
    }
    return null;
}
