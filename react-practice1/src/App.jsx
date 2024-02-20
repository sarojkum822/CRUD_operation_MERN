import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUsers from './CreateUsers'
import UpdateUser from './UpdateUser'
import Users from './Users'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Users />}></Route>
            <Route path='/createUser' element={<CreateUsers />}></Route>
            <Route path='/update/:id' element={<UpdateUser />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
