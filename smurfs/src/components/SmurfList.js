import React from 'react';
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions'
import { sendSmurfs } from '../actions'
import { SmurfForm } from './smurfForm'


const SmurfList = props => {
    return (
        <div>
            <h2>Smurf Village</h2>
            <button onClick={props.fetchSmurfs}>Fetch The Smurfs!</button>
            {!props.smurfReceived && !props.isLoading && (<h2>Where are the smurfs?</h2>)}
            {props.smurfReceived.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p>
                    <p>{item.age} years old</p>
                    <p>{item.height} tall</p>
                </div>
            ))}
            <SmurfForm />
            
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
    {fetchSmurfs, sendSmurfs}
    )(SmurfList, SmurfForm);


    // {props.smurfReceived && !props.isLoading && (
    //     {props.smurfReceived.map((item, index) => (
    //         {props.smurfReceived.map((item, index) => (
    //             <div key={index}>
    //                 <p>{item.name}</p>
    //             </div>
    //         ))}
    //         ))}
    //     )}