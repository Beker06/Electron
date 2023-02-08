import React from 'react'
import "../Styles/table.css"
import data from "../data/Periodic-Table-JSON.json"

const Table = () => {
  return (
    <>
    <div className='table-container'>
      {data.elements.map(element => (
        <div key={element.name}>{element.symbol}</div>
      ))}
    </div>
    </>
  )
}

export default Table