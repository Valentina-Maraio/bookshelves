import React from 'react'
import user from '../../assets/user.svg'
import Login from '../../login/Login'
import '../../App.css'

const Home = () => {
  return (
    <>
    <div className='App'>
      <header className='App-header'>
        <img className='App-logo' src={user} alt="user"/>
        <Login/>
      </header>
    </div>
    </>
  )
}

export default Home