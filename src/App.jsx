import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Organisms/Header'
import Home from './components/pages/Home'
import './global.css'
import Details from './components/pages/Details'

class App extends Component {
  render () {
    return (
      <>
        <BrowserRouter>
          <Header />
          <main>
            <section>
                <Routes>
                  <Route path={'/'} element={<Home />} />
                  <Route path={'/details/:id'} element={<Details />} />
                </Routes>
            </section>
          </main>
        </BrowserRouter>
      </>
    )
  }
}

export default App