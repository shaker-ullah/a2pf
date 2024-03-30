import PropTypes from 'prop-types'

const Read = ({ read }) => {
    console.log(read)
    const { image, title, category,writer } = read
    return (
        <div>
            <div className="flex card-side bg-base-100 shadow-xl border border-gray-400 my-10">
                <figure><img src={image} alt="Book" className='w-[300px]' /></figure>
                <div className="ml-20">
                    <h2 className="card-title">{title}</h2>
                    <p>By: {writer}</p>
                    <p className='text-xl font-semibold text-start'>Tags:</p>
                    <p className='text-start'>Publisher:</p>
                    <p className='text-start'>Pages:</p>
                    <hr className='my-4 border-gray-300 w-[100%]'/>
                    <p>{category}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>  
            </div>
        </div>
    );
};


Read.propTypes = {
    read: PropTypes.object
}
export default Read;