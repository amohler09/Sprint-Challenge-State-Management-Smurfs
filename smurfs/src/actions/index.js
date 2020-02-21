import axios from 'axios'

export const getSmurfs = () => dispatch => {
    dispatch({ type: 'FETCHING_SMURFS' })
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({ type: 'FETCHING_SMURFS_SUCCESS', payload: res.data})
    })
    .catch(err => console.log('error', err))

}