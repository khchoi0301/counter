import * as types from '../actions/ActionTypes'

const initialState = {
    number: 0
}

const number = (state = initialState, action) => {
    switch (action.Type) {
        case types.INCREMET:
            return {
                number: state.number + 1
            }
        case types.DECREMET:
            return {
                number: state.number - 1
            }
        default:
            return state
    }
}

export default number