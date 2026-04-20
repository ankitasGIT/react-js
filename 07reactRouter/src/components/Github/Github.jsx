import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

//   useEffect(() => {
//     fetch('https://api.github.com/users/ankitasGIT')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.followers)
//         setData(data)
//     })
//   }, [])

  return (
    <div className='text-center m-4 text-white bg-gray-600 text-3xl p-4'>
      Github Followers: {data["followers"]}
      <img src={data.avatar_url} width={300}></img>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ankitasGIT')
    return response.json()
}