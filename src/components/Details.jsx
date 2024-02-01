import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import notImge from '../assets/null.webp'

const Details = () => {

  const location = useLocation();

  const el = location.state

  if (el.show.image == null) {
    var img = notImge
  } else {
    var img = el.show.image.original
  }

  useEffect(() => {
    console.log(el)
    // console.log(el.image.medium)
  }, [])

  return (
    <div className='container'>
      <div className="row mt-5 pt-5">
        <div className="col-md-6 d-flex justify-content-center align-items-center justify-content-md-start">
          <img src={img} className='w-75' alt="" />
        </div>
        <div className="col-md-6 mt-5 mt-md-0">
            <p className='fw-bold text-danger fs-1'>{el.show.name}</p>
            <p className='fs-3 text-info'>country <span className='fw-bold'>{ el.show.network==null ? "null" : el.show.network.country.name}
             ({ el.show.network==null ? "null" : el.show.network.country.code}) </span></p>
            <p className='fs-3 text-info'>premiered on <span className='fw-bold'>{el.show.premiered}</span></p>
            <p className='fs-3 text-info'>ended <span className='fw-bold'>{el.show.ended}</span></p>
            <p className='fs-3 text-info'>schedule <span className='fw-bold'>{el.show.schedule.time}</span></p>
            <p className='fs-3 text-info'>timezone <span className='fw-bold'>{el.show.network == null ? "null" :el.show.network.country.timezone} </span></p>
            <p className='fs-3 text-info'>averageRuntime <span className='fw-bold'>{el.show.averageRuntime} min </span></p>
            <p className='fs-3 text-info'>language <span className='fw-bold'>{el.show.language}</span></p>
            <p className='fs-3 text-info'>rating <span className='fw-bold'>{el.show.rating.average}</span></p>
            <p className='fs-3 text-info'>type <span className='fw-bold'>{el.show.type}</span></p>
        </div>
        <div className="row mt-0 pt-5 mt-md-5">
          <div className="col-12 text-center">
            <p className='fs-3 fw-bold'> Summery </p>
            <p className='text-primary'>{ el.show.summary }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
