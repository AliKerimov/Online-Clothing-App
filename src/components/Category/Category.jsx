import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

function Category() {
  return (
    <div>
      <h1>Category Name</h1>
      <div className="cards">
       <Link to='/pdp'> <Card/></Link>
       <Link to='/pdp'> <Card/></Link>
       <Link to='/pdp'> <Card/></Link>
       <Link to='/pdp'> <Card/></Link>
       <Link to='/pdp'> <Card/></Link>
       <Link to='/pdp'> <Card/></Link>
      </div>
    </div>
  )
}

export default Category