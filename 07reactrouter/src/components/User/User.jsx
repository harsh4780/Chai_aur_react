import React from 'react'
import {useParams} from 'react-router-dom'
function User(props) {
  const {userid} = useParams()
  return (
    <div className='bg-gray-600
    text-center py-7 text-white'>User :{userid} </div>
  )
}

export default User