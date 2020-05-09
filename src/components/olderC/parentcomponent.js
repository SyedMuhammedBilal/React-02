import React, { Component } from 'react'
import RegComp from './regComponent'
import PureComp from './PureComponent'

class parentcomponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'bilal'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Bilal'
            })
        }, 2000)
    }

    render() {
        console.log('******** Parent Component ********')
        return (
            <div>
                parentcomponent
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default parentcomponent
