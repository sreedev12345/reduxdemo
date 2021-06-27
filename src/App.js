import React,{ useState } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';
import Test from './Test';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Button />
       <h1>the parent count is {this.props.getButtonReducer ? this.props.getButtonReducer : -1}</h1>
       <Test/>
    </div>
  );
}
}



const mapDispatchToProps = (dispatch)=>({dispatch})

const mapStateToProps = (state) => {
  return {
    getButtonReducer : state.getButtonReducer ? state.getButtonReducer.data : 0
  }
};

export default (connect(mapStateToProps, mapDispatchToProps)(App));
