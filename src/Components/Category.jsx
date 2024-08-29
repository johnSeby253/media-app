import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import { addVideoCategoryApi, deleteVideoCategoryApi, getAVideoApi, getVideoCategoryApi, updateCategoryApi } from "../../Services/allAPI";
import VideoCart from "./VideoCart";

const Category = ({dropVideoResponse}) => {
  const [categoryName, setCategoryName] = useState(" ")
  const [allCategory, setAllCategory] = useState([])

  const [show, setShow] = useState(false);

  useEffect(() => {
    getCategory()
  }, [dropVideoResponse])



  const getCategory = async () => {
    const { data } = await getVideoCategoryApi()
    setAllCategory(data)
    console.log("Data", data);
  }

  const handleAdd = async () => {
    if (categoryName) {
      const result = await addVideoCategoryApi({ categoryName, videoList: [] })
      if (result.status >= 200 && result.status < 300) {
        handleClose()
        getCategory()
        setCategoryName('')
      } else {
        alert(result.message)
      }
    } else {
      alert("Please Enter the Field")
    }
  }

  const removeCategory=async(id)=>{
    await deleteVideoCategoryApi(id)
    getCategory()
  }
const dragOver=(e)=>{
  console.log("Video card dragged over the Category");
  e.preventDefault()
  
}
  const videoDropped=async(e,categoryId)=>{
    const VideoId=e.dataTransfer.getData("VideoId")
    console.log("video  id"+VideoId,"dropped in to the"+ categoryId);
    const {data}= await getAVideoApi(VideoId)
    const selectedCategory= allCategory.find(item=>item.id===categoryId)
    selectedCategory.videoList.push(data)
    console.log(selectedCategory);
    const res=await updateCategoryApi(categoryId,selectedCategory)
    getCategory()
  }

  const videoDragStarted=(e,VideoId,categoryId)=>{
    let dataShare={VideoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-grid">
        <button className="btn btn-info" onClick={handleShow}>Add Category</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Add Category" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      {
        allCategory?.length > 0 ? allCategory.map(category => (
          <div className="border rounded p-4 m-3">
            <div className="d-flex justify-content-between align-items-center" droppable='true' 
            onDragOver={e=>dragOver(e)}
            onDrop={e=>videoDropped(e,category?.id)}  >
              <h5>{category?.categoryName}</h5>
              <button className="btn" onClick={()=>removeCategory(category?.id)}><i className="fa-solid fa-trash"></i></button>
            </div>

            <Row>
              {
                category?.videoList?.length>0?category?.videoList.map(card=>(
               <Col sm={12} className="mb-3" draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                <VideoCart video={card} insideCategory={true}/>
               </Col>
                )):null
              }
            </Row>

          </div>
        )) : <p>Nothing To Display</p>
      }

    </>
  )
}

export default Category
