import React from 'react'
import {Link} from 'gatsby'
import Title from "../globals/Title"

export default function Info() {
    return (
        <section className='py-5'>
            <div className='container'>
                <Title title="Our Story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Link to="/about/">
                        <button className="btn text-uppercase btn-yellow">
                                About Page
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
