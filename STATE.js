import React, { Component } from 'react'

export default class STATE extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         COUNT:0
      }
    }
   
    
    handleIncrement = () =>{
          this.setState({
           COUNT: this.state.COUNT+1
          })
    }

    handleDecrement=()=>{
        this.setState({
            COUNT:this.state.COUNT-1
        })
    }
    
  render() {
    const {COUNT}=this.state
    return (
      <div>
        <h1>Count:{COUNT}</h1>
        <button onClick ={this.handleIncrement}> + </button>
        <button onClick={this.handleDecrement} disabled={COUNT===0? true: false}> - </button>
      </div>
    )
  }
}
