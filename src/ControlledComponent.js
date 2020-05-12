import React, { Component } from 'react'

export class ControlledComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: ''
        }
    }
    
    whenClick = (event) => {
        console.log(event.target)
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <input 
                type="text" 
                name="name"
                placeholder="type name"
                value={this.state.name} 
                onChange={this.whenClick}/>
            </div>
        )
    }
}

export default ControlledComponent