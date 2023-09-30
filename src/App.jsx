import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import API from './API.jsx'

function App() {
  const [myData, setMyData] = useState([])
  const [error, setError] = useState("")



  // I want to get data on first time reload so am using useEffect hook
  // using promises
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       setMyData(res.data)
  //       console.log("res====>>>>>", res.data);
  //     })
  //     .catch((err) => {
  //       setError(err.message)
  //       console.log("err======>>>>", err);
  //     })



  // }, [])


  // using async await

  // const APIData = async () => {
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  //     console.log("res=====>>>>>", res);
  //     setMyData(res.data)
  //   } catch (err) {
  //     console.log("error====>>>>", error);
  //     setError(err.message)
  //   }
  // }

  // useEffect(() => {
  //   APIData()
  // }, )



  // best practice to handle API in axios

  const APIData = async () => {
    try {
      const res = await API.get("/posts")
      console.log("res=====>>>>>", res);
      setMyData(res.data)
    } catch (err) {
      console.log("error====>>>>", error);
      setError(err.message)
    }
  }

  useEffect(() => {
    APIData()
  },)


  return (
    <>
      {/* <h1>Hello world!</h1> */}
      {error !== "" && <h2>{error}</h2>}
      <div className='grid'>
        {
          myData.slice(0, 9).map((post) => {
            const { id, title, body } = post
            return (
              <div className='card' key={id}>
                <h1>{title.slice(0, 10).toUpperCase()}</h1>
                <p>{body.slice(0, 100)}</p>
              </div>
            )
          })
        }
      </div>

    </>
  )
}

export default App
