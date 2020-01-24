import axios from 'axios'

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: 'FETCHING_SMURF_START' })
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: 'FETCHING_SMURFS_SUCCESS', payload: res.data })
        })
        .catch(err => console.log(err))
    };
};

export const sendSmurfs = () => {
    return dispatch => {
        dispatch({ type: 'SENDING_SMURF_START' })
        axios
        .post('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: 'SENDING_SMURF_SUCCESS', payload: res.data })
        })
        .catch(err => console.log(err))
    };
};