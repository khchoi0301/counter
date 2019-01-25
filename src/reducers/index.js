import * as types from '../actions/ActionTypes'

const initialState = {
    color: 'black',
    number: 0
}

function counter(state = initialState, actions) {
    switch (actions.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1
            }

        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            }

        case types.SET_COLOR:
            return {
                ...state,
                color: actions.color
            }

        default:
            return state
    }
}

export default counter
