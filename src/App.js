import { Component } from 'react';
import './assets/style.scss';

// @see https://reactrouter.com/web/api/Hooks
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Master as LayoutMaster } from './components/Layout';
import ConfigPages from './configs/pages';

export default class App extends Component
{
    render () {

        return (
            <Router>
                <LayoutMaster>
                    <Switch>
                        <RegisterRoutes />
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
    return <Route exact={ route.exact } path={ route.path } location={ route.location } render={ props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      ) } />
}
