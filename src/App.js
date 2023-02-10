import './Styles/table.css'
import Table from './Components/Table';
import Layout from './Components/Layout';
import { useState } from 'react';
import {UseThemeContext} from '../src/context/themeContext'


function App() {
  const {isDarkMode} = UseThemeContext()


  

  return (
    <>
  
      <Layout>
        <div className={`main-container ${isDarkMode && "main-dark"}` } >
          <h1>Periodic Table of Elements</h1>
          <Table/>
        </div>
      </Layout>
    
    </>
  );
}

export default App;
