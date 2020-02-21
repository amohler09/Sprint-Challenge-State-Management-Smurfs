const initialState = {
    smurfs: [],
    isFetching: false,
    isSending: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING_SMURFS':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCHING_SMURFS_SUCCESS':
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        default:
            return state;
    }

}