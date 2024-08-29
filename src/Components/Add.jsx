import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap"
import { uploadVideoApi } from "../../Services/allAPI";

const Add = ({setuploadvideoresponse}) => {

  const [uploadVideo, setuploadVideo] = useState({
    id: '',
    name: '',
    url: '',
    link: ''
  })

  const getYoutubeLink = (e) => {
    const { value } = e.target
    if (value.includes('v=')) {
      let VID = value.split('v=')[1].slice(0, 11)
      console.log(`hello:${VID}`);
      setuploadVideo({ ...uploadVideo, link: `https://www.youtube.com/embed/${VID}` })
    } else {
      setuploadVideo({ ...uploadVideo, link: " " })
    }
  }

  const handleAdd = async () => {
    const { id, name, url, link } = uploadVideo;
    if (!id || !name || !url || !link) {
      alert("Please enter All the fields")
    } else {
      // upload to json server
      const result = await uploadVideoApi(uploadVideo)
      console.log(result);
      if (result.status > 199 && result.status < 300) {
        alert('Video Added successfully')
        handleClose();
        setuploadVideo({
          id:" ",name:" ",url:" ",link:" "
        });
        setuploadvideoresponse(result.data);
      } else {
        alert(result.message)
      }

    }
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex mb-5 mt-5 align-content-center">
        <h2>Upload Videos</h2>
        <Button onClick={handleShow} className=" ms-2 bg-transparent border-0 ">
          <i className="fa-sharp fa-solid fa-upload fa-bounce fa-xl"></i></Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video  <i className="fa-sharp fa-solid fa-upload fa-bounce fa-sm"></i> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <FloatingLabel
              controlId="floatingName"
              label="VideoId"
              className="mb-3"
            >
              <Form.Control type="text"
                onChange={(e) => setuploadVideo({ ...uploadVideo, id: e.target.value })}
                placeholder="Enter the Video Id" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingName"
              label="VideoName"
              className="mb-3"
            >
              <Form.Control type="text"
                onChange={(e) => setuploadVideo({ ...uploadVideo, name: e.target.value })}
                placeholder="Enter the Video Name" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingName"
              label="Image Url"
              className="mb-3"
            >
              <Form.Control type="text"
                onChange={(e) => setuploadVideo({ ...uploadVideo, url: e.target.value })}
                placeholder="Image Url" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingName"
              label="Video Url"
              className="mb-3"
            >
              <Form.Control type="text"
                onChange={getYoutubeLink}
                placeholder="Video Url" />
            </FloatingLabel>



          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
