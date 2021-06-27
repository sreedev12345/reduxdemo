const getButtonReducer = (state={},action)=>{
	switch(action.type) {
		case "GET_BUTTON_COUNT":
		  return {
		  	...state,
		  	data : action.data
		  }
		default:
		  return state
	}
}

export default getButtonReducer;