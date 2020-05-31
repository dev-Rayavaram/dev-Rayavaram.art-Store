import React from 'react';
import { Button } from 'react-bootstrap';
 import Header from './Header';
 import {connect} from 'react-redux';
 import {addBasket} from './actions/addAction';

function Product(props){
  let product="Tanjore1";
  console.log("props inside product",props);
    return (
    <div className='product'>
        <Header/>
              <ul>
                <li>
                  <img  src={require('../images/image-sm-1.jpg')}  alt="tanjore"/>
                  <div className="product-details">
                  <p>
                   Name:
                    Price:
                    Quantity:
                     </p> 
                    <Button className="button" type="button" value="button" onClick ={()=>props.addBasket(product)}>Buy</Button>
                  </div>
                </li>
                <li>
                  <img  src={require('../images/image-sm-1.jpg')}  alt="tanjore"/>
                  <div className="product-details">
                  <p>
                   Name:
                    Price:
                    Quantity:
                     </p> 
                    <Button color="success" type="button" value="button" >Buy</Button>
                  </div>
                </li>
                <li>
                  <img  src={require('../images/image-sm-1.jpg')}  alt="tanjore"/>
                  <div className="product-details">
                  <p>
                   Name:
                    Price:
                    Quantity:
                     </p> 
                    <Button color="success" type="button" value="button" >Buy</Button>
                  </div>
                </li>
                <li>
                  <img  src={require('../images/image-sm-1.jpg')}  alt="tanjore"/>
                  <div className="product-details">
                  <p>
                   Name:
                    Price:
                    Quantity:
                     </p> 
                    <Button color="success" type="button" value="button"  >Buy</Button>
                  </div>
                </li>
                <li>
                  <img  src={require('../images/image-sm-1.jpg')}  alt="tanjore"/>
                  <div className="product-details">
                  <p>
                   Name:
                    Price:
                    Quantity:
                     </p> 
                    <Button color="success" type="button" value="button" >Buy</Button>
                  </div>
                </li>
                <li>
                  <img  src={require('../images/image-sm-1.jpg')}  alt="tanjore"/>
                  <div className="product-details">
                  <p>
                   Name:
                    Price:
                    Quantity:
                     </p> 
                    <Button color="success" type="button" value="button" >Buy</Button>
                  </div>
                </li>
                <li>
                  <img  src={require('../images/image-sm-1.jpg')}  alt="tanjore"/>
                  <div className="product-details">
                  <p>
                   Name:
                    Price:
                    Quantity:
                     </p> 
                    <Button color="success" type="button" value="button"  >Buy</Button>
                  </div>
                </li>
                <li>
                  <img  src={require('../images/image-sm-1.jpg')}  alt="tanjore"/>
                  <div className="product-details">
                  <p>
                   Name:
                    Price:
                    Quantity:
                     </p> 
                    <Button color="success" type="button" value="button"  >Buy</Button>
                  </div>
                </li>
                <li>
                  <img  src={require('../images/image-sm-1.jpg')}  alt="tanjore"/>
                  <div className="product-details">
                  <p>
                   Name:
                    Price:
                    Quantity:
                     </p> 
                    <Button color="success" type="button" value="button"  >Buy</Button>
                  </div>
                </li>
              </ul>
          </div> 
     );
  
};
    
export default connect(null,{addBasket})(Product);