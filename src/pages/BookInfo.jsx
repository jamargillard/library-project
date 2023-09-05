import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Rating from '../components/ui/Rating'
import Price from '../components/ui/Price'
import Book from '../components/ui/Bookie'

const BookInfo = ({ books }) =>  {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id);
    console.log(book)
  return (
<div id="books__body">
    <main className="books__main">
    <div className="books__container">
        <div className="row">
            <div className="book__selected--top">
<Link to='/books' className='book__link'>
    <FontAwesomeIcon icon='arrow-left'></FontAwesomeIcon>
</Link>
<Link to='/books' className="book__link">
    <h2 className="book__selected--title--top">Books</h2>
</Link>
            </div>
            <div className="book__selected">
                <figure className="book__selected--figure">
                    <img src={book.url} alt="" className="book__selected--img" />
                </figure>
                <div className="book__selected--description">
                    <h2 className="book__selected--title">{book.title}</h2>
               <Rating rating={book.rating}/>
               <div className="book__selected--price"></div>
                <Price originalPrice={book.originalPrice} salePrice={book.salePrice}></Price>
                <div className="book__summary">
                <h3 className="book__summary--title">Summary</h3>
                <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea esse dignissimos ex quod hic sit veniam ad repellendus minima vero dolore harum autem fugit voluptatibus distinctio, quisquam vitae rem!
                    </p>
                    <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea esse dignissimos ex quod hic sit veniam ad repellendus minima vero dolore harum autem fugit voluptatibus distinctio, quisquam vitae rem!
                    </p>
                    <button className="btn">
                        Add To Cart
                        </button>
                  </div>
                  </div>
 

        </div>
      
        </div>

        </div>
    

 
<div className="books__container">
    <div className="row">
        <div className="book__selected--top">
            <h2 className="book__selected--title--top">
                Recommended Books
            </h2>
        </div>
        <div className="books">
        {
            books
            .filter((book) => book.rating === 5 && +book.id !== +id)
            .slice(0,4)
.map(book => <Book book={book} key={book.id}></Book>)
        }
        </div>
    </div>
</div>
    </main>

</div>  
)
}

export default BookInfo