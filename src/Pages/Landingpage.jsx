import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import {useNavigate } from 'react-router-dom';
function Landingpage() {

  const navigateByUrl=useNavigate()
  return (
   <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
        <h1 style={{color:"black",fontSize:"40px"}}>Welcome to <span className='text-danger'>Media Player</span></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt quas aperiam modi sapiente quibusdam saepe molestiae quis. Sint delectus nam quidem doloremque laborum veniam laboriosam laudantium, eius eveniet voluptatum!
          Doloribus eius vel nobis distinctio, itaque quos at officia magni unde maiores ipsa? Exercitationem, reprehenderit sit. Ex eveniet corrupti quidem magnam error libero voluptatem veritatis molestias, iusto laborum voluptatibus reiciendis.
        </p>
        <Button onClick={()=>navigateByUrl("/home")} className="btn btn-dark">Get Started</Button>
        </Col>
        <Col lg={5}>
        <img src="https://media.tenor.com/OiwgU0MtwOcAAAAC/213.gif" alt="" /></Col>
        <Col></Col>
      </Row>


  <div className='container mb-5 mt-5 d-flex flex-column align-items-center justify-content-between-center w-100'>
  <h5 className='text-danger' style={{fontSize:"40px"}}>Featurues</h5>
  
  <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>

  <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'200px'} width={''} src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1035.gif" />
        <Card.Body className='fw-bolder'>
          <Card.Title className='text-danger fw-bolder'>Play Anything</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body >
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'200px'} width={''} src="https://i.pinimg.com/originals/9f/49/d8/9f49d80ae9e1e1623adcd63b9a18e1a6.gif" />
        <Card.Body className='fw-bolder'>
          <Card.Title className='text-danger fw-bolder'>Categorize Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'200px'} width={''} src="https://steamuserimages-a.akamaihd.net/ugc/931551196253772421/208C371B8E73E667B9955B0CB01CB47E49DFF330/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" />
        <Card.Body className='fw-bolder'>
          <Card.Title className='text-danger fw-bolder'>Manage Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

  </div>
  </div>
  
 
  


     

<div className='container border border-dark border-1 rounded p-4  mt-5 d-flex justify-content-center align-items-center'>
<div className='col-lg-5'>
<h4 className='text-danger'>Simple,Powerful & Fast</h4>
<h6 className='mb-5 mt-4'><span className='text-danger'>Play Anything</span>: Lorem ipsum dolor sit, repellendus eveniet rem enim consequatur labore quod error aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod nemo harum veniam illum vero nesciunt sapiente eveniet cumque iusto tenetur accusamus similique placeat, expedita, voluptatibus fuga exercitationem natus incidunt.
Incidunt eum pariatur.</h6>
<h6 className='mb-5 mt-4'><span className='text-danger'>Categorize Videos</span>: Lorem ipsum dolor sit, repellendus eveniet rem enim consequatur labore quod error aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod nemo harum veniam illum vero nesciunt sapiente eveniet cumque iusto tenetur accusamus similique placeat, expedita, voluptatibus fuga exercitationem natus incidunt.
Incidunt eum pariatur.</h6>
<h6 className='mb-5 mt-4'><span className='text-danger'>Manage Videos</span>: Lorem ipsum dolor sit, repellendus eveniet rem enim consequatur labore quod error aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod nemo harum veniam illum vero nesciunt sapiente eveniet cumque iusto tenetur accusamus similique placeat, expedita, voluptatibus fuga exercitationem natus incidunt.
Incidunt eum pariatur.</h6>
</div>
<div className='col-lg-5 ms-5'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/L9szn1QQfas?si=avj0qjv2ci0q85sU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
</div>
</div>
  
  
</>
  
  )
}

export default Landingpage
