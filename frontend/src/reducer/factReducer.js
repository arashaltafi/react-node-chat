import { ACTION_TYPES } from "./FactEnums"

const initialState = {
    loading: false,
    fact: "",
    error: false
}

const factReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_REQUEST:
            return { ...state, loading: true }
        case ACTION_TYPES.FETCH_SUCCESS:
            return { ...state, loading: false, fact: action.payload }
        case ACTION_TYPES.FETCH_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export { factReducer, initialState }