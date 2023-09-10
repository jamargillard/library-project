import React from 'react'
import {Link} from 'react-router-dom'

const Explore = () => {
  return (
<section id='explore'>
    <div className="container">
        <div className="row__column
        row explore__btn">
        </div>
        <h2>Explore more <span className="purple">Books</span></h2>
    <Link to="/books">
        <button className='btn'>Explore books</button>
    </Link>
    </div>
</section>  
)
}

export default Explore