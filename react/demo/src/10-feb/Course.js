
import React from 'react'
import PropTypes from 'prop-types';
 

export default function Course(props) {
    function showFee() {
        alert("Fee = " + props.course.fee)
    }

    return (
        <tr key={props.index}>
            <td> {props.course.title}</td>
            <td style={{ textAlign: 'center' }}>
                {props.course.duration}
            </td>
            <td>
                <button onClick={showFee}>Fee</button>
            </td>
        </tr>
    )
}

// Type checking with PropTypes 
Course.propTypes = {
    course : PropTypes.shape({
        title :  PropTypes.string,
        duration: PropTypes.number,
        fee : PropTypes.number,
    })
 
};