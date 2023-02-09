import './Styles/table.css'
import Table from './Components/Table';
import Layout from './Components/Layout';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] =useState("dark")
  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Layout>
        <div className='main-container'>
          <h1>Periodic Table of Elements</h1>
          <small>with React + CSS Grid</small>
          <Table/>
        </div>
      </Layout>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
