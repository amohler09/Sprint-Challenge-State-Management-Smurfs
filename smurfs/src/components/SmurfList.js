import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'

const SmurfList = props => {

    useEffect(() => {
        props.getSmurfs()
    }, [])

    return (
        <div>
            {props.smurfs.map(smurf => {
                return (
                    <div>
                        <p>{smurf.name}</p>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
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