import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

// * Imports

import '../public/css/overlay.css'

// import person1step1 from '../public/persons/virat-kohli/person1step1.png'
// import person1step2 from '../public/persons/virat-kohli/person1step2.png'
// import person1step3 from '../public/persons/virat-kohli/person1step3.png'
// import person1step4 from '../public/persons/virat-kohli/person1step4.png'
// import home from '../public/icons/home.png'

import person1 from '../public/persons/person1.png'

import person2 from '../public/persons/person2.jpg'

const Person = () => {

    const { personId, stepId } = useParams();

    const [pId, setPid] = useState(null);
    const [sId, setSid] = useState(null);

    console.log(pId, sId)

    useEffect(() => {

        setPid(Number(personId))
        setSid(Number(stepId))

    }, [personId, stepId])

    return (
        <div className='container' style={{ marginTop: "1%" }}>

            <div className='row justify-content-left'>
                <Link to="/">
                    <h6>GO HOME</h6>
                </Link>
            </div>

            <div className=''>
                <div className='row justify-content-center'>
                    <div className='col col-md-1'>
                        <h6>PERSON - <b>{pId}</b></h6>
                    </div>
                    <div className='col col-md-1'>
                        <h6>STEP - <b>{sId}</b></h6>
                    </div>
                </div>
            </div>
            <div className='text-center'>

                {/* // * person 1  */}

                {pId === 1 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={person1} alt="virat" />
                        <div className="overlay-top-step-1"></div>
                        <div className="overlay-right-step-1"></div>
                        <div className="overlay-bottom-step-1"></div>
                        <div className="overlay-left-step-1"></div>
                    </div>
                }

                {pId === 1 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={person1} alt="virat" />
                        <div className="overlay-top-step-2"></div>
                        <div className="overlay-right-step-2"></div>
                        <div className="overlay-bottom-step-2"></div>
                        <div className="overlay-left-step-2"></div>
                    </div>
                }

                {pId === 1 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={person1} alt="virat" />
                        <div className="overlay-top-step-3"></div>
                        <div className="overlay-right-step-3"></div>
                        <div className="overlay-bottom-step-3"></div>
                        <div className="overlay-left-step-3"></div>
                    </div>
                }

                {pId === 1 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={person1} alt="virat" />
                        <div className="overlay-top-step-4"></div>
                        <div className="overlay-right-step-4"></div>
                        <div className="overlay-bottom-step-4"></div>
                        <div className="overlay-left-step-4"></div>
                    </div>
                }

                {/* // * person 1  */}

                {/* // * person 2  */}

                {pId === 2 && sId === 1 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={person2} alt="virat" />
                        <div className="overlay-top-step-1"></div>
                        <div className="overlay-right-step-1"></div>
                        <div className="overlay-bottom-step-1"></div>
                        <div className="overlay-left-step-1"></div>
                    </div>
                }

                {pId === 2 && sId === 2 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={person2} alt="virat" />
                        <div className="overlay-top-step-2"></div>
                        <div className="overlay-right-step-2"></div>
                        <div className="overlay-bottom-step-2"></div>
                        <div className="overlay-left-step-2"></div>
                    </div>
                }

                {pId === 2 && sId === 3 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={person2} alt="virat" />
                        <div className="overlay-top-step-3"></div>
                        <div className="overlay-right-step-3"></div>
                        <div className="overlay-bottom-step-3"></div>
                        <div className="overlay-left-step-3"></div>
                    </div>
                }

                {pId === 2 && sId === 4 &&
                    <div className='image-container'>
                        <img className='img-fluid overlay-image-responsive' width={500} height={500} src={person2} alt="virat" />
                        <div className="overlay-top-step-4"></div>
                        <div className="overlay-right-step-4"></div>
                        <div className="overlay-bottom-step-4"></div>
                        <div className="overlay-left-step-4"></div>
                    </div>
                }

                {/* // * person 2  */}

                <nav>
                    <ul className="pagination justify-content-center pagination-lg text-center mt-4">
                        <li className="page-item mx-1" aria-current="page">
                            <button
                                className={`
                             btn btn-lg 
                         ${sId === 1 && pId !== 1 ? 'btn-primary ' : 'btn-outline-primary disabled'}
                         `}
                                onClick={() => { setPid(pId - 1); setSid(1) }}>
                                PREV PERSON
                            </button>
                        </li>
                        <li className="page-item mx-1" aria-current="page">
                            <button
                                className={`
                                btn btn-lg 
                            ${sId === 1 ? 'btn-primary' : 'btn-outline-primary'}
                            `}
                                onClick={() => setSid(1)}>
                                1
                            </button>
                        </li>
                        <li className="page-item mx-1" aria-current="page">
                            <button
                                className={`
                             btn btn-lg 
                         ${sId === 2 ? 'btn-primary' : 'btn-outline-primary'}
                         `}
                                onClick={() => setSid(2)}>
                                2
                            </button>
                        </li>
                        <li className="page-item mx-1" aria-current="page">
                            <button
                                className={`
                             btn btn-lg 
                         ${sId === 3 ? 'btn-primary' : 'btn-outline-primary'}
                         `}
                                onClick={() => setSid(3)}>
                                3
                            </button>
                        </li>
                        <li className="page-item mx-1" aria-current="page">
                            <button
                                className={`
                             btn btn-lg 
                         ${sId === 4 ? 'btn-primary' : 'btn-outline-primary'}
                         `}
                                onClick={() => setSid(4)}>
                                4
                            </button>
                        </li>
                        <li className="page-item mx-1" aria-current="page">
                            <button
                                className={`
                             btn btn-lg 
                         ${sId === 4 ? 'btn-primary ' : 'btn-outline-primary disabled'}
                         `}
                                onClick={() => { setPid(pId + 1); setSid(1) }}>
                                NEXT PERSON
                            </button>
                        </li>
                    </ul>
                </nav>

            </div>


        </div >
    )
}

export default Person