import React from 'react'
import '../App.css'
import { useContext } from 'react';
import { ThemeContext } from '../App';
import logo from '../assets/logo.jpg';
import modeImg from '../assets/modeImg.png';

function Navbar() {

    const { mode, toggleMode } = useContext(ThemeContext)

    return (
        <div>
            <nav id='navbar'>

                <div id='app_name'>
                    <img src={logo} alt='logo' className='logo' />
                    <h1 id='title'>Inter Quiz</h1>
                </div>

                <button id='modeButton' onClick={toggleMode}>
                    <img src={modeImg} alt='mode' className='mode' />
                    <h3 className='mode_name'>{mode ? 'Light' : 'Dark'}</h3>
                </button>

            </nav>
        </div>
    )
}

export default Navbar