import { Component } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import configPages from '../../../configs/pages';
import { getPageConfig } from '../../../helpers';
import { useSelector } from 'react-redux';

const NavItem = ( { page, onClick, activePageSlug } ) => {
    const linkClassNames = [ 'nav-link' ];
    const location = useLocation();
    if ( location.pathname === page.path ) {
        linkClassNames.push( 'active' );
    }
    const linkClassNamesRender = linkClassNames.join( ' ' );
    return(
        <li className="nav-item">
            <Link className={linkClassNamesRender} onClick={ onClick } to={page.url}>{page.title}</Link>
        </li>
    )
}



const Student = () => {

    const student = useSelector( state => state.student );

    if ( !student.name ) {
        return null;
    }

    return(<div className="text-white">{student.name} ({student.age})</div>)
}

export default class Navbar extends Component
{
    render() {

        console.log( getPageConfig() );

        const navs = [];
        for ( const key in configPages ) {
            const page = configPages[ key ];
            navs.push(<NavItem key={key} page={page} />);
        }

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navs}
                    </ul>
                </div>
                <Student />
            </nav>
        )
    }
}
