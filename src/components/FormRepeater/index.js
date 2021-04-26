/*eslint array-callback-return: ["error", { allowImplicit: true }]*/

import { Component, Fragment } from 'react';
import Page from '../Page';
import ConfigPages from '../../configs/pages';
// import _ from 'lodash';
import slugify from 'slugify';

const InputText = ( { id, label, name, value, placeholder, handleClickRemoveField, handleOnChangeInputStudentName } ) => {

    id = id || slugify(`input-${name}-`) + Date.now();
    const formGroupId = `form-group-input-${id}`;

    const inputAttrs = {
        onChange: handleOnChangeInputStudentName,
        type: 'text',
        name: name,
        placeholder: placeholder,
        className: 'form-control',
        id: id
    };
    inputAttrs[ 'value' ] = value || '';

    return(
        <div id={ formGroupId } className="form-group d-flex border rounded p-3 bg-light">
            <div className="flex-fill mr-2">
                <input { ...inputAttrs } />
            </div>
            <div>
                <button className="btn btn-danger" onClick={ () => handleClickRemoveField( id ) }>Remove</button>
            </div>
        </div>
    )
}

export default class FormRepeater extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            studentNameInputIds: [ 'ssz' ],
            studentNameInputData: [ {
                id: 'ssz',
                value: 'SSZ'
            } ],
        };
        this.handleClickAddField = this.handleClickAddField.bind( this );
        this.handleClickRemoveField = this.handleClickRemoveField.bind( this );
        this.handleOnChangeInputStudentName = this.handleOnChangeInputStudentName.bind( this );
    }

    handleOnChangeInputStudentName( event ) {

        const { id, value } = event.target;

        const studentNameInputData = [];
        for ( const i in this.state.studentNameInputData ) {
            const data = this.state.studentNameInputData[ i ];
            if ( data.id !== id ) {
                studentNameInputData[ i ] = data;
            }
        }
        studentNameInputData.push( {
            id: id,
            value: value
        } )
        this.setState( {
            studentNameInputData: studentNameInputData
        } )
    }

    handleClickAddField() {
        const count = this.state.studentNameInputIds.length + 1;
        const studentNameInputIds = this.state.studentNameInputIds.concat( `student-name-${count}-` + Date.now() );
        this.setState( {
            studentNameInputIds: studentNameInputIds
        } )
    }

    handleClickRemoveField( id ) {
        const studentNameInputIds = this.state.studentNameInputIds.filter( item => item !== id );
        const studentNameInputData = [];
        for ( const i in this.state.studentNameInputData ) {
            const data = this.state.studentNameInputData[ i ];
            if ( data.id !== id ) {
                studentNameInputData[ i ] = data;
            }
        }

        this.setState( {
            studentNameInputIds: studentNameInputIds,
            studentNameInputData: studentNameInputData
        } )
    }

    renderInputTexts() {
        const inputs = [];
        this.state.studentNameInputIds.map( ( inputId, i ) => {

            let inputDefaultValue = null;
            for ( const i in this.state.studentNameInputData ) {
                const data = this.state.studentNameInputData[ i ];
                if ( data.id === inputId ) {
                    inputDefaultValue = data.value;
                }
            }

            inputs.push(
                <InputText
                    handleOnChangeInputStudentName={this.handleOnChangeInputStudentName}
                    key={ i }
                    id={ inputId }
                    label="Student"
                    name="student[]"
                    value={ inputDefaultValue }
                    placeholder="Student Name"
                    handleClickRemoveField={ this.handleClickRemoveField }
                    />
            );
            return;
        } );
        return inputs;
    }

    render() {

        return(
            <Fragment>
                <Page page={ConfigPages.formRepeater} />
                <div className="mt-3">
                    {this.renderInputTexts()}
                    {/*<InputText id="student-name-0" label="Student" name="student[]" placeholder="Student Name" />*/}
                    <div className="">
                        <button className="btn btn-primary" onClick={ this.handleClickAddField }>Add Field</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}
