import React,{useEffect,useRef,useState,useCallback,createContext,useReducer} from 'react'
import { useNavigate } from 'react-router-dom'
import "./List.css"
import userImg from "../../images/user.jpg"
import List from './List'
import Search from './Search'
import { searchReducer,initialState } from '../../reducer/UserReducer'

export const searchContext = createContext();
const AptList = () => {
    
  const [state, dispatch] = useReducer(searchReducer, initialState)
  return (

    <searchContext.Provider value = {{state,dispatch}} >
      <div id='AppointmentList'>
          <Search /> 
          {!state ? <List  />: null}
      </div>
    </searchContext.Provider>
  )
}

export default AptList