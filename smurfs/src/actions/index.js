import axios from 'axios'

export const getSmurfs = () => dispatch => {
    dispatch({ type: 'FETCHING_SMURFS' })
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({ type: 'SMURFS_IN', payload: res.data})
    })
    .catch(err => console.log('error fetching smurfs', err))
}

export const addSmurf = smurf => dispatch => {
    dispatch({ type: 'SENDING_SMURFS'})
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        dispatch({ type: 'SMURF_OUT', payload: res.data})
    })
    .catch(err => console.log('error sending smurfs', err))
}