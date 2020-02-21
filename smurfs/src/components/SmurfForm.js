import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions'

const SmurfForm = props => {
    const [smurfInput, setSmurfInput] = useState([{
        name: '',
        age: '',
        height: '',
        id: Date.now()
    }])

    const handleChange = e => {
        console.log('name:', e.target.name, 'value:', e.target.value);
        setSmurfInput({...smurfInput, [e.target.name] : e.target.value });
    }

    const handleSubmit = e => {
        console.log(e)
        e.preventDefault();
        props.addSmurf({...smurfInput});
        setSmurfInput({
            name: '',
            age: '',
            height: ''
        })
    }

    return (
            <form onSubmit={handleSubmit} className='smurf-form'>
                <input 
                className='smurf-input'
                type='text'
                value={smurfInput.name || ''}
                name='name'
                placeholder='Name'
                onChange={handleChange}
                />

                <input
                className='smurf-input'
                type='text'
                value={smurfInput.age || ''}
                name='age'
                placeholder='Age'
                onChange={handleChange} 
                />

                <input
                className='smurf-input'
                type='text'
                value={smurfInput.height || ''}
                name='height'
                placeholder='Height (in CM)'
                onChange={handleChange} 
                />

                <button className='smurf-btn'>Add A Smurf To The Village!</button>
            </form>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isSending: state.isSending
    }
}

export default connect(mapStateToProps,
    { addSmurf }
)(SmurfForm);
