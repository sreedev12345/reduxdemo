import Axios from 'axios';

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

export const getData = ()=>async(dispatch)=>{
	try {
	 dispatch({
		type : "pending",
        status : false
	})
	const response = await Axios.get("https://restcountries.eu/rest/v2/all");
	dispatch({
		type : "GET_DATA",
		payload : response,
		status : true
	})
  } catch(error) {
  	dispatch({
  		type : "failed",
  		error : error
  	})
  }
}