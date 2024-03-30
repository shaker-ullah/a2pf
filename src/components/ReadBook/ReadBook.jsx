import { useEffect, useState } from "react";
import { getData } from "../../utilities/Storage";
import Read from "../Read/Read";


const ReadBook = () => {
    const [readBooks, setReadBooks] = useState([])
    useEffect(()=>{
        const storeData = getData()
        setReadBooks(storeData)
    })
    return (
        <div>
        <h1 className="text-start">this is read Book {readBooks.length}</h1>    
        {
            readBooks.map(read =><Read key={read.id} read={read}></Read>)
        }
        </div>
    );
};

export default ReadBook;