import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Link} from 'react-router-dom'
import Rating from '../components/ui/Rating'
import Price from '../components/ui/Price'

const BookInfo = ({books}) =>  {
  return (
<div id="books__body">
    <main className="books__main">
    <div className="books__container">
        <div className="row">
            <div className="books__selected--top">
<Link to='/books' className='book__link'>
    <FontAwesomeIcon icon='arrow-left'></FontAwesomeIcon>
</Link>
<Link to='/book'><h2 className="book__selected--title--top">Books</h2>
</Link>
            </div>
            <div className="book__selected">
                <figure className="book__selected--figure">
                    <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="book__selected--img" />
                </figure>
                <div className="book__selected--description">
                    <h2 className="book__selected--title">Crack The Code Interview</h2>
               <Rating rating='4'/>
               <div className="book__selected--price"></div>
                <Price originalPrice={50} salePrice={null}></Price>
                </div>
            </div>
        </div>
    </div>
    </main>
</div>  )
}

export default BookInfo