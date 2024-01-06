import React  from 'react'
import {useLoaderData}  from 'react-router-dom'
function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect (()=>{
    //       fetch('https://api.github.com/users/harsh4780') 
    //       .then(response => response.json())
    //       .then(data=>{
    //         console.log(data)
    //         setData(data)
           
    //       }) 
    // },[])
  return (
    <div className="flex items-center">
     <img src={data.avatar_url} alt=""  className='w-100 h-80 rounded-full'/>
      <div className='text-center
     text-3xl m-4 bg-gray-600 p-4 h-20 w-full '>Github Followers: {data.followers}</div>
    </div>
  )
}

export default Github
export const githubInfoLoader = async ()=>{

  const response =  fetch('https://api.github.com/users/harsh4780')
  return (await response).json()

}