import React from 'react'
import prelo from '../images/prelo.svg'

function Loader() {
  return (
    <div className='loader'>
        <img src={prelo} alt='Preloader' width={290} />
    </div>
  )
}

export default Loader
