import React, { Component } from 'react'

class LifeCycle extends Component {
    
    state = {
             number: 0
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState(() => ({
                number: Math.ceil(Math.random() * 1000)
            })) 
        }, 5000)
    }    
        

    render() {
        return (
            <div>
                <h1>The state number is {this.state.number}</h1>
            </div>
        )
    }
}

export default LifeCycle
