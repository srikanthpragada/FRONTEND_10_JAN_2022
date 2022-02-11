
import React from 'react'

export default class OnlineCourse extends React.Component {

    constructor(props) {
        super(props)
        this.props = props;
        // This binding is necessary to make `this` work in the callback
        this.showFee = this.showFee.bind(this);
    }

    showFee() {
         alert(this.props.course.fee)
    }

    render() {
        return (
            <tr key={this.props.index}>
                <td> {this.props.course.title}</td>
                <td style={{ textAlign: 'center' }}>
                    {this.props.course.duration}
                </td>
                <td>
                    <button onClick={this.showFee}>Fee</button>
                </td>
            </tr>
        )
    }
}
 