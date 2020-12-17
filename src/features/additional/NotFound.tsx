import react from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <h1 className="mt-5 text-center" >
                404
            </h1>
            <h2 className="mt-2 text-center">
                Error page
             </h2>
            <h4 className="mt-3 text-center">
                Page not found :(
             </h4>
            <div className="container mt-3 d-flex justify-content-center" >
                <Link to="/" className="text-white text-decoration-none" >
                    <button className='btn btn-danger' >
                        Back to home page
                </button>
                </Link>
            </div>

        </>
    )
}