import { Link } from "react-router-dom"
import Add from "../Components/Add"
import View from "../Components/View"
import Category from "../Components/Category"
import { useState } from "react"

const Home = () => {
  const [uploadVideoresponse,setuploadvideoresponse]=useState({})
  const [dropVideoResponse,setDropVideoResponse]=useState([])
  return (
   <>
      <div className="container mt-3 mb-3 d-flex justify-content-between">
        <div className="add-videos">
          <Add setuploadvideoresponse={setuploadvideoresponse}/>
        </div>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'blurviolet',fontSize:'30px'}}>Watch-History
        <i className="fa-solid fa-arrow-right-to-bracket"></i></Link>
      </div>
      <div className="container-fluid mt-5 mb-3 row">
        <div className="col-lg-9">
          <View uploadVideoresponse={uploadVideoresponse} setDropVideoResponse={setDropVideoResponse}/>
        </div>
        <div className="col-lg-3">
        <Category dropVideoResponse={dropVideoResponse}/>
        </div>

      </div>
      </>
   
  )
}

export default Home
