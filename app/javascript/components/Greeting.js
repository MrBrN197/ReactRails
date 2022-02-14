import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from 'react-redux'; 
import { setMessage } from "../redux/message/message";

const Greeting = () => {
  const message = useSelector((state) => state.messages)
  console.log('message:', message)
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(setMessage())
  }, [])

  return (
    <>
      <h1>Greeting: {message} </h1>
    </>
  );
}

export default Greeting;
