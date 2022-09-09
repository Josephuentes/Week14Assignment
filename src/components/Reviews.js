import React, { Component } from 'react'

class Reviews extends React.Component{
  constructor(props){
    super(props)
    this.state ={}
  }
  state = {
    value:''
  };

  getValue= (event) =>{
    console.log('Event:', event.target.value);

    this.setState({value: event.target.value });
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    const value= this.state.value;

    console.log('Value on Submit:', value)
  };

  render() {
    console.log('State:', this.state)
  return (
    <div>
      <form>
        <div>
          <label htmlFor=''>
          Leave a Review
          </label>
          <textarea type="text" onChange ={this.getValue}/>
          <button onClick={ this.handleSubmit }>Submit</button>
        </div>
        <p>{this.props.value}</p>
      </form>
    </div>
  )
}

}
export default Reviews;