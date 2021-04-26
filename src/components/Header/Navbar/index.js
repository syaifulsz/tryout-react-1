import { Component } from 'react';
import { Link } from 'react-router-dom';
import ConfigPages from '../../../configs/pages';

const NavItem = ( { page, onClick, activePageSlug } ) => {

    const linkClassNames = [ 'nav-link' ];
    if ( activePageSlug === page.slug ) {
        linkClassNames.push( 'active' );
    }
    const linkClassNamesRender = linkClassNames.join( ' ' );
    return(
        <li className="nav-item">
            <Link className={linkClassNamesRender} onClick={ onClick } to={page.url}>{page.title}</Link>
        </li>
    )
}

export default class Navbar extends Component
{
    constructor( props ) {
        super( props );
        this.state = {
            activePageSlug: 'home'
        };
    }

    render() {

        const navs = [];
        for ( const key in ConfigPages ) {
            const page = ConfigPages[ key ];
            navs.push(<NavItem key={key} page={page} activePageSlug={ this.state.activePageSlug } onClick={ () => {
                this.setState( {
                    activePageSlug: page.slug
                } )
            } } />);
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
            </nav>
        )
    }
}
