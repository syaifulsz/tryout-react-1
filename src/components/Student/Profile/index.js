import { Component, Fragment } from 'react';
import Page from '../../Page';
import ConfigPages from '../../../configs/pages';
import { useSelector, useDispatch } from 'react-redux';
import { studentSetNameAction, studentSetAgeAction } from '../../../redux/actions/student';

const StudentInputSetName = () => {
    const student = useSelector( state => state.student );
    const dispatch = useDispatch();

    const value = student.name || '';

    return(
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" onChange={ e => dispatch( studentSetNameAction( e.target.value ) ) } value={value} />
        </div>
    );
}

const StudentInputSetAge = () => {
    const student = useSelector( state => state.student );
    const dispatch = useDispatch();

    const value = student.age || 0;

    return(
        <div className="form-group">
            <input type="number" className="form-control" placeholder="Age" onChange={ e => dispatch( studentSetAgeAction( e.target.value ) ) } value={value} />
        </div>
    );
}

export default class Profile extends Component {

    render () {
        return(
            <Fragment>
                <Page page={ConfigPages.studentProfile} />
                <div className="row mt-3">
                    <div className="col-md-4">
                        <StudentInputSetName />
                        <StudentInputSetAge />
                    </div>
                </div>
            </Fragment>
        )
    }
}
