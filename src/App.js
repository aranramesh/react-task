import React, { useReducer } from 'react'
import First from './components/First'
// import Second from './components/Second'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from './components/Add'
import { Context } from './Context'
import Reducer from './Reducer'
function App() {
     const [state,dispatch] = useReducer(Reducer,{addValue:[]})
  return (
    <Context.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<First />}></Route>
      <Route path='Add' element={<Add />}></Route>
    </Routes>
    </BrowserRouter>
    </Context.Provider>
  )
}

export default App

