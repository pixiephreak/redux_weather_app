import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};
    // bind this context
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event){
    this.setState({term: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }
  render(){
    return (
      <form
        onSubmit={this.handleSubmit}
        className='input-group'>
        <input
          placeholder='enter a city'
          className='form-control'
          value={this.state.term}
          //value of this is not Component
          onChange={this.handleInput}
         />
        <span className='input-group-button'>
          <button className='btn btn-secondary' type='submit'>submit</button>
        </span>
      </form>
    )
  }
}

//provide access to this.state.props
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
