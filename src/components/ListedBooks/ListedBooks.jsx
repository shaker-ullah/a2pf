import { useState } from "react";
import { Link, Outlet } from "react-router-dom";



const ListedBooks = () => {
    const [tablist, setTablist] = useState(1)

   
    return (
        <div>
            <button className="btn bg-gray-300 w-full font-bold text-xl">BOOKS</button>
            {/* Tab  */}
            <div className="my-8">
                <div role="tablist" className="tabs tabs-lifted flex">
                    <Link to='' onClick={()=>setTablist(1)} role="tab" className={`tab w-40 mx-0 font-semibold ${tablist ===1 ? 'border-1 border-b-0 bg-slate-500  text-white': 'border-1 '}`}>Read</Link>
                    
                    <Link to={`wishes`} onClick={()=>setTablist(2)} role="tab" className={`tab w-40 mx-0 font-semibold ${tablist ===2 ? 'border=1 border-b-0 bg-black text-white': 'border-1'}`}>Wishes</Link>
                   
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;