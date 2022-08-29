
import React,{useState} from 'react'
import { Form,Button,Modal,Row,Col } from 'react-bootstrap'
import Select from 'react-select'
import {FaCheck,FaTimesCircle} from 'react-icons/fa'
import "../Header/header.css"


function Header() {

  // tracking modal open or close

 const [show, setShow] = useState(false);

    const handleClose = ()  => setShow(false);
    const handleShow  = ()  => setShow(true);
  
    // values for select multiple input 
    const options = [
        { value: 'best value', label: 'Best Value' },
        { value: 'best performance', label: 'Best Performance' },
        { value: 'best camera', label: 'Best Camera' }
     ]



  return (
    <>
    
   
    <nav className="navigation">

    <div className="logo">
      LOGO
    </div>


     <div className="sideDiv">

           <div className="add_product_btn2">
               
                    <p className="bottomDown">Search by title or product</p>

                    <p className="bottomDown" >  <i class="fa fa-search" aria-hidden="true"></i> </p>
               

                
            </div> &nbsp;

            <div className="add_product_btn" onClick={handleShow}>
                Add Product
            </div>

    </div>
       
    </nav>



    <Modal show={show} size='lg' onHide={handleClose}>
            <Modal.Header closeButton style={{backgroundColor:'#0095A0',color:'white'}}>
            <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col sm={6} md={6} lg={12}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='text'  placeholder='Enter Your Product Name'/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col sm={6} md={6} lg={6}>
                            <Form.Group>
                                <Form.Label>Brand</Form.Label>
                                <Form.Control type='text' placeholder='Enter Your Brand Name'/>
                            </Form.Group>
                        </Col>

                        <Col sm={6} md={6} lg={6}>
                            <Form.Group>
                                <Form.Label>Rom/Rom</Form.Label>
                                <Form.Control type='text' placeholder='Enter Rom'/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className='mt-3'>
                        <Col sm={6} md={6} lg={12}>
                            <Form.Group>
                                <Form.Label>Tag</Form.Label>
                                <Select 
                                    options={options}
                                    isMulti 
                                    isSearchable
                                    placeholder='select multiple value'
                                 />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className='mt-3'>
                        <Col sm={6} md={6} lg={12}>
                            <Form.Group>
                                <Form.Label>Price</Form.Label>
                                <Form.Control type='text'  placeholder='Enter Product Price'/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                <FaTimesCircle /> Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
                <FaCheck /> Publish
            </Button>
            </Modal.Footer>
        </Modal>

    
    </>
  )
}

export default Header