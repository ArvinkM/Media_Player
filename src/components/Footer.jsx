import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='bg-dark py-2 ' style={{marginTop: "220px"}}>
      <Row>
        <Col lg={3}> <h1>
  <span className='text-danger'>Media</span>{' '}
  <span className='text-white'>Player</span>
</h1>
 <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam molestiae quae exercitationem quis similique, provident corrupti doloremque a in? Culpa quaerat reprehenderit minima inventore qui, voluptas ea consectetur harum fuga.</p></Col>
        <Col lg={3}><h2 className='text-white'>Pages</h2>
        <ul className='text-white list-unstyled'>
        <li>Landing Page</li>
        <li>Home</li>
        <li>Watch-history</li>
        </ul>
        </Col>
       
       
        <Col lg={3}><h2 className='text-white'>Features</h2>
        <ul className='text-white list-unstyled'>
        <li>Play Anything</li>
        <li>Categorize Videos</li>
        <li>Manage Videos</li>
        </ul></Col>

        <Col lg={3}><div className='mt-2 p-2'>
        <i className="fa-brands fa-facebook fa-lg me-3" style={{ color: 'white' }}></i>
        <i class="fa-brands fa-instagram fa-lg me-3"  style={{ color: 'white' }}></i>
        <i class="fa-brands fa-whatsapp fa-lg me-3" style={{ color: 'white' }}></i>
        <i class="fa-brands fa-x-twitter fa-lg me-3"  style={{ color: 'white' }}></i>
        </div>
        <div className='mt-2'>
        <input className='text-white border-dark' type="text" /> <button className='btn btn-danger btn-sm'>Search</button>
        </div>
        </Col>
        
      </Row>
      <h5 className='text-center text-white mt-2'>Media-Player@2025</h5>
      </div>




    
     
  )
}

export default Footer