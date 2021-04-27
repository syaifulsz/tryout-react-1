import { Component, Fragment } from 'react';
import Page from '../Page';
import ConfigPages from '../../configs/pages';
import { useSelector, useDispatch } from 'react-redux';
import { counterIncrementAction, counterDecrementAction } from '../../redux/actions/counter';

const Counter = () => {
    const counterValue = useSelector( state => state.counter );
    return(<div>Counter: <strong>{counterValue}</strong></div>);
}

const CounterIncrement = () => {
    const dispatch = useDispatch();
    return(
        <button onClick={ () => dispatch( counterIncrementAction() ) } className="btn btn-primary">Increment</button>
    );
}

const CounterDecrement = () => {
    const dispatch = useDispatch();
    return(
        <button onClick={ () => dispatch( counterDecrementAction() ) } className="btn btn-danger">Decrement</button>
    );
}

export default class Home extends Component {

    render () {
        return(
            <Fragment>
                <Page page={ConfigPages.home} />
                <hr />
                <div className="d-flex align-items-center">
                    <div className="mr-2">
                        <CounterIncrement />
                    </div>
                    <div className="mr-4">
                        <CounterDecrement />
                    </div>
                    <div className="">
                        <Counter />
                    </div>
                </div>
            </Fragment>
        )
    }
}
