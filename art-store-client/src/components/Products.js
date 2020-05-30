import React,{Component} from 'react';
import { Button } from 'react-bootstrap';
 import Header from './Header'
class Product extends Component {
  render(){
    return (
      <div className="App">
    <div className='product'>
              <Header/>

        <section id="projects">
              <ul>
                <li>
                  <img  src={require('../images/image-sm-1.jpg')}  alt="tanjore"/>
                  <div className="product-details">
                  <p>
                   Name:
                    Price:
                    Quantity:
                     </p> 
                    <Button className="button" type="button" value="button"  onClick={this.addOrder}>Buy</Button>
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
                    <Button color="success" type="button" value="button"  onClick={this.addOrder}>Buy</Button>
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
                    <Button color="success" type="button" value="button"  onClick={this.addOrder}>Buy</Button>
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
                    <Button color="success" type="button" value="button"  onClick={this.addOrder}>Buy</Button>
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
                    <Button color="success" type="button" value="button"  onClick={this.addOrder}>Buy</Button>
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
                    <Button color="success" type="button" value="button"  onClick={this.addOrder}>Buy</Button>
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
                    <Button color="success" type="button" value="button"  onClick={this.addOrder}>Buy</Button>
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
                    <Button color="success" type="button" value="button"  onClick={this.addOrder}>Buy</Button>
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
                    <Button color="success" type="button" value="button"  onClick={this.addOrder}>Buy</Button>
                  </div>
                </li>

              </ul>
            </section>
            </div>
   


      </div>
     );
  }
  
};
    
export default Product;