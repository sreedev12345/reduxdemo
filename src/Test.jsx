import React,{ useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getData,getButton } from './redux/ButtonAction';

const Test = ()=>{
    const [count,setCount] = React.useState(0);
    const selector = useSelector(state=>state);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getData());
    },[])

    useEffect(()=>{
       dispatch(getButton(count));
    },[count])

    const submit = (e)=>{
      e.preventDefault();
      setCount(count+1);
    }

    console.log("selector",selector)

	return(
      <>
       <div>test is {selector.getButtonReducer ? selector.getButtonReducer.data : 0}</div>
       <button type="button" className="btn btn-primary" onClick={submit}>click</button>
      </>
	)
}

export default Test;