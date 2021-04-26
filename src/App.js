import { Component } from 'react';
import './assets/style.scss';

// @see https://reactrouter.com/web/api/Hooks
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import PageHome from './components/Home';
// import PageAbout from './components/About';
import { Master as LayoutMaster } from './components/Layout';
import ConfigPages from './configs/pages';

// import PageHome from './components/Home';
// import PageAbout from './components/About';
// import PageFormRepeater from './components/FormRepeater';

export default class App extends Component
{
    render () {

        return (
            <Router>
                <LayoutMaster>
                    <Switch>
                        <RegisterRoutes />
                        { /*registerRoutes.map( ( route, i ) => (
                            <RouteWithSubRoutes key={ i } { ...route } />
                        ) ) */ }
                    </Switch>
                </LayoutMaster>
            </Router>
        );
    }
}

const RegisterRoutes = () => {
    const registerRoutes = [];
    for ( const key in ConfigPages ) {
        const page = ConfigPages[ key ];
        // console.log( { page } );
        // registerRoutes.push( {
        //     path: page.path,
        //     component: page.component
        // } );
        registerRoutes.push(<RouteWithSubRoutes key={ key } { ...page } />)
    }
    return registerRoutes;
}

/**
 * @see https://reactrouter.com/web/example/route-config
 * @param       object route
 * @constructor
 */
function RouteWithSubRoutes( route ) {
    return <Route exact path={ route.path } render={ props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      ) } />
}
