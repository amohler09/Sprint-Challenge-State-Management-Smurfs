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
        case 'SMURFS_IN':
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case 'SENDING_SMURF':
            return {
                ...state,
                isSending: true
            }
        case 'SMURF_OUT':
            return {
                ...state,
                isSending: false,
                smurfs: action.payload
            }
        default:
            return state;
    }

}