import React from 'react' //{useState, useEffect}
import { Link } from 'react-router-dom';
// import {authFetch} from '../axios/custom'
import {books} from '../data/books';
// import {DashboardNavbar} from '../Extra';


const mySecondTest = () => {
  return (
    <section className='booklist'>
        {books.map((book) => {
            return <Book key={book.id} {...book} ></Book>           
        })}
    </section>
  );
}

const Book = ({ id, img, title, author }) => {
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = () => {
        alert('hello world');
    }

    const complexExample = (id) => {
        alert(`Books ID value ${id}` );
    }

    return (
        <>
            <article style={{ textAlign: 'center' }} className='container book'>
                <img style={{ width: 150 }} src={process.env.REACT_APP_PUBLIC_URL + img} alt="" />  
                <h3 onClick={() => complexExample(id)}>{author.toUpperCase()}</h3>
                <h4>{title} </h4>
                <button type="button" onClick={clickHandler}>Refrerence Example</button>
                <p>
                    <Link to={`/products/${id}`}>Single Book</Link>
                </p>
            </article>
        </>
    );
}

export default mySecondTest