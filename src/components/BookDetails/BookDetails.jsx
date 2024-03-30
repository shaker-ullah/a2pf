import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const details = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    console.log(idInt)
    const book = details.find(detail=>detail.id === idInt)
    console.log(book)


const handleRead =()=>{
  toast('you have add successfully ')
}





    return (
        <div>
            <h1>Book Details {id}</h1>
            <div className="hero bg-base-200">
  <div className="flex">
  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <img src={book.image} alt="" />
    </div>
    <div className=" lg:text-left px-11">
      <h1 className="text-5xl font-bold">{book.title}</h1>
      <p className="mt-2">By:{book.writer}</p>
      <hr className="my-4" />
      <h4 className="font-bold">{book.category}</h4>
      <hr className="my-4" />
      <div className="flex justify-center gap-4">
        <h4 className="font-bold text-xl">Review:</h4>
        <p>{book.review}</p>
      </div>
      <h4 className="font-bold mt-2 ">Tags:</h4>
      <hr className="my-4" />
     <div className="">
     <p className="m-4">Number of pages:</p>
      <p className="m-4">Publisher:</p>
      <p className="m-4">Year of Publishing:</p>
      <p className="m-4">Ratings: {book.ratings}</p>
     </div>
     <div>
     <button onClick={handleRead} className="btn btn-outline btn-accent mx-6">Read</button>
     <button className="btn btn-gray btn-accent">Wishes</button>

     </div>
    </div>
  </div>
</div>
<ToastContainer/>
        </div>
    );
};

export default BookDetails;