import React from 'react'
import { connect } from 'react-redux'
import {sendSmurfs} from '../actions'


export const SmurfForm = props => {
    const handleChange = e => {
        e.preventDefault();
    }

    return (
        <div>
            <h2>Add A New Smurf!</h2>
            <div>
                <input
                id='name'
                type='text'
                name='name'
                placeholder='Smurfs Name'
                value={props.name}
                onChange={handleChange}
                />
                <input
                id='age'
                type='text'
                name='age'
                placeholder='Smurfs Age'
                value={props.age}
                onChange={handleChange}
                />
                <input
                id='height'
                type='text'
                name='height'
                placeholder='Height in cm'
                value={props.height}
                />
                <button onSubmit={props.sendSmurfs}>Add That Smurf</button>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfReceived: state.smurfReceived,
        error: state.error,
        smurfOut: state.smurfOut,
        newSmurf: state.newSmurf
    }
}

export default connect(
    mapStateToProps,
    {sendSmurfs}
    )(SmurfForm);


