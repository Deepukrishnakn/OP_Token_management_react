import React from 'react'
import {Row,Col} from 'react-bootstrap';
import Phone_verify from '../components/user/Phone_verify'

function PhoneVerifyPage() {
  return (
    <div>
        
<Row>
    <Col lg={4}>

    </Col>
    <Col lg={4} className='loginbody mt-5'>
        <Phone_verify/>
    </Col>
    <Col lg={4}>
        
    </Col>
</Row>


    </div>
  )
}

export default PhoneVerifyPage