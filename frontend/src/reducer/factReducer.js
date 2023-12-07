import { ACION_TYPES } from "./FactEnums"

const initialState = {
    loading: false,
    fact: "",
    error: false
}

const factReducer = (state, action) => {
    switch (action.type) {
        case ACION_TYPES.FETCH_REQUEST:
            return { ...state, loading: true }
        case ACION_TYPES.FETCH_SUCCESS:
            return { ...state, loading: false, fact: action.payload }
        case ACION_TYPES.FETCH_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export { factReducer, initialState }