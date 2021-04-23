import { Component } from 'react';
import './assets/style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Master as LayoutMaster } from './components/Layout';

export default class App extends Component
{
    render () {
        return (
            <Router>
                <LayoutMaster>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </LayoutMaster>
            </Router>
        );
    }
}
