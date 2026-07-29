export let userReducer = (state = { user: null, loading: false, error: null }, action) => {
    switch (action.type) {
        case "Loading": return { ...state, user: null, loading: true, error: null };
        case "RegisterUser": return { ...state, user: action.payload, loading: false, error: null };
        case "Logout": return { ...state, user: null, loading: false, error: null }
        case "Error": return { ...state, user: null, loading: false, error: action.payload, }
        default: return state
    }
}