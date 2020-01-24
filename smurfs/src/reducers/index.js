const initialState = {
    isLoading: false,
    smurfReceived: [],
    error: '',
    newSmurf: {
        name: '',
        age: '',
        height: '',
        id: Date.now();
    }
    
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING_SMURFS_START':
            return {
                ...state,
                isLoading: true
            };
        case 'FETCHING_SMURFS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                smurfReceived: action.payload
            };
        case 'SENDING_SMURF_START':
            return {
                ...state,
                isLoading: true
            };
            case 'SENDING_SMURF_SUCCESS':
                return {
                    ...state,
                    isLoading: false,
                    newSmurf: action.payload
                }
        
        default:
            return state;
    }
}