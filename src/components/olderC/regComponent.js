import React, { Component } from 'react'

class regComponent extends Component {
    render() {
        console.log('Regular Component render')
        return (
            <div>
                regular component {this.props.name}
            </div>
        )
    }
}

export default regComponent
