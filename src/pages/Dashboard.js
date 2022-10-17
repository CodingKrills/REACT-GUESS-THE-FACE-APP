import React from 'react'
import { Link } from "react-router-dom";

import confused from '../public/icons/confused.png'

const Dashboard = () => {
    return (
        <div className='container' style={{ marginTop: "4%" }}>

            <div class="px-4 py-4 my-4 text-center">
                <img class="d-block mx-auto mb-4" src={confused} alt="" width="92" height="77" />
                <h1 class="display-7 fw-bold">GUESS THE FACE</h1>
                <div class="col-lg-6 mx-auto">
                    {/* <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p> */}
                    {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                    </div> */}
                </div>
            </div>

            {/* //* ROW */}
            <div className='row'>

                {/* //* COL */}
                <div className='col-3'>
                    <Link className='nav-link' to='person/1/step/1'>
                        <div className="card shadow py-3">
                            <div className="card-body text-center">
                                <b>GUESS THE PERSON NO 1</b>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* //* COL */}
                <div className='col-3'>
                    <Link className='nav-link' to='person/2/step/2'>
                        <div className="card shadow py-3">
                            <div className="card-body text-center">
                                <b>GUESS THE PERSON NO 2</b>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* //* COL */}
                <div className='col-3'>
                    <Link className='nav-link' to='person/3/step/3'>
                        <div className="card shadow py-3">
                            <div className="card-body text-center">
                                <b>GUESS THE PERSON NO 3</b>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* //* COL */}
                <div className='col-3'>
                    <Link className='nav-link' to='person/4/step/4'>
                        <div className="card shadow py-3">
                            <div className="card-body text-center">
                                <b>GUESS THE PERSON NO 4</b>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Dashboard