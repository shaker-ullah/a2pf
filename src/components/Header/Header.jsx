import { NavLink } from "react-router-dom";



const Header = () => {
    
    return (
        <div>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     
        <NavLink className='btn mr-4 font-bold' to='/'>Home</NavLink>
        {/* <NavLink className='btn mr-4 font-bold' to='/book'>Book</NavLink> */}
       
        <NavLink className='btn mr-4 font-bold' to='/booklist'>Book List</NavLink>
     
        <NavLink className='btn mr-4 font-bold' to='/readpage'>Read to Page</NavLink>
        
      
      </ul>
    </div>
    <NavLink to='/' className=" text-xl font-bold">Book Review</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
        <NavLink className='btn mr-4 font-bold' to='/'>Home</NavLink>
        {/* <NavLink className='btn mr-4 font-bold' to='/books'>Book</NavLink> */}
      
      
        <NavLink className='btn mr-4 font-bold' to='/booklist'>Book List</NavLink>
     
        <NavLink className='btn mr-4 font-bold' to='/readpage'>Read to Page</NavLink>
       
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink className='mr-4 btn bg-lime-500'>Sign In</NavLink>
    <NavLink className='mr-4 btn bg-green-400'>Sign Up</NavLink>
  </div>
</div>
        </div>
    );
};

export default Header;