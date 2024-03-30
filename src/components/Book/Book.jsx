import PropTypes from 'prop-types'
import {FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Book = ({book }) => {
const {id, image,category,title,writer,ratings} = book;

    return (
        <div>
   <Link to={`/book/${id}`}>
   <div className="card  shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className=" ">
    <div className='flex my-3 '>
        <h2 className='mr-8 '>{book?.category}</h2>
        <h2>{category}</h2>
    </div>
    <h2 className="card-title">{title}</h2>
    <p className='text-start'>Writer: {writer}</p>
    <div className='flex justify-between'>
<p>{category}</p>
<span className='flex justify-center items-center gap-4'>{ratings} <FaRegStar></FaRegStar></span>
    </div>
  </div>
</div>
   </Link>
        </div>
    );
};



Book.propTypes={
    book: PropTypes.object
}


export default Book;