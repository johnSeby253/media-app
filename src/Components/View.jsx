import { Col, Row } from "react-bootstrap"
import VideoCart from '../Components/VideoCart'
import { useEffect, useState } from "react"
import { getAllUploadedVideoApi, getVideoCategoryApi, updateCategoryApi } from "../../Services/allAPI"

const View = ({uploadVideoresponse,setDropVideoResponse}) => {

  const [deleteVideoresponse,setDeleteVideoResponse]=useState(false)

  const [allVideos, setAllVideos] = useState([])

  useEffect(() => {
    getallVideos()
    setDeleteVideoResponse(false)
  }, [uploadVideoresponse,deleteVideoresponse])

  const getallVideos = async () => {
    const result = await getAllUploadedVideoApi()
    console.log(result);
    if (result.status == 200) {
      console.log(result.data);
      setAllVideos(result.data)
    } else {
      console.log("Api failed");
      setAllVideos([])
    }
  }

  console.log(allVideos);

  const dragOver=(e)=>{
    console.log("Video card dragged over the Category");
    e.preventDefault()
  }

  const videoDropped=async(e)=>{
    const {VideoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
    // console.log(VideoId,categoryId);
    const {data}= await getVideoCategoryApi();
    const selectedCategory=data.find(item=>item.id==categoryId)
    const result= selectedCategory.videoList.filter(video=>video.id!==VideoId)
    console.log(result);

    let {id,categoryName}=selectedCategory
    let newCategory={id,categoryName,videoList:result}
    console.log(newCategory);
    const res=await updateCategoryApi(categoryId,newCategory)
    console.log(res);
    
    
    
  }


  return (
    <>
      <h2>All Videos</h2>
      <Row  droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
        {
          allVideos?.length > 0 ? allVideos.map(video => (
            <Col  sm={12} md={4} lg={3}>
              <VideoCart video={video} setDeleteVideoResponse={setDeleteVideoResponse} />
            </Col>
          )):<p className="text-danger fw-bolder">Noting to Display</p>
        }


      </Row>
    </>
  )
}

export default View
