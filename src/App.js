import { Component } from 'react';
import './assets/style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PageHome from './components/Home';
import PageAbout from './components/About';
import { Master as LayoutMaster } from './components/Layout';

export default class App extends Component
{
    render () {
        return (
            <Router>
                <LayoutMaster>
                    <Switch>
                        <Route path="/about">
                            <PageAbout />
                        </Route>
                        <Route path="/">
                            <PageHome />
                        </Route>
                    </Switch>
                </LayoutMaster>
            </Router>
        );
    }
}
