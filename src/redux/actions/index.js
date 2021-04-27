const counterIncrementAction = () => {
    return {
        type: 'INCREMENT'
    }
}

const counterDecrementAction = () => {
    return {
        type: 'DECREMENT'
    }
}

export {
    counterIncrementAction,
    counterDecrementAction
}
