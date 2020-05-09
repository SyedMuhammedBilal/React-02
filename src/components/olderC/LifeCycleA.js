import React, { Component } from 'react'

class LifeCycleA extends Component {

    componentDidMount() {
        console.log('Did mount LifecycleA')
    }

    render() {
        return (
            <div>
                LifeCycleA
            </div>
        )
    }
}

export default LifeCycleA
