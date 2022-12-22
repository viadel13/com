import React from 'react'
import Preloader from '../images/Preloader.svg'

function Loader() {
  return (
    <div className='loader'>
        <img src={Preloader} alt='Preloader' />
    </div>
  )
}

export default Loader
