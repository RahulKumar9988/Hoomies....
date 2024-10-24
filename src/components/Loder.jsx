import React from 'react'
import { HashLoader, SyncLoader } from 'react-spinners'

function Loder() {
  return (
    <div className='text-white flex justify-center items-center h-screen'>
        <SyncLoader color="#00ff2d" />
    </div>
  )
}

export default Loder