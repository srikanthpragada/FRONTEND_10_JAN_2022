import React from 'react'

class Greet extends React.Component {
    message = "This is a class component!"

    render() {
        return (
            <h1 style={{color: 'blue'}}>
                 {this.message}
            </h1>
        );
    }
}
 

export default Greet;