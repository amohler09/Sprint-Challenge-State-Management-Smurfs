import React from 'react'

export const SmurfForm = props => {
    const handleChange = e => {
        
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
            </div>
        </div>
    )


}


