import React from 'react'

class Display extends React.Component {
    constructor(){
        super()
        this.state = {
            inputValue: '',
            things: [],
        }
    }
    updateThingArray = () => {
        let newArr = this.state.things
        newArr.push(this.state.inputValue)
        this.setState({
            things: newArr,
            inputValue: ''
        })
    }

    changeTheInput = (event) => {
        // console.log('CHANGE VALUE', event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    render(){
        console.log("STATE", this.state)
        let mappedArray = this.state.things.map(el => (
            <div>
                <h3>{el}</h3>
            </div>
        ))
        return (
            <div>
                <h1>Rob's Favorite Things</h1>
                <input onChange={(e) => this.changeTheInput(e)} type="text" value={this.state.inputValue} placeholder='type something'/>
                <button onClick={this.updateThingArray} >Click Here To Add</button>
                {mappedArray}
            </div>
        )
    }
}

export default Display