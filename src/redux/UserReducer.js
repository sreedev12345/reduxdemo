const getUserReducer = (state={},action)=>{
	switch(action.type) {
		case "PENDING":
		  return {
		  	...state,
		  	staus : false
		  }
		 case "GET_USER_SUCCESS":
		  return {
		  	...state,
		  	data : action.data,
		  	status : action.status
		  }
		 case "GET_USER_ERROR":
		  return {
		  	data : action.data,
		  	status : action.status
		  }
		 case "GET_DATA":
		  return {
		  	data : action.payload,
		  	status : action.status
		  }
		default:
		  return state
	}
}

export default getUserReducer;