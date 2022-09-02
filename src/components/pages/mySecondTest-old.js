import React from 'react' //{useState, useEffect}

const firstBook = {
    img : 'https://images-na.ssl-images-amazon.com/images/I/61tqfa+xbWL._AC_UL600_SR600,400_.jpg',
    title : 'Lorem ipsum dolor sit amet consectetur',
    author : 'Colleen Hoover',
};
const secondBook = {
    img : 'https://images-na.ssl-images-amazon.com/images/I/71j0FLAauxL._AC_UL600_SR600,400_.jpg',
    title : 'Lorem ipsum dolor sit amet consectetur',
    author : 'Onayemi Samuel',
};
const thirdBook = {
    img : 'https://images-na.ssl-images-amazon.com/images/I/71sifGleAWL._AC_UL600_SR600,400_.jpg',
    title : 'Lorem ipsum dolor sit amet consectetur',
    author : 'Onayemi Kehinde',
};
const fourthBook = {
    img : 'https://images-na.ssl-images-amazon.com/images/I/61tqfa+xbWL._AC_UL600_SR600,400_.jpg',
    title : 'Lorem ipsum dolor sit amet consectetur',
    author : 'Onayemi Yemi',
};
// const author = 'Colleen Hoover'
// const title = 'Lorem ipsum dolor sit amet consectetur';
// const img = 'https://images-na.ssl-images-amazon.com/images/I/61tqfa+xbWL._AC_UL600_SR600,400_.jpg';
const mySecondTest = () => {
//   const [data, setData] = useState([]);
//  const { id, name } = data;
  return (
    <section className='booklist'>
        {/* <Person /> */}
        <Book 
            img={firstBook.img} 
            title={firstBook.title} 
            author={firstBook.author}
        >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dignissimos incidunt tempore minima! Dignissimos obcaecati ex officia voluptate possimus aut.</p>
        </Book>
        <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
        <Book img={thirdBook.img} title={thirdBook.title} author={thirdBook.author} />
        <Book img={fourthBook.img} title={fourthBook.title} author={fourthBook.author} />
        {/* <Message /> */}
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
    // const title = 'Lorem ipsum dolor sit amet consectetur'
    // console.log(author)
    // const { img, title, author } = props;
    return (
        <article style={{ textAlign: 'center' }} className='book'>
            <img style={{ width: 300 }} src={img} alt="" />
            <h1>{author.toUpperCase()}</h1>
            {children}
            <h4>{title} </h4>
        </article>
    );
}

export default mySecondTest