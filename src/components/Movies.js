import React, { Component } from 'react';



export default class Movies extends Component {
  constructor(props){
    super(props)
    this.state ={}
  }

  render(){
    return(
    <>
        <h2>{this.props.name}</h2>
        <img src={this.props.img} alt={`${this.props.name}'s picture`} height='300px'/>
        <p>{this.props.synopsis}</p>
        
    </>
    )
  }
  }

