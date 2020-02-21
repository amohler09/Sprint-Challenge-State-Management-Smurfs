import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'

const SmurfList = props => {

    useEffect(() => {
        props.getSmurfs()
    }, [])

    return (
        <div className='smurf-list'>
            {props.smurfs.map(smurf => {
                return (
                    <div key={smurf.id} className='smurf'>
                        <p>Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}cm</p>
                    </div>
                )
            })}
            
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
    smurfs: state.smurfs,
    isFetching: state.isFetching
    }
}

export default connect(mapStateToProps,
    { getSmurfs }
    )(SmurfList)