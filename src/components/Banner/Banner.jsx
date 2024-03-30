import { NavLink } from 'react-router-dom';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="px-10  flex justify-start items-center ">
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf
                            View The List</h1>
                        <NavLink to='booklist' className='btn bg-lime-300 my-10'>view to list</NavLink>
                    </div>
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Banner;