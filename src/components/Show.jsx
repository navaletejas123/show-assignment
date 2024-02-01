import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import notImge from '../assets/null.webp'

const Show = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState([]);

    const getData = async () => {
        const data = await fetch('https://api.tvmaze.com/search/shows?q=all')
        const res = await data.json()
        console.log(res)
        // console.log(res[0].show.image.medium)
        setShow(res)
    }

    useEffect(() => { getData() }, [])


    const handleClick = (el) => {
        navigate('/details', { state: el })
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                {
                    show.map((el, i) => (
                        <div className="col-md-4 mb-3" key={i}>
                            <div className="card w-100 h-100">
                                <img src={el.show.image == null ? notImge : el.show.image.original} className="card-img-top h-75" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold text-danger">{el.show.name}</h5>
                                    <p className="card-text"><span className='fw-bold'>Language : </span> {el.show.language} </p>
                                    <p className="card-text"><span className='fw-bold'>Average Runtime : </span> {el.show.averageRuntime} min </p>
                                    <button href="#" onClick={() => { handleClick(el) }} className="btn btn-sm btn-primary rounded-0 fw-bold text-warning">See More</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Show
