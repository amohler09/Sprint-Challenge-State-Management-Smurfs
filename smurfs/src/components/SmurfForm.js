import React, { useState } from 'react'
import { connect } from 'react-redux'

const SmurfForm = props => {
    //if something doesn't work try putting useState in an array
    const [smurfInput, setSmurfInput] = useState({
        name: '',
        age: '',
        height: '',
        id: Date.now()
    })

    const handleChange = e => {
        console.log('name:', e.target.name, 'value:', e.target.value)
        setSmurfInput({...smurfInput, [e.target.name] : e.target.value})
    }

    return (
        <form>
            <input 
            className='smurf-input'
            type='text'
            value={smurfInput.name}
            name='name'
            placeholder='Name'
            onChange={handleChange}
            />

            <input
            className='smurf-input'
            type='text'
            value={smurfInput.age}
            name='age'
            placeholder='Age'
            onChange={handleChange} 
            />

            <input
            className='smurf-input'
            type='text'
            value={smurfInput.height}
            name='height'
            placeholder='Height (in CM)'
            onChange={handleChange} 
            />
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
    {}
)(SmurfForm);
