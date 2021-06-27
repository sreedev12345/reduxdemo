import React from 'react';
import { connect } from 'react-redux';
import { getButton,getUser } from './redux/ButtonAction';

class Button extends React.Component {
   state = {
     count : 0
   }

   componentDidMount() {
      this.props.dispatch(getButton(this.state.count));
      this.props.dispatch(getUser());
   }

    componentDidUpdate(nextState,nextProps) {
       const { count } = this.state;
       const { dispatch } = this.props;
      if(nextProps.count!==this.state.count) {
         dispatch(getButton(this.state.count))
            this.props.dispatch(getUser());
      }
   }


   handleClick = ()=>{
     const { count } = this.state;
     this.setState({
       count : count+1
     })
   }


	render() {
	  const { count } = this.state;
    console.log(this.props.getUserStatus)
	  return(
        <>
         <div><button className="btn btn-primary" onClick={this.handleClick}>button</button></div>
         <div>the count is {this.props.getButtonReducer ? this.props.getButtonReducer : this.state.count} </div>
        </>
	  )
	}
}

const mapDispatchToProps = (dispatch)=>({dispatch})

const mapStateToProps = (state) => {
  return {
    getButtonReducer : state.getButtonReducer ? state.getButtonReducer.data : 0,
    getUserReducer : state.getUserReducer ? state.getUserReducer.data : "",
    getUserStatus : state.getUserReducer ? state.getUserReducer.status : false
  }
};

export default (connect(mapStateToProps, mapDispatchToProps)(Button));