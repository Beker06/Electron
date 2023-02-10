import React, { useEffect, useState } from 'react';
import Luna from '../Img/moon.png';
import Sol from '../Img/sun.png';
import {UseThemeContext} from '../context/themeContext'

const Navbar = () => {
    const {setIsDarkMode, isDarkMode} = UseThemeContext()

    // const lightStyles = {
    //     backgroundColor: 'white',
    //     color: 'black',
    // }

    // const darkStyles = {
    //     backgroundColor: 'black',
    //     color: 'white',
    // };

    // useEffect(() => {
    //     document.body.style = lightMode ? lightStyles : darkStyles;
    //   }, [lightMode]);

    const toggleDarkMode = () => {

        setIsDarkMode(!isDarkMode)

    }

  return (
    <>
        <header>
            <nav id="navbar" className={`${isDarkMode ? "dark" : "light"}`}>
                <h1>electron</h1>
                <div className='theme-container' onClick={toggleDarkMode}>
                    {isDarkMode ?   <img src={Luna} alt="them-icon"/> :<img src={Sol} alt="them-icon"/>} 
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar;