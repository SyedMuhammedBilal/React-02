import React, { PureComponent } from 'react'

class pureComponent extends PureComponent {
    render() {
        console.log('Pure Component render')
        return (
            <div>
                PureComponent {this.props.name}
            </div>
        )
    }
}

export default pureComponent
