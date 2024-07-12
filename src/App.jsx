import { useState } from 'react'
import './App.css'
import Users from './components/Users'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetail from './components/UserDetail';

function App() {
 
  return (
    <>
     <Router basename="/ReactDz4">
      <div>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
     
    </>
  )
}

export default App
