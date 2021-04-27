export const studentSetNameAction = ( name = '' ) => {

    console.log( { name } );

    return {
        type: 'SET_NAME',
        name: name
    }
}

export const studentSetAgeAction = ( age = 0 ) => {
    return {
        type: 'SET_AGE',
        age: age
    }
}
