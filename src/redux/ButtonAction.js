export const getButton = (params)=>{
  return  {
  		type : "GET_BUTTON_COUNT",
  	    data : params
  }
}

export const getUser = ()=>{
	return (dispatch)=>{
		dispatch({
			type : "PENDING",
			status : false
		})
		return fetch("https://restcountries.eu/rest/v2/all")
		.then(data=>data.json())
		.then((data)=>{
			dispatch({
              type : "GET_USER_SUCCESS",
			  data : data,
			  status : true
			})
		})
		.catch((error)=>{
			dispatch({
				type : "GET_USER_ERROR",
			    data : error,
			    status : false
			})
		})
	}
}