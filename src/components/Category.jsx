import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { getCategoryAPI,addCategoryAPI, deleteCategoryAPI, getAVideoAPI, updateCategoryAPI } from '../services/allAPI';
import Videocard from './Videocard';
function Category(setDropVideoResponse) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const[categoryName,setCategoryName]=useState("")
//console.log(categoryName);
const[allCategories,setAllCatagories]=useState([])




const handleAdd=async()=>{
  if(categoryName){
    const result=await addCategoryAPI({categoryName,allVideos:[]})
   // console.log(result);
   if(result.status>=200 && result.status<300){
    handleClose()
    setCategoryName("")
    getCategories()
  }else{
    console.log(result.message);}
  }else{
    
    alert("Please fill field")
  }
}


const getCategories=async()=>{
  const{data}=await getCategoryAPI()
  setAllCatagories(data)
}

//console.log(allCategories);

const removeCategory=async(id)=>{
  await deleteCategoryAPI(id)
  getCategories()
}

useEffect(()=>{
  getCategories()
},[setDropVideoResponse])

const dragOver=(e)=>{
  console.log("Video card drag over the category");
  e.preventDefault()

}

const videoDrop=async(e,categoryId)=>{
  console.log("Video Dropped");
  const videoId=e.dataTransfer.getData("videoId")
  console.log("videoId"+videoId+"dropped into"+categoryId);
  const {data}=await getAVideoAPI(videoId)
  // console.log(data);
  const selectedCategory=allCategories.find(item=>item.id==categoryId)
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);
  const res = await updateCategoryAPI(categoryId,selectedCategory)
  getCategories()
  
  
 
}

const videoDragStarted=(e,videoId,categoryId)=>{
  let dataShare={videoId,categoryId}
  // console.log(dataShare);
  e.dataTransfer.setData("data",JSON.stringify(dataShare))
  
}


  return (
    <div>
      <div className="d-grid">
        <button className='btn btn-danger' onClick={handleShow}>Add-Category</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
       

        <Modal.Body>

          
        <FloatingLabel controlId="floatingPassword" label="Category name" onChange={e=>setCategoryName(e.target.value)}>
        <Form.Control type="text" placeholder="Enter Category" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleAdd}>Create</Button>
        </Modal.Footer>
      </Modal>

  {
    allCategories?.length>0?allCategories.map(category=>(
      <div className="border border-2 rounded p-3 m-3" droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)}>
      <div className="d-flex justify-content-between">
        <h4>{category?.categoryName}</h4>
         <button className='btn btn-link' onClick={()=>removeCategory(category?.id)}><i class="fa-solid fa-trash text-danger"></i></button>
      </div>
<Row>
  {
    category?.allVideos.length>0?category?.allVideos.map(card=>(
     <Col sm={12} className='mb-2' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
     <Videocard video={card} insideCategory={true}/>
     </Col>
    )) :null
  }
</Row>


    </div>
    )):<p className='text-danger fw-bolder'>Nothing To Display</p>
  }
 </div>
 
  )
}

export default Category
