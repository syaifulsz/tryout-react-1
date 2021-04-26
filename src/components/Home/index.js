import { Component } from 'react';
import Page from '../Page';
import ConfigPages from '../../configs/pages';

export default class Home extends Component {

    render () {
        return <Page page={ConfigPages.home} />
    }
}
