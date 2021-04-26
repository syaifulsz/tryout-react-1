import { Component } from 'react';
import Page from '../Page';
import ConfigPages from '../../configs/pages';

export default class FormRepeater extends Component {

    render () {

        return(
            <div>
                <Page page={ConfigPages.formRepeater} />
            </div>
        )
    }
}
