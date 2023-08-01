import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';
import './components/style.css';

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/cart/:id' element={<CardsDetails/>}/>
      </Routes>
    </>
  )
}

export default App
 