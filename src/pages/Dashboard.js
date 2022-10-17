import React from 'react'
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className='container' style={{ marginTop: "4%" }}>

            {/* //* ROW */}
            <div className='row'>

                {/* //* COL */}
                <div className='col-3'>
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <Link className='nav-link' to='person/1/step/1'>
                                <b>GUESS THE PERSON NO 1</b>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* //* COL */}
                <div className='col-3'>
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <Link className='nav-link' to='person/2/step/2'>
                                <b>GUESS THE PERSON NO 2</b>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* //* COL */}
                <div className='col-3'>
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <Link className='nav-link' to='person/3/step/3'>
                                <b>GUESS THE PERSON NO 3</b>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* //* COL */}
                <div className='col-3'>
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <Link className='nav-link' to='person/4/step/4'>
                                <b>GUESS THE PERSON NO 4</b>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard