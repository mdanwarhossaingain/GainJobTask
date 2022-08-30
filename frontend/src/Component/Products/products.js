




import React from 'react'
import { Form, Row,Col, Table } from 'react-bootstrap'
import "./products.css"

const products = () => {
  return (
     <>
       <div className="totalDiv">
        <div className="headerDiv">
        <div className="fontStyle">All Product</div>
        <div>
           <div className='select-products'>
                 <div className='textstyle'>   Sort By:  &nbsp; &nbsp; </div>

                 <div>
                     <Form.Select className='formStyle'>
                        
                        <option value=''>Best Value</option>
                        <option value=''>Best Performance </option>
                        <option value=''>Best Camera</option>
                        
                    </Form.Select>
                 
                 </div>
                   
           </div>
        </div>
        </div>

            <Table responsive borderless>
                <thead>
                    <tr className="topStyle">
                        <td className='title1' width={30}>Model</td>
                        <td className='title' width={20}>Rom/Rom</td>
                        <td className='title3' width={30}>Tag</td>
                        <td className='title4' width={20}>Price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Row>
                             <div className="startItems">
                                <Col sm={12} md={6} lg={6}>
                                     <img className='image' src='https://th.bing.com/th/id/R.f2128f262e847d69b3f0213e809a8b85?rik=nBrHa0h8MoY%2fqQ&pid=ImgRaw&r=0' />
                                </Col>

                                <Col sm={12} md={6} lg={6}>
                                     <div className="styleText1">
                                     <h4 className='product-title'>Samsung Galaxy S22</h4>
                                     <p  className='product-brand'>Samsung</p>
                                     </div>
                                </Col>
                                </div>
                            </Row>
                        </td>
                        <td className='rom'>8/256</td>
                        <td>
                            <div className='d-flex'>
                                <button className="bestValue">Best Value</button> &nbsp;
                                <button className="bestValue-three">Best Camera</button>
                            </div>
                        </td>
                        <td className='price'>TK 20000</td>
                    </tr>

                    <tr>
                        <td>
                            <Row>
                               <div className="startItems">
                               
                                <Col sm={12} md={6} lg={6}>
                                     <img className='image' src='data:image/jpeg;base64,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' />
                                </Col>

                                <Col sm={12} md={6} lg={6}>
                                  <div className="styleText1">
                                     <h4 className='product-title'>Apple 13 Pro</h4>
                                     <p className='product-brand'>Apple</p>
                                     </div>
                                </Col>
                               
                               
                               </div>
                            </Row>
                        </td>
                        <td className='rom'>8/256</td>
                        <td>
                             <div className='d-flex'>
                                <button className="bestValue-three">Best Camera</button>&nbsp;<br />
                                <button className="bestValue-two">Best Performance</button>
                            </div>
                        </td>
                        <td className='price'>TK 20000</td>
                    </tr>

                    <tr>
                        <td>
                            <Row>
                              <div className="startItems">
                                <Col sm={12} md={6} lg={6}>
                                     <img className='image' src='data:image/jpeg;base64,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6SxDp8BGctPdvwej5N0nyYPVU5U87r5LNaFgltSxRRZ4usSNjafHLS4j7MrWzdptLhLWVYrF955FjXV4s9BJKNx9oyuWhFWzMRUg1DV7Y+s6Fkmxufzpn7nAe4CzhX1FvCxd0/SmHgYaDRcvHyc5hLQfWQKJhC51m2db7SytL3S1dJgI4FuGS48pJw6X5MatPH9FtTuNeHUdaufjPibJ3YJ8XTSbn49wtnU0evM8Oq6TZvyk/wB51l7pG+ogZtjx6ly6av2X1241rLloxVxwFes1sULR0EcYDPsVpJFLbe7ku41GMOE93T9JYfrQ6cxty8fDD3sO0H1lVUWl05j+D6ZbvzEj8J1OWSR3XLYoi2Me5cvSaPZDR6u1z4xI8fjSfEf9FvYqVOEARxMAHkB/JSh5tT7La3ZYGP21oMf2cTWsZ+5GA1dFS7FUIdj5yZHD8/l7BdcAByGPRSgw6+m0awAjiaAABwA8FlhrW8gB6KUQEREBERAREQEREBERBcZyRGckQUu5n1VKqdzPqqUBERAREQEUqEBERAREQEREBERAWi13Qq2pQP8AhAkAJa4cweYK3qIPC9W7PXQ27M0Az1Hl9mJuRI+EgfhTW44jwfj1wM/FoqFyerKWs7t2/g6OUkNcerSASD7L3bV9J+khtis7u7cBL4pGgHBxghwPAtPJwPPK8h1bs1OzUHfg09eGV7nuEURlERPEiEkjLemTn+oS6fU+7zLZhpQnJy0tie4HpI/dIfZoWLD9FsSvFKve1S1g73wtkDQOJy+Z+5+B1yFv6HZYyFjq+jzWZBgfSdblJZ6tqw4b8yV1lbshdnY1moX3CAYxVpsbXrt8u7hAag8/hivyRRvmvUdNilZuEVFhtX3A/nCM8D6yBbGl2fZM9r62kWbshOfpOtylzMnxbXjwz5ly9Mpdm9FpAd1Wj3D8ZwBJ+a27IomABrWjHLAwg4Sv2T1a0xrL93u4ByrVGthgb5COMBv2LfUeyujU8FsDXOH4zxk/aug4IgtMr14gAyNoA4DAV0DHAIiCVClQgIiICIiAiIgIiICIiAiIgIiILjOSIzkiCl3M+qpUu5n1UICIiAiIgIiICIiAiIgIiICIiAiIgKkxxHmxp9gqkQQGtHADA8lKIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiC4zkihnJEEOBJPDxUbXdCiIG13Qptd0KIgbXdCm13QoiBtd0KbXdCiIG13Qptd0KIgbXdCm13QoiBtd0KbXdCiIG13Qptd0KIgbXdCm13QoiBtd0KbXdCiIG13Qptd0KIgbXdCm13QoiBtd0KbXdCiIG13Qptd0KIgbXdCm13QoiBtd0KbXdCiIG13Qptd0KIgbXdCm13QoiBtd0KbXdCiIG13Qptd0KIgbXdCm13QoiBtd0KbXdCiIK25A4oiIP/Z' />
                                </Col>

                                <Col sm={12} md={6} lg={6} >
                                <div className="styleText1">

                                 <h4 className='product-title'>Google Pixel 6</h4>
                                     <h6 className='product-brand'>Google</h6>
                                
                                </div>
                                    
                                </Col>
                                </div>
                            </Row>
                        </td>
                        <td className='rom'>8/256</td>
                        <td>
                            <div className='d-flex'>
                               <button className="bestValue-two">Best Performance</button>
                            </div>
                        </td>
                        <td className='price'>TK 20000</td>
                    </tr>
                </tbody>
            </Table>
       </div>
    </>
  )
}

export default products