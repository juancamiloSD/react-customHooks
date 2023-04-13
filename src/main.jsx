import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormCustomHook } from './02-useEffect/FormCustomHook'
import { MultipleCustomHooks } from './03-examples/'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'
import { CallbackHook } from './06-memos/CallbackHook'
import { TodoApp } from './07-useReducer/TodoApp'
// import './07-useReducer/intro-reducer'
import { MainApp } from './08-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'  

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
