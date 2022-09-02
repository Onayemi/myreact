import React from 'react' //{useState}
import { Link, useParams } from 'react-router-dom';
import {books} from '../data/books';

const SingleBook = () => {
//   const [venue, setVenue] = useState(books)
//   const [singleproduct, setSingleProduct] = useState([]);
  const { id } = useParams();  
    // const product = Object.keys(books).find((book) => book.id === id);
    const product = books.find(book => book.id === 3);
    // setVenue(product)
    console.log(product)
    const {img, title, author} = product;
    // setVenue(product);
//   const product = books.filter((book, index) => typeof book.id === id);
//   console.log(books.filter(c => { return c.id === id; }));
//   const product = books.find((book) => book.id === id);
//   const { img, title, author } = product

// const fetchSingleBook = () => {
//     fetch(`url/${id}`).then(res => res.json())
//     .then(data => setSingleProduct)

// }

  return (
    <section className="section product">
    {product && (
        <div>
            <h1>{id}</h1>
            <img style={{ width: 150 }} src={process.env.REACT_APP_PUBLIC_URL + img} alt="" />  
            <h3>title: {title}</h3>
            <h3>Author: {author}</h3>
        </div>
    )}
        {/* <img style={{ width: 150 }} src={process.env.REACT_APP_PUBLIC_URL + product.img} alt={product.title} />
        <p>{product.title}</p>
        <h3>{product.author}</h3> */}
        <p><Link to='/products'>back to Products Page</Link></p>
    </section>
  )
}

export default SingleBook;