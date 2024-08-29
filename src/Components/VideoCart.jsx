import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap"
import { addVideoHistoryApi, deleteAVideoApi } from "../../Services/allAPI";

const VideoCart = ({ video, setDeleteVideoResponse,insideCategory }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const { name, link } = video
    let today = new Date()
    let timestamp = new Intl.DateTimeFormat('en-US',
      {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: "2-digit"
      }
    ).format(today);
    // console.log(timestamp);

    let videoHistory = { name, link, timestamp }
    // make api call
    await addVideoHistoryApi(videoHistory)
  }

  const removeVideo = async (id) => {
    await deleteAVideoApi(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted=(e,id)=>{
    console.log("Drag Started"+id);
    e.dataTransfer.setData("VideoId",id)
    
    
    
  }

  return (
    <>
      <Card style={{ width: '16rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
        <Card.Img variant="top" style={{ width: '16rem',height:'17rem' }}
          onClick={handleShow}
          src={video?.url} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h3>{video?.name}</h3>
            {insideCategory?null:<Button onClick={() => removeVideo(video?.id)} ><i className="fa-solid fa-trash"></i></Button>}
          </Card.Title>

        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="315"
          src={video?.link}
          title="YouTube video player"
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe></Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCart
