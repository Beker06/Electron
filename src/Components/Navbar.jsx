import React, { useEffect, useState } from 'react';
import Luna from '../Img/moon.png';
import Sol from '../Img/sun.png';
import { ThemeContext } from '../App';

const Navbar = () => {

    const [lightMode, setLightMode] = useState(false);

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

  return (
    <>
        <header>
            <nav id="navbar" className={`${lightMode ? "light" : ""}`}>
                <h1>electron</h1>
                <div className='theme-container' onClick={() => setLightMode(!lightMode)}>
                    {lightMode ? <img src={Sol} alt="them-icon"/> : <img src={Luna} alt="them-icon"/>}
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar;