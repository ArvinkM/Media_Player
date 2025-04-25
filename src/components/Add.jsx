import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../services/allAPI';

function Add({ setUploadVideoResponse }) {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setUploadVideo({ id: "", title: "", url: "", link: "" })
  };
  const handleShow = () => setShow(true);

  const [uploadVideo, setUploadVideo] = useState({ id: "", title: "", url: "", link: "" })
    // console.log(uploadVideo);


const getYouTubeLink = (e) => {
    const { value } = e.target
    console.log(value);
    
    if (value.includes("v=")) {
      let VID = value.split('v=')[1].slice(0, 11) 
      console.log(`https://www.youtube.com/embed/${VID}`);
      setUploadVideo({ ...uploadVideo, link: `https://www.youtube.com/embed/${VID}` })
    } else {
      setUploadVideo({ ...uploadVideo, link: "" })
    }
  }

  const handleAdd = async () => {
    const { id, title, url, link } = uploadVideo


    if (!id || !title || !url || !link) {
      alert("please fill missing fields")
    } else {
      // upload video to json server
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        alert("video uploaded")
        handleClose()
        setUploadVideo({ id: "", title: "", url: "", link: "" })
        setUploadVideoResponse(result.data)
      } else {
        alert(result.message)
      }
    }
  }


  return (
    <div>
      <div className='d-flex mb-5 mt-5 align-items-center'>
        <h2>Upload Videos</h2>
        <button className='btn btn-link' onClick={handleShow}> <i class="fa-solid fa-upload fa-bounce fa-2x mb-2"></i></button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Video Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>

              <FloatingLabel
                controlId="floatingInput1"
                label="Enter Video ID"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Enter VideoID" onChange={(e) => setUploadVideo({ ...uploadVideo, id: e.target.value })} />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput2"
                label="Video Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Video Name" onChange={(e) => setUploadVideo({ ...uploadVideo, title: e.target.value })} />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput3"
                label="Image URL"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Image URL" onChange={(e) => setUploadVideo({ ...uploadVideo, url: e.target.value })} />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput4"
                label="Video URL"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Video URL" onChange={getYouTubeLink} />
              </FloatingLabel>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAdd}>Upload</Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  )
}

export default Add
