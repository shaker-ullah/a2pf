import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Book from "../Book/Book";






const Home = () => {
    const books = useLoaderData()
    // console.log(books)

    return (
        <div>
            <Banner></Banner>
        <h3 className="text-center text-3xl font-bold mt-10">Books</h3>
            <div className="grid grid-cols-3 my-8 gap-10">
                {
                    books?.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;